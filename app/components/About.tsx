import { Button, Grid, Typography } from "@mui/material";
import Dialog from "./Dialog";
import { fullAboutMe, sizes } from "../constants";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

const About = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleShowDialog = () => {
    setIsDialogOpen(true);
  };

  const handleHideDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Grid
      component="section"
      id="about"
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingTop={12}
    >
      <Grid
        size={sizes}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <SectionTitle padding={3}>Trayectoria</SectionTitle>
        <Typography variant="body1" padding={1}>
          Abogada recibida en la Universidad de Buenos Aires (UBA) - Facultad de
          Derecho y Ciencias Sociales en el año 1997. Dedicada desde el año 2000
          a la resolución de conflictos personales y patrimoniales relacionados
          con el derecho de familia y asuntos sucesorios.
        </Typography>
        <Typography variant="body1" padding={1}>
          Práctica adquirida en estudios jurídicos de primer nivel, cursos de
          posgrado y actualización legislativa. Experiencia y desempeño de alto
          rendimiento en la especialidad.
        </Typography>
        <Button variant="contained" onClick={handleShowDialog}>
          ver más
        </Button>
      </Grid>
      <Dialog
        title="Trayectoria"
        isOpen={isDialogOpen}
        handleHideDialog={handleHideDialog}
      >
        {fullAboutMe.map((paragraph) => (
          <Typography key={paragraph} variant="body1" paragraph>
            {paragraph}
          </Typography>
        ))}
      </Dialog>
    </Grid>
  );
};

export default About;
