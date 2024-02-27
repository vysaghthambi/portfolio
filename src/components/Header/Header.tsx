"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";

import { menuList } from "@/constants/navMenuList";

import style from "./Header.module.css";

export default function Header() {
  const pathName = usePathname();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const isActive = (href: string) => {
    return pathName.startsWith(href);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" position="static" color="primary" className={style.AppBar}>
        <Toolbar>
          <Typography fontSize="1.5rem" fontWeight="700" color="info" flexGrow={1}>
            @VysaghThambi
          </Typography>
          {isMobileScreen ? (
            <IconButton onClick={handleDrawerToggle} color="info">
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {menuList.map((item) => (
                <Link href={item.to} key={item.label}>
                  <Typography
                    color={isActive(item.to) ? "primary" : "info"}
                    fontSize="0.8rem"
                    fontWeight={500}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </>
          )}
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
              <Link key={item.label} href={item.to}>
                <Typography color={isActive(item.to) ? "primary" : "secondary"} p="0.5rem 2rem">
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Drawer>
        </nav>
      )}
    </Box>
  );
}
