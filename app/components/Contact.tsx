import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { sizes } from "../constants";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const contactEmail = "mailto:bettina@jasoc.com.ar";

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
      <SectionTitle padding={3}>Solicitar consulta</SectionTitle>
      <Grid
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        size={sizes}
      >
        <Grid size={{ xs: 12 }}>
          <Image
            src="/map.png"
            alt="Mapa de atención en Tribunales y Caballito, Buenos Aires"
            width={400}
            height={400}
          />
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          size={{ xs: 12 }}
          sx={{
            textAlign: {
              sm: "left",
              xs: "center",
            },
          }}
        >
          <Typography>
            Contanos brevemente tu situación y nos pondremos en contacto a la
            brevedad para coordinar una entrevista presencial o virtual por
            Zoom.
          </Typography>
          <Button
            component="a"
            href={contactEmail}
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Enviar consulta
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
