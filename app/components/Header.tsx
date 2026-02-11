import { Button, Grid, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Image from "next/image";

const Header = () => {
  return (
    <Grid
      id="header"
      sx={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundImage: 'url("/header_bg.png")',
      }}
    >
      <NavBar />
      <Grid
        container
        height="100%"
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1">Bettina Ruibal</Typography>
          <Typography variant="h4">Abogada de familia</Typography>
          <Button variant="contained">contacto</Button>
        </Grid>
        <Grid>
          <Image
            src="/header.png"
            alt="Bettina Ruibal"
            width={500}
            height={500}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
