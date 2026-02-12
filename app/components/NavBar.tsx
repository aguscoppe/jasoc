import { Grid, Typography, useTheme } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import Link from "next/link";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const NavBar = ({ currentSectionId }: { currentSectionId: string | null }) => {
  const theme = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid
      container
      paddingX={4}
      paddingY={2}
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        backgroundColor:
          scrollPosition > 180 ? theme.palette.primary.main : "transparent",
        zIndex: 1000,
        transition: "background-color 0.25s linear",
      }}
    >
      <Link href="/" className="navbar-item">
        <GavelIcon color="action" />
      </Link>
      <Grid display="flex" justifyContent="space-between">
        {navLinks.map((link) => {
          const currentUrl = link.url.replace("/#", "");
          return (
            <Link key={link.id} href={link.url}>
              <Typography
                variant="body1"
                marginX={2}
                sx={{
                  borderBottom:
                    currentUrl === currentSectionId
                      ? "1px solid black"
                      : "none",
                }}
              >
                {link.title}
              </Typography>
            </Link>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default NavBar;
