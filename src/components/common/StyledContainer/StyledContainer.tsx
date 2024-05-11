"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Box)(({ theme }) => ({
  paddingLeft: "2rem",
  paddingRight: "2rem",

  [theme.breakpoints.up("sm")]: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },

  [theme.breakpoints.up("md")]: {
    paddingLeft: "6rem",
    paddingRight: "6rem",
  },

  [theme.breakpoints.up("lg")]: {
    paddingLeft: "10rem",
    paddingRight: "10rem",
  },

  [theme.breakpoints.up("xl")]: {
    paddingLeft: "14rem",
    paddingRight: "14rem",
  },
}));
