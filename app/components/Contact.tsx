import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { sizes } from "../constants";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const contactEmail =
    "mailto:bettina@jasoc.com.ar,bettinaruibal@gmail.com?subject=Consulta%20desde%20la%20web";

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
            Se realizan entrevistas en zona Tribunales o Caballito. Envía tu
            consulta a cualquiera de estos mails y recibirás una respuesta a la
            brevedad.
          </Typography>
          <Typography>bettina@jasoc.com.ar</Typography>
          <Typography>bettinaruibal@gmail.com</Typography>
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
