import { Button, Grid, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Image from "next/image";
import Link from "next/link";
import { sizes } from "../constants";

const Header = ({ currentSectionId }: { currentSectionId: string | null }) => {
  return (
    <Grid
      component="section"
      id="header"
      sx={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundImage: 'url("/header_bg.png")',
      }}
    >
      <NavBar currentSectionId={currentSectionId} />
      <Grid
        height="100%"
        display="flex"
        flexDirection={{ xs: "column-reverse", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        size={sizes}
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1">Bettina Ruibal</Typography>
          <Typography variant="h4" marginBottom={4}>
            Abogada de familia
          </Typography>
          <Button variant="contained">
            <Link href="#contact">contacto</Link>
          </Button>
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
