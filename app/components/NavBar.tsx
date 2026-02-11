import { Grid, Icon, Typography } from "@mui/material";
import Link from "next/link";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const NavBar = () => {
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
        backgroundColor: scrollPosition > 180 ? "#FFB8A4" : "transparent",
        zIndex: 1000,
        transition: "background-color 0.25s linear",
      }}
    >
      <Link href="/" className="navbar-item">
        <Icon color="inherit" fontSize="large">
          account_balance
        </Icon>
      </Link>
      <Grid display="flex" justifyContent="space-between">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className="navbar-item">
            <Typography variant="body1" marginX={2}>
              {link.title}
            </Typography>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default NavBar;
