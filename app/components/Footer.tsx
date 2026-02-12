import { Grid, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { navLinks } from "../constants";
import Link from "next/link";

const Footer = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      component="footer"
      marginTop={16}
      sx={{ backgroundColor: "white" }}
    >
      <Link href="#header">
        <IconButton
          sx={{
            marginTop: "-30px",
            backgroundColor: "#A3E0E2",
            color: "#fff",
            ":hover": {
              backgroundColor: "#A3E0E2",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Link>
      <Grid display="flex" alignItems="center" justifyContent="center">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <Typography
              variant="body1"
              fontSize="small"
              key={link.id}
              paddingY={1}
              paddingX={2}
            >
              {link.title}
            </Typography>
          </Link>
        ))}
      </Grid>
      <Typography
        variant="body2"
        fontSize="small"
        paddingTop={1}
        paddingBottom={2}
      >
        Copyright 2026 © Agustina Coppe
      </Typography>
    </Grid>
  );
};

export default Footer;
