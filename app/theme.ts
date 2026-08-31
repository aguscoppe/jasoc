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
            /*
            background: "rgba(137, 211, 208, 0.18)",
            border: "1px solid rgba(137, 211, 208, 0.45)",
            color: "#2C2C2C",
           
            background: "rgba(255, 184, 164, 0.18)",
            border: "1px solid rgba(255, 184, 164, 0.45)",
            color: "#2C2C2C", 
            */

            background: "rgba(255, 184, 164, 0.22)",
            border: "1px solid rgba(255, 184, 164, 0.40)",
            color: "#2C2C2C",
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
