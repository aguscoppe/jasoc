import { Button, Grid, Typography, Icon } from "@mui/material";

const Area = ({
  title,
  icon,
  handleShowDialog,
}: {
  title: string;
  icon: string;
  handleShowDialog: () => void;
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
        width: "100%",
        boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Icon
        color="secondary"
        aria-label={title}
        sx={{
          fontSize: {
            xs: "3rem",
            sm: "2.8rem",
            md: "2.5rem",
          },
        }}
      >
        {icon}
      </Icon>
      <Typography
        variant="h6"
        fontWeight={400}
        sx={{
          fontSize: {
            xs: "1.3rem",
            sm: "1.2rem",
            md: "1.1rem",
            lg: "1rem",
          },
        }}
      >
        {title}
      </Typography>
      <Button variant="contained" size="small" onClick={handleShowDialog}>
        ver más
      </Button>
    </Grid>
  );
};

export default Area;
