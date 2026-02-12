import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { sizes } from "../constants";

const Contact = () => {
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
      <Typography variant="h3" padding={3}>
        Contacto
      </Typography>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        size={sizes}
      >
        <Grid size={{ xs: 6 }}>
          <Typography marginY={4}>
            Se realizan entrevistas en zona Tribunales o Caballito. Envía tu
            consulta a cualquiera de estos mails y recibirás una respuesta a la
            brevedad.
          </Typography>
          <Typography marginY={4}>bettina@jasoc.com.ar</Typography>
          <Typography marginY={4}>bettinaruibal@gmail.com</Typography>
          <Button variant="contained" sx={{ marginTop: 2 }}>
            Enviar consulta
          </Button>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Image src="/map.png" alt="map" width={400} height={400} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
