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
      size={{ xs: 3 }}
      padding={2}
      marginX={4}
      marginY={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      sx={{
        background: "#fff",
        borderRadius: "40px",
        height: "200px",
        width: "200px",
      }}
    >
      <Icon color="primary" fontSize="large">
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
