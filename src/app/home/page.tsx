import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import style from "./page.module.css";

export default function Home() {
  return (
    <Box className={style.HeroSection}>
      <div className={style.TextContainer}>
        <Typography fontSize="2rem" fontWeight={400} letterSpacing=".2rem" color="text.primary">
          THIS IS ME
        </Typography>
        <Typography fontSize="4.8rem" fontWeight={800} color="text.secondary">
          VYSAGH K T
        </Typography>
        <Typography fontSize="4.8rem" fontWeight={800} color="text.secondary">
          SOFTWARE ENGINEER
        </Typography>
        <div>
          <ArrowDownwardIcon fontSize="large" />
          <Typography fontSize="1.6rem" color="text.secondary" ml={1}>
            Scroll
          </Typography>
        </div>
      </div>
      <Box className={style.HeroSectionFooter} />
    </Box>
  );
}
