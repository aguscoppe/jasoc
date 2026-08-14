import { useMediaQuery } from "@mui/material";

const useBreakpoints = () => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.only("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.only("md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.only("lg"));
  const isXl = useMediaQuery((theme) => theme.breakpoints.only("xl"));

  return { isXs, isSm, isMd, isLg, isXl };
};

export default useBreakpoints;
