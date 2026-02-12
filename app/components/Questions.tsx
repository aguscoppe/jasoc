import { Grid, Typography } from "@mui/material";
import { itemsFAQ, sizes } from "../constants";
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
      component="section"
      id="faq"
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingTop={12}
    >
      <Typography variant="h3" padding={3}>
        Preguntas frecuentes
      </Typography>
      <Grid
        size={sizes}
        display="flex"
        flexDirection="column"
        paddingY={4}
        sx={{
          background: "#fff",
          borderRadius: "40px",
          maxHeight: "400px",
          overflow: "auto",
          scrollbarWidth: "thin",
          boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.1)",
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
