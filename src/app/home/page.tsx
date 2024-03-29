import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import style from "./page.module.css";
import { StyledLinkButton } from "@/components/common/StyledLinkButton/StyledLinkButton";

export default function Home() {
  return (
    <>
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

      <Box className={style.AboutSection}>
        <Typography fontSize="4rem" fontWeight={600} color="text.primary">
          Hello, I&apos;m Vysagh K T
        </Typography>
        <Typography fontSize="2.4rem" color="text.secondary" mt={2} mb={5}>
          Accomplished full-stack software engineer with over 2 years of experience delivering
          cutting-edge web applications using React and Node.js. Skilled in Agile methodologies and
          adept at leading teams to deliver high-quality projects on time. Proficient in SQL and
          MongoDB. Passionate about expanding knowledge in AWS and leveraging the latest
          technologies to deliver exceptional results. Adept at creative problem-solving and working
          collaboratively to maintain live applications with high uptime and minimal downtime.
        </Typography>

        <StyledLinkButton title="More About Me" href="/about" className={style.AboutMoreLink} />
      </Box>
    </>
  );
}
