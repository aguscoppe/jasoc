import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";
import { sizes } from "../constants";
import SectionTitle from "./SectionTitle";
import Dialog from "./Dialog";

type ContactForm = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type ContactField = "name" | "email" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;
type Feedback = {
  severity: "success" | "error";
  message: string;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          action?: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  message: "",
  website: "",
};

const validateForm = (form: ContactForm): ContactErrors => {
  const errors: ContactErrors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name) {
    errors.name = "El nombre es obligatorio";
  } else if (name.length < 2) {
    errors.name = "Ingresa un nombre válido";
  }

  if (!email) {
    errors.email = "El mail es obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Ingresa un mail válido";
  }

  if (!message) {
    errors.message = "El mensaje es obligatorio";
  } else if (message.length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
};

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [turnstileError, setTurnstileError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!isDialogOpen || !turnstileReady || !turnstileSiteKey) {
      return;
    }

    let animationFrame = 0;
    let cancelled = false;

    const renderWidget = () => {
      if (cancelled) {
        return;
      }

      const element = turnstileRef.current;

      // MUI mounts the dialog content during its transition. Wait until the
      // container exists and has been painted before rendering Turnstile.
      if (!element || !window.turnstile) {
        animationFrame = window.requestAnimationFrame(renderWidget);
        return;
      }

      if (turnstileWidgetId.current) {
        return;
      }

      turnstileWidgetId.current = window.turnstile.render(element, {
        sitekey: turnstileSiteKey,
        action: "contact",
        callback: (token) => {
          setTurnstileToken(token);
          setTurnstileError("");
        },
        "expired-callback": () => {
          setTurnstileToken("");
          setTurnstileError("La verificación expiró. Intentá nuevamente.");
        },
        "error-callback": () => {
          setTurnstileToken("");
          setTurnstileError("No se pudo cargar la verificación de seguridad.");
        },
      });
    };

    animationFrame = window.requestAnimationFrame(renderWidget);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrame);
      if (window.turnstile && turnstileWidgetId.current) {
        window.turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
      }
    };
  }, [isDialogOpen, turnstileReady, turnstileSiteKey]);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));

    if (field !== "website" && errors[field]) {
      const nextForm = { ...form, [field]: value };
      setErrors(validateForm(nextForm));
    }
  };

  const handleBlur = (field: ContactField) => {
    const fieldError = validateForm(form)[field];

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: fieldError,
    }));
  };

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!turnstileToken) {
      setTurnstileError("Completá la verificación de seguridad");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Send the data to your Next.js route handler
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message");
      }

      setFeedback({
        severity: "success",
        message: "¡Mensaje enviado con éxito!",
      });
      setForm(initialForm);
      setErrors({});
      setTurnstileError("");
      setTurnstileToken("");
      setIsDialogOpen(false);
    } catch (err) {
      console.error(err);
      setFeedback({
        severity: "error",
        message: "Hubo un error al enviar el mensaje. Intente nuevamente.",
      });
      window.turnstile?.reset(turnstileWidgetId.current ?? undefined);
      setTurnstileToken("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDialogSubmit = () => {
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    formRef.current?.requestSubmit();
  };

  const handleOpenDialog = () => {
    setErrors({});
    setTurnstileError("");
    setTurnstileToken("");
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setTurnstileToken("");
    setIsDialogOpen(false);
  };

  const handleCloseFeedback = () => {
    setFeedback(null);
  };

  return (
    <Grid
      component="section"
      id="contact"
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingTop={12}
    >
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Turnstile script loaded");
          setTurnstileReady(true);
        }}
        onError={(error) => {
          console.error("Turnstile script failed to load", error);
        }}
      />
      <SectionTitle padding={3}>Contacto</SectionTitle>
      <Grid
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        size={sizes}
      >
        <Grid size={{ xs: 12 }}>
          <Image src="/map.png" alt="map" width={400} height={400} />
        </Grid>
        <Grid display="flex" flexDirection="column" size={{ xs: 12 }}>
          <Typography>
            Se realizan entrevistas en zona Tribunales o Caballito. Envía tu
            consulta a cualquiera de estos mails y recibirás una respuesta a la
            brevedad.
          </Typography>
          <Typography>bettina@jasoc.com.ar</Typography>
          <Typography>bettinaruibal@gmail.com</Typography>
          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
            onClick={handleOpenDialog}
          >
            Enviar consulta
          </Button>
        </Grid>
      </Grid>
      <Dialog
        title="Contacto"
        isOpen={isDialogOpen}
        handleHideDialog={handleCloseDialog}
        btnText={isSubmitting ? "Enviando..." : "Enviar"}
        btnAction={handleDialogSubmit}
        btnDisabled={isSubmitting}
      >
        <Grid
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap={2}
          padding={1}
        >
          <TextField
            label="Nombre"
            name="name"
            size="small"
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            onBlur={() => handleBlur("name")}
            autoComplete="name"
            required
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            label="Mail"
            name="email"
            type="email"
            size="small"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            onBlur={() => handleBlur("email")}
            autoComplete="email"
            required
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            multiline
            minRows={4}
            label="Mensaje"
            name="message"
            size="small"
            value={form.message}
            onChange={(event) => handleChange("message", event.target.value)}
            onBlur={() => handleBlur("message")}
            required
            error={Boolean(errors.message)}
            helperText={errors.message}
          />
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={(event) => handleChange("website", event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: 1,
              height: 1,
            }}
          />
          <div ref={turnstileRef} />
          {turnstileError && (
            <Typography color="error" variant="body2">
              {turnstileError}
            </Typography>
          )}
        </Grid>
      </Dialog>
      <Snackbar
        open={Boolean(feedback)}
        autoHideDuration={6000}
        onClose={handleCloseFeedback}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {feedback ? (
          <Alert
            onClose={handleCloseFeedback}
            severity={feedback.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {feedback.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Grid>
  );
};

export default Contact;
