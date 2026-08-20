import { createTheme } from "@mui/material/styles";
import { colors } from "./constants";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.coral,
    },
    secondary: {
      main: colors.aqua,
    },
    text: {
      primary: colors.text,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "playfair display, serif",
          color: "#333",
        },
        h2: {
          fontFamily: "playfair display, serif",
          color: "#333",
        },
        h3: {
          fontFamily: "playfair display, serif",
          color: "#333",
        },
        h4: {
          fontFamily: "playfair display, serif",
          color: "#333",
        },
        h5: {
          fontFamily: "playfair display, serif",
          color: "#333",
        },
        h6: {
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 300,
          color: "#333",
        },
        body1: {
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 300,
          color: "#333",
          "@media (max-width: 399.99px)": {
            fontSize: "0.9rem",
          },
        },
        body2: {
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 300,
          color: "#666",
          "@media (max-width: 399.99px)": {
            fontSize: "0.75rem",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            background: `linear-gradient(90deg, ${colors.coral} 0%, ${colors.aqua} 100%)`,
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: colors.coral,
          },
        },
      ],
      styleOverrides: {
        root: {
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 300,
          borderRadius: "20px",
          border: "none",
          outline: "none",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
            backgroundColor: colors.coral,
          },
          "@media (max-width: 399.99px)": {
            fontSize: "0.75rem",
          },
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          button: {
            padding: "0 8px",
            margin: "0 8px",
            minWidth: "auto",
            ":hover": {
              boxShadow: "none",
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  },
});

export default theme;
