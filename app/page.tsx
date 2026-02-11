"use client";

import About from "./components/About";
import Areas from "./components/Areas";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Questions from "./components/Questions";

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
        <Questions />
      </main>
    </ThemeProvider>
  );
}
