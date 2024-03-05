import type { Metadata } from "next";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import Header from "@/components/Header/Header";
import theme from "@/utils/theme";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssVarsProvider theme={theme} defaultMode="dark">
          <Header />
          <main>{children}</main>
        </CssVarsProvider>
      </body>
    </html>
  );
}
