"use client";

import About from "./components/About";
import Areas from "./components/Areas";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { useEffect } from "react";

export default function Home() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const currentSectionId = useIntersectionObserver(observerOptions);

  useEffect(() => {
    if (!currentSectionId) return;

    window.history.replaceState(null, "", `#${currentSectionId}`);
  }, [currentSectionId]);

  return (
    <ThemeProvider theme={theme}>
      <main
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <Header currentSectionId={currentSectionId} />
        <About />
        <Areas />
        <Questions />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
