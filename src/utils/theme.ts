"use client";

import { Montserrat } from "next/font/google";

import {
  BreakpointsOptions,
  PaletteOptions,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

const montserrat = Montserrat({ subsets: ["latin"] });

const palette: PaletteOptions = {
  primary: { main: "#8490ff", light: "#62bdfc" },
  secondary: { main: "#f9f9ff" },
  info: { main: "#222222" },
};

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 576,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette,
    },
  },
  typography: {
    ...montserrat.style,
  },
  breakpoints,
});

export default theme;
