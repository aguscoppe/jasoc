import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
const contactRecipient = process.env.CONTACT_TO_EMAIL ?? "bettina@jasoc.com.ar";
const contactAttempts = new Map<string, { count: number; windowStart: number }>();
const rateLimitWindow = 15 * 60 * 1000;
const maxAttemptsPerWindow = 5;

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
  website?: string;
  turnstileToken?: string;
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const attempt = contactAttempts.get(ip);

  if (!attempt || now - attempt.windowStart >= rateLimitWindow) {
    contactAttempts.set(ip, { count: 1, windowStart: now });
    return false;
  }

  attempt.count += 1;
  return attempt.count > maxAttemptsPerWindow;
};

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests" },
      { status: 429 },
    );
  }

  try {
    const rawBody: unknown = await request.json();

    if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
      return NextResponse.json(
        { success: false, error: "Invalid contact form data" },
        { status: 400 },
      );
    }

    const body = rawBody as Partial<ContactRequestBody>;
    const name =
      typeof body.name === "string" ? body.name.replace(/\s+/g, " ").trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";
    const turnstileToken =
      typeof body.turnstileToken === "string" ? body.turnstileToken : "";

    // Silently accept honeypot submissions without sending an email.
    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ success: true });
    }

    if (
      !name ||
      name.length > 100 ||
      !email ||
      email.length > 254 ||
      !isValidEmail(email) ||
      !message ||
      message.length > 5000 ||
      !turnstileToken ||
      turnstileToken.length > 2048
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid contact form data" },
        { status: 400 },
      );
    }

    if (!resend) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "Contact service is unavailable" },
        { status: 503 },
      );
    }

    if (!turnstileSecretKey) {
      console.error("TURNSTILE_SECRET_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "Contact service is unavailable" },
        { status: 503 },
      );
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: turnstileSecretKey,
          response: turnstileToken,
          remoteip: ip,
        }),
      },
    );
    const turnstileResult = (await turnstileResponse.json()) as {
      success?: boolean;
    };

    if (!turnstileResponse.ok || !turnstileResult.success) {
      return NextResponse.json(
        { success: false, error: "Captcha verification failed" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ??
        "Contact Form <onboarding@resend.dev>",
      to: contactRecipient,
      replyTo: email,
      subject: `Consulta de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
    });

    if (error) {
      console.error("Resend rejected contact email", {
        name: error.name,
        message: error.message,
        statusCode: error.statusCode,
      });
      return NextResponse.json(
        {
          success: false,
          error:
            process.env.NODE_ENV === "development"
              ? error.message
              : "Email provider rejected the message",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { success: false, error: "Unable to send message" },
      { status: 500 },
    );
  }
}
