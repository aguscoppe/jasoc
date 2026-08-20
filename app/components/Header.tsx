import { Button, Grid, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Image from "next/image";
import Link from "next/link";
import { sizes } from "../constants";
import useBreakpoints from "../hooks/useBreakpoints";

const Header = () => {
  const { isXs } = useBreakpoints();
  const mainTitleVariant = isXs ? "h2" : "h1";
  return (
    <Grid
      component="section"
      id="header"
      sx={{
        height: {
          xs: "80vh",
          sm: "100vh",
        },
        "@media (max-width: 399.99px)": {
          height: "65vh",
        },
        backgroundSize: "cover",
        backgroundImage: 'url("/header_bg.png")',
      }}
    >
      <NavBar />
      <Grid
        height="100%"
        display="flex"
        flexDirection={{ xs: "column-reverse", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        size={sizes}
        sx={{
          paddingTop: {
            xs: "10vh",
            sm: 0,
          },
          "@media (max-width: 399.99px)": {
            paddingTop: "20vh",
          },
        }}
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant={mainTitleVariant}
            align="center"
            sx={{
              "@media (max-width: 399.99px)": {
                fontSize: "2.8rem",
              },
            }}
          >
            Bettina Ruibal
          </Typography>
          <Typography
            variant="h4"
            align="center"
            marginBottom={4}
            sx={{
              "@media (max-width: 399.99px)": {
                fontSize: "1.6rem",
              },
            }}
          >
            Abogada de familia
          </Typography>
          <Button component={Link} href="#contact" variant="contained">
            contacto
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
