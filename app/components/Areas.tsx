import { Grid } from "@mui/material";
import { itemsAreas, sizes } from "../constants";
import Area from "./Area";
import DotsMobileStepper from "./DotsMobileStepper";
import Dialog from "./Dialog";
import SectionTitle from "./SectionTitle";
import useBreakpoints from "../hooks/useBreakpoints";
import { useState } from "react";

const getItemsPerView = (
  isXs: boolean,
  isSm: boolean,
  isMd: boolean,
  isLg: boolean,
): number => {
  console.log({
    isXs,
    isSm,
    isMd,
    isLg,
  });
  if (isXs) return 1;
  if (isSm) return 2;
  if (isMd) return 3;
  /*
  if (isLg) return 4;
  return 4; // xl
  */
  if (isLg) return 3;
  return 3; // xl
};

const Areas = () => {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isXs, isSm, isMd, isLg } = useBreakpoints();

  const itemsPerView = getItemsPerView(isXs, isSm, isMd, isLg);
  const lastPageStart = Math.max(itemsAreas.length - itemsPerView, 0);
  const pageCount = Math.max(Math.ceil(lastPageStart / itemsPerView) + 1, 1);
  const pageStart = Math.min(activePage * itemsPerView, lastPageStart);
  const activeArea = itemsAreas[activeAreaIndex];

  const handleNext = () => {
    const nextPage = Math.min(activePage + 1, pageCount - 1);
    setActivePage(nextPage);
    setActiveAreaIndex(Math.min(nextPage * itemsPerView, lastPageStart));
  };

  const handleBack = () => {
    const previousPage = Math.max(activePage - 1, 0);
    setActivePage(previousPage);
    setActiveAreaIndex(previousPage * itemsPerView);
  };

  const handleShowDialog = (areaIndex: number) => {
    setActiveAreaIndex(areaIndex);
    setIsDialogOpen(true);
  };

  const handleHideDialog = () => {
    setIsDialogOpen(false);
  };

  const handleNextDialog = () => {
    const nextIndex = Math.min(activeAreaIndex + 1, itemsAreas.length - 1);
    setActiveAreaIndex(nextIndex);

    const pageEnd = pageStart + itemsPerView - 1;
    if (nextIndex > pageEnd) {
      setActivePage(
        Math.min(Math.floor(nextIndex / itemsPerView), pageCount - 1),
      );
    }
  };

  const handleBackDialog = () => {
    const previousIndex = Math.max(activeAreaIndex - 1, 0);
    setActiveAreaIndex(previousIndex);

    if (previousIndex < pageStart) {
      setActivePage(Math.floor(previousIndex / itemsPerView));
    }
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
      <SectionTitle padding={3}>Áreas de especialidad</SectionTitle>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        size={sizes}
      >
        {itemsAreas.map((item, index) =>
          index >= pageStart && index < pageStart + itemsPerView ? (
            <Area
              key={item.id}
              title={item.title}
              summary={item.summary}
              icon={item.icon}
              handleShowDialog={() => handleShowDialog(index)}
            />
          ) : null,
        )}
      </Grid>
      <DotsMobileStepper
        steps={pageCount}
        activeStep={activePage}
        handleNext={handleNext}
        handleBack={handleBack}
      />
      <Dialog
        title={activeArea.title}
        isOpen={isDialogOpen}
        handleHideDialog={handleHideDialog}
        steps={itemsAreas.length}
        activeStep={activeAreaIndex}
        handleNext={handleNextDialog}
        handleBack={handleBackDialog}
      >
        {activeArea.text}
      </Dialog>
    </Grid>
  );
};

export default Areas;
