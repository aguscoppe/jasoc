import { Button, Grid, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Image from "next/image";
import Link from "next/link";
import { sizes } from "../constants";

const marginSizes = {
  xs: 0,
  lg: 1,
};

const Header = () => {
  return (
    <>
      <NavBar />
      <Grid
        container
        component="section"
        id="header"
        display="flex"
        alignItems="center"
        justifyContent="center"
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
        <Grid
          height="100%"
          display="flex"
          flexDirection={{ xs: "column-reverse", lg: "row" }}
          alignItems="center"
          justifyContent="center"
          // size={sizes}
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
            marginRight={marginSizes}
            size={{ xs: 12, lg: 5 }}
          >
            <Typography
              component="h1"
              variant="h1"
              align="center"
              sx={{
                fontSize: {
                  xs: "3.75rem",
                  sm: "6rem",
                  lg: "5.25rem",
                  xl: "5.5rem",
                },
                "@media (max-width: 399.99px)": {
                  fontSize: "2.8rem",
                },
              }}
            >
              Bettina Ruibal
            </Typography>
            <Typography
              component="h2"
              variant="h2"
              align="center"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.75rem",
                  md: "2.75rem",
                  lg: "2.5rem",
                  xl: "3rem",
                },
                "@media (max-width: 399.99px)": {
                  fontSize: "2rem",
                },
              }}
            >
              Abogada de familia
            </Typography>
            <Typography variant="body1" align="center">
              Asesoramiento jurídico personalizado para la resolución de
              conflictos familiares y patrimoniales.
            </Typography>
            <Grid
              display="flex"
              flexDirection={{
                xs: "column",
                sm: "row",
              }}
            >
              <Button component={Link} href="#contact" variant="contained">
                Solicitar una consulta{" "}
              </Button>
              <Button component={Link} href="#areas" variant="outlined">
                Ver áreas de práctica{" "}
              </Button>
            </Grid>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginLeft={marginSizes}
            size={{
              xs: 12,
              lg: 5,
            }}
          >
            <Image
              src="/header.png"
              alt="Bettina Ruibal, abogada de familia en Buenos Aires"
              width={500}
              height={500}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
