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
  btnText?: string;
  btnAction?: () => void;
  btnDisabled?: boolean;
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
  btnText = "Cerrar",
  btnAction,
  btnDisabled = false,
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
  };
  return (
    <MuiDialog
      open={isOpen}
      onClose={handleHideDialog}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "40px",
            padding: 1,
          },
        },
      }}
    >
      <DialogTitle
        textAlign="center"
        sx={{
          position: "relative",
          padding: 2,
          paddingRight: 6,
        }}
      >
        <Typography variant="body1" fontSize="1.5rem">
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
            top: 8,
            right: 8,
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
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {typeof children === "string" ? (
            <Typography variant="body1">{children}</Typography>
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
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={btnAction ?? handleHideDialog}
          disabled={btnDisabled}
        >
          {btnText}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
