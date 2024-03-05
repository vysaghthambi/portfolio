"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useColorScheme, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Switch from "@mui/material/Switch";

import MenuIcon from "@mui/icons-material/Menu";

import { menuList } from "@/constants/navMenuList";

import style from "./Header.module.css";

export default function Header() {
  const pathName = usePathname();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { mode, setMode } = useColorScheme();

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const isActive = (href: string) => {
    return pathName.startsWith(href);
  };

  useEffect(() => {
    if (!isDrawerOpen) return;

    setIsDrawerOpen(false);
  }, [pathName]);

  const handleModeToggle = () => {
    setMode(mode === "dark" ? "light" : mode === "light" ? "dark" : "dark");
  };

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" position="sticky" className={style.AppBar}>
        <Toolbar>
          <Typography fontSize="2rem" fontWeight="700" color="text.primary" flexGrow={1}>
            <Link href="/home">Vysagh K T</Link>
          </Typography>
          {isMobileScreen ? (
            <IconButton onClick={handleDrawerToggle} color="info" size="large">
              <MenuIcon fontSize="large" />
            </IconButton>
          ) : (
            <>
              {menuList.map((item) => (
                <Typography
                  key={item.label}
                  color={isActive(item.to) ? "text.primary" : "text.secondary"}
                  fontSize="1.3rem"
                  fontWeight={500}
                  className={style.MenuItem}
                >
                  <Link href={item.to}>{item.label}</Link>
                </Typography>
              ))}
            </>
          )}

          <Switch checked={mode === "dark"} color="info" onClick={handleModeToggle} />
        </Toolbar>
      </AppBar>

      {isMobileScreen && (
        <nav>
          <Drawer
            open={isDrawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            anchor="right"
            className={style.NavDrawer}
          >
            {menuList.map((item) => (
              <Typography
                key={item.label}
                fontSize="1.3rem"
                color={isActive(item.to) ? "text.primary" : "text.secondary"}
                p="1rem 2rem"
              >
                <Link href={item.to}>
                  {item.label}
                </Link>
              </Typography>
            ))}
          </Drawer>
        </nav>
      )}
    </>
  );
}
