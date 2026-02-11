import { Button, Divider, Grid, Typography } from "@mui/material";
import { QuestionItem } from "../constants";

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
          marginTop={2}
        >
          <Typography
            variant="body1"
            marginRight={2}
            sx={{
              fontWeight: 400,
            }}
          >
            {question}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleOpen(id)}
            sx={{
              textAlign: "center",
              fontWeight: 500,
              color: "#fff",
              borderRadius: "50%",
              minWidth: "auto",
              height: "100%",
              padding: open ? "0px 9px" : "0px 8px",
            }}
          >
            {open ? "-" : "+"}
          </Button>
        </Grid>
        {open && (
          <Typography variant="body2" paddingTop={1}>
            {answer}
          </Typography>
        )}
        {!isLast ? <Divider sx={{ marginTop: "24px" }} /> : null}
      </Grid>
    </Grid>
  );
};

export default Question;
