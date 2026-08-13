import { Button, Grid, Typography, Icon } from "@mui/material";

const Area = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: string;
}) => {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      padding={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      sx={{
        background: "#fff",
        borderRadius: "40px",
        height: "180px",
        // width: { xs: "100%", sm: "145px", md: "185px" },

        width: "100%",
        boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Icon color="secondary" fontSize="large" aria-label={title}>
        {icon}
      </Icon>
      <Typography variant="h6" fontWeight={400}>
        {title}
      </Typography>
      <Button variant="contained" size="small">
        ver más
      </Button>
    </Grid>
  );
};

export default Area;
