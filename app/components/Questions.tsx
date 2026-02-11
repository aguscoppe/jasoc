import { Grid, Typography } from "@mui/material";
import { itemsFAQ } from "../constants";
import Question from "./Question";
import { useState } from "react";

const Questions = () => {
  const [faqItems, setFaqItems] = useState(itemsFAQ);

  const handleOpen = (id: number) => {
    setFaqItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <Grid
      id="faq"
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginBottom={12}
    >
      <Typography variant="h3" padding={3}>
        Preguntas frecuentes
      </Typography>
      <Grid
        size={{ xs: 8 }}
        display="flex"
        flexDirection="column"
        paddingY={4}
        sx={{
          background: "#fff",
          borderRadius: "40px",
          maxHeight: "400px",
          overflow: "auto",
          scrollbarWidth: "thin",
        }}
      >
        {faqItems.map((item, index) => (
          <Question
            key={index}
            question={item.question}
            answer={item.answer}
            open={item.open}
            id={item.id}
            isLast={index === faqItems.length - 1}
            handleOpen={handleOpen}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Questions;
