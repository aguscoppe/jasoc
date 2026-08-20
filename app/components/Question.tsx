import { Button, Divider, Grid, Typography } from "@mui/material";
import { QuestionItem } from "../constants";

const buttonDimensions = {
  xs: 24,
  sm: 28,
};

const Question = ({
  question,
  answer,
  open,
  id,
  isLast,
  handleOpen,
}: QuestionItem & { isLast: boolean; handleOpen: (index: number) => void }) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        borderRadius: "40px",
        maxHeight: "400px",
      }}
    >
      <Grid size={{ xs: 10 }}>
        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          // marginTop={2}
          marginTop={{
            xs: 1.5,
            sm: 2,
          }}
        >
          <Typography
            variant="body1"
            marginRight={2}
            sx={{
              fontWeight: 400,
              fontSize: {
                xs: "0.92rem",
                sm: "1rem",
              },
              "@media (max-width: 399.99px)": {
                fontSize: "0.85rem",
              },
            }}
          >
            {question}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleOpen(id)}
            aria-label={
              open
                ? `Cerrar respuesta: ${question}`
                : `Abrir respuesta: ${question}`
            }
            aria-expanded={open}
            sx={{
              textAlign: "center",
              fontWeight: 500,
              color: "#fff",
              borderRadius: "50%",
              width: buttonDimensions,
              minWidth: buttonDimensions,
              height: buttonDimensions,
              minHeight: buttonDimensions,
              padding: 0,
              flexShrink: 0,
              lineHeight: 1,
              "@media (max-width: 399.99px)": {
                width: 18,
                minWidth: 18,
                height: 18,
                minHeight: 18,
                fontSize: "0.85rem",
              },
            }}
          >
            {open ? "-" : "+"}
          </Button>
        </Grid>
        {open && (
          <Typography
            variant="body1"
            paddingTop={1}
            sx={{
              fontSize: {
                xs: "0.90rem",
                sm: "0.95rem",
              },
              "@media (max-width: 399.99px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            {answer}
          </Typography>
        )}
        {!isLast ? (
          <Divider
            sx={{
              marginTop: {
                xs: "18px",
                sm: "24px",
              },
            }}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Question;
