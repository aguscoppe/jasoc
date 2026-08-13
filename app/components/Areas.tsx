import { Grid, Typography } from "@mui/material";
import { itemsAreas, sizes } from "../constants";
import Area from "./Area";
import DotsMobileStepper from "./DotsMobileStepper";
import { useState } from "react";

const Areas = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid
      component="section"
      id="areas"
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingTop={12}
    >
      <Typography variant="h3" padding={3}>
        Áreas de especialidad
      </Typography>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        size={sizes}
      >
        {itemsAreas.map((item, index) =>
          index >= activeStep && index < activeStep + 3 ? (
            <Area
              key={item.id}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ) : null,
        )}
      </Grid>
      <DotsMobileStepper
        steps={itemsAreas.length - 2}
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Grid>
  );
};

export default Areas;
