"use client";

import { Montserrat } from "next/font/google";

import {
  BreakpointsOptions,
  PaletteOptions,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

const montserrat = Montserrat({ subsets: ["latin"] });

declare module "@mui/material/styles" {
  interface Palette {
    normalGrey: Palette["primary"];
  }
  interface PaletteOptions {
    normalGrey?: PaletteOptions["primary"];
  }
}

const darkPalette: PaletteOptions = {
  primary: { main: "#0d1926" },
  secondary: { main: "#1a324c" },
  info: { main: "#4383cb" },

  text: { primary: "#8cb0d9", secondary: "#f7fafc" },
  normalGrey: { main: "#303f50", light: "#cfd8e2" },
};

const lightPalette: PaletteOptions = {
  primary: { main: "#fafafa" },
  secondary: { main: "#efefef" },
  info: { main: "#8a8a8a" },

  text: { primary: "#000", secondary: "#3d3d3d" },
  normalGrey: { main: "#c2bfbc", light: "#595959" },
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
      palette: lightPalette,
    },
    dark: {
      palette: darkPalette,
    },
  },
  typography: {
    ...montserrat.style,
  },
  breakpoints,
});

export default theme;
