"use client";

import Link, { LinkProps } from "next/link";

import { styled } from "@mui/material/styles";

type StyledLinkButtonProps = {
  title: string | React.ReactNode;
  className?: string;
} & LinkProps;

export const StyledLinkButton = styled(
  ({ title, className, ...props }: StyledLinkButtonProps) => (
    <Link className={className} {...props}>
      {title}
    </Link>
  ),
  { name: "StyledLinkButton" },
)(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.palette.text.primary,
  padding: "1.4rem 2.8rem",
  textTransform: "uppercase",
  border: `2px solid ${theme.palette.secondary.main}`,
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
