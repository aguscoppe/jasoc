import {
  Close,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import type { ReactNode } from "react";

type DialogProps = {
  title: string;
  isOpen: boolean;
  handleHideDialog: () => void;
  children: ReactNode;
  activeStep?: number;
  handleNext?: () => void;
  handleBack?: () => void;
  steps?: number;
};

const Dialog = ({
  title,
  isOpen,
  handleHideDialog,
  children,
  activeStep,
  handleNext,
  handleBack,
  steps,
}: DialogProps) => {
  const hasNavigation =
    activeStep !== undefined &&
    handleNext !== undefined &&
    handleBack !== undefined &&
    steps !== undefined;

  const arrowSx = {
    ":hover": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    "@media (max-width: 399.99px)": {
      padding: 0,
      margin: 0,
      minWidth: "inherit",
    },
  };
  return (
    <MuiDialog
      open={isOpen}
      onClose={handleHideDialog}
      slotProps={{
        paper: {
          sx: {
            width: {
              xs: "calc(100% - 32px)",
              sm: "calc(100% - 64px)",
              md: "auto",
            },
            margin: { xs: 2, sm: 4 },
            borderRadius: { xs: "24px", sm: "40px" },
            padding: {
              xs: 0,
              sm: 1,
            },
          },
        },
      }}
    >
      <DialogTitle
        textAlign="center"
        sx={{
          position: "relative",
          padding: { xs: 1.5, sm: 2 },
          paddingRight: { xs: 5, sm: 6 },
        }}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: "1.2rem",
            sm: "1.5rem",
          }}
        >
          {title}
        </Typography>
        <IconButton
          onClick={handleHideDialog}
          aria-label="Cerrar diálogo"
          size="small"
          sx={{
            color: "text.primary",
            padding: 1,
            position: "absolute",
            top: { xs: 6, sm: 8 },
            right: { xs: 6, sm: 8 },
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.08)",
            },
          }}
        >
          <Close fontSize="small" />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          display: hasNavigation ? "flex" : "block",
          alignItems: "center",
          padding: { xs: 1.5, sm: 2 },
        }}
      >
        {hasNavigation && (
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={arrowSx}
          >
            <KeyboardArrowLeft />
          </Button>
        )}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {typeof children === "string" ? (
            <Typography
              variant="body1"
              sx={{
                "@media (max-width: 399.99px)": {
                  fontSize: "0.95rem",
                },
              }}
            >
              {children}
            </Typography>
          ) : (
            children
          )}
        </Box>
        {hasNavigation && (
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === steps - 1}
            sx={arrowSx}
          >
            <KeyboardArrowRight />
          </Button>
        )}
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
          padding: { xs: 1.5, sm: 2 },
        }}
      >
        <Button color="primary" variant="contained" onClick={handleHideDialog}>
          Cerrar
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
