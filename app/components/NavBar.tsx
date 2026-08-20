import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import useBreakpoints from "../hooks/useBreakpoints";

const NavBar = () => {
  const theme = useTheme();
  const { isXs } = useBreakpoints();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

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

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

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
      <Link
        href="/#header"
        className="navbar-item"
        aria-label="Ir al inicio"
        style={{ display: "flex", color: "inherit" }}
      >
        <GavelIcon sx={{ color: "text.primary" }} />
      </Link>
      <Grid display={{ xs: "none", sm: "flex" }} justifyContent="space-between">
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <Typography variant="body1" marginX={2}>
                {link.title}
              </Typography>
            </Link>
          );
        })}
      </Grid>
      {isXs && (
        <>
          <IconButton
            aria-label="Abrir menú de navegación"
            aria-controls={menuAnchor ? "mobile-navigation-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={menuAnchor ? "true" : undefined}
            onClick={handleMenuOpen}
            sx={{ color: "text.primary" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="mobile-navigation-menu"
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {navLinks.map((link) => (
              <MenuItem key={link.id} onClick={handleMenuClose}>
                <Link href={link.url}>{link.title}</Link>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </Grid>
  );
};

export default NavBar;
