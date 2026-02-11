import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <Grid container padding={3}>
      <Grid size={{ xs: 6, lg: 7 }}>
        <Link href="/" className="navbar-item">
          JASOC
        </Link>
      </Grid>
      <Grid
        size={{ xs: 6, lg: 5 }}
        display="flex"
        justifyContent="space-between"
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className="navbar-item">
            <Typography variant="body1">{link.title}</Typography>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default NavBar;
