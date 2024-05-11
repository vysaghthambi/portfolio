"use client";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 500,
  color: theme.palette.text.primary,
  padding: "1.4rem 2.8rem",
  textTransform: "uppercase",
  border: `2px solid ${theme.palette.text.secondary}`,
  borderRadius: 15,
  backgroundColor: "transparent",
  transition: "backgroundColor 500ms",

  width: "fit-content",

  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.text.primary,
    borderColor: theme.palette.text.primary,
  },
}));
