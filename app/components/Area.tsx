import { Button, Grid, Typography, Icon } from "@mui/material";

const Area = ({
  title,
  summary,
  icon,
  handleShowDialog,
}: {
  title: string;
  summary: string;
  icon: string;
  handleShowDialog: () => void;
}) => {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      padding={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      sx={{
        background: "#fff",
        borderRadius: "40px",
        boxSizing: "border-box",
        height: {
          xs: "235px",
          sm: "220px",
        },
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
            sm: "2.5rem",
            md: "2rem",
          },
          "@media (max-width: 399.99px)": {
            fontSize: "2.8rem",
          },
        }}
      >
        {icon}
      </Icon>
      <Typography
        component="h3"
        variant="h3"
        fontWeight={400}
        sx={{
          minHeight: "2.6em",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
          fontSize: {
            xs: "1.4rem",
            sm: "1.3rem",
            md: "1.25rem",
          },
          "@media (max-width: 399.99px)": {
            fontSize: "1.15rem",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          minHeight: "4.5em",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
          overflow: "hidden",
        }}
      >
        {summary}
      </Typography>
      <Button
        variant="contained"
        size="small"
        onClick={handleShowDialog}
        sx={{ marginTop: "auto" }}
      >
        Conocer más
      </Button>
    </Grid>
  );
};

export default Area;
