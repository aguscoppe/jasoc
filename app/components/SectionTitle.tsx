import { Typography, TypographyProps } from "@mui/material";
import useBreakpoints from "../hooks/useBreakpoints";
import { useMemo } from "react";

type SectionTitleProps = Omit<TypographyProps<"h2">, "component" | "variant">;

const SectionTitle = ({ children, ...props }: SectionTitleProps) => {
  const { isXs, isSm } = useBreakpoints();
  const variant = useMemo(() => {
    if (isSm || isXs) return "h4";
    else return "h3";
  }, [isXs, isSm]);

  return (
    <Typography
      {...props}
      component="h2"
      variant={variant}
      align="center"
      sx={{
        "@media (max-width: 399.99px)": {
          fontSize: "1.8rem",
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
