import { Grid, Typography, useMediaQuery } from "@mui/material";
import { itemsAreas, sizes } from "../constants";
import Area from "./Area";
import DotsMobileStepper from "./DotsMobileStepper";
import { useState } from "react";

const getItemsPerView = (
  isXs: boolean,
  isSm: boolean,
  isMd: boolean,
  isLg: boolean,
): number => {
  if (isXs) return 1;
  if (isSm) return 2;
  if (isMd) return 3;
  if (isLg) return 4;
  return 4; // xl
};

const Areas = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isXs = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.only("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.only("md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.only("lg"));

  const itemsPerView = getItemsPerView(isXs, isSm, isMd, isLg);

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
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        size={sizes}
      >
        {itemsAreas.map((item, index) =>
          index >= activeStep && index < activeStep + itemsPerView ? (
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
        steps={itemsAreas.length - (itemsPerView - 1)}
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Grid>
  );
};

export default Areas;
