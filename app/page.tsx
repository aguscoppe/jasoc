"use client";

import About from "./components/About";
import Areas from "./components/Areas";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB8A4",
    },
    secondary: {
      main: "#A3E0E2",
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
          fontFamily: "var(--font-roboto-condensed)",
          fontWeight: 300,
          color: "#333",
        },
        body1: {
          fontFamily: "var(--font-roboto-condensed)",
          fontWeight: 300,
          color: "#333",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "var(--font-roboto-condensed)",
          fontWeight: 300,
          backgroundColor: "linear-gradient(90deg, #FFB8A4 0%, #FF7E5F 100%)",
          borderRadius: "20px",
          border: "none",
          outline: "none",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
            backgroundColor: "#FFB8A4",
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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <Header />
        <About />
        <Areas />
      </main>
    </ThemeProvider>
  );
}
