import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import style from "./AboutIntro.module.css";

type AboutIntroProps = {
  viewMoreComponent?: React.ReactNode;
};

export default function AboutIntro({ viewMoreComponent }: AboutIntroProps) {
  return (
    <Grid container mt={5} mb={5}>
      <Grid item md={6} display="flex" justifyContent="center" alignItems="center">
        <Box className={style.ImageContainer}>Image placeholder</Box>
      </Grid>
      <Grid item md={6}>
        <Typography fontSize="1.4rem" fontWeight={400} color="info" mb={2}>
          ABOUT ME
        </Typography>
        <Typography fontSize="1.4rem" fontWeight={300} color="info.light" mb={3}>
          Accomplished full-stack software engineer with over 2 years of experience delivering
          cutting-edge web applications using React and Node.js. Skilled in Agile methodologies and
          adept at leading teams to deliver high-quality projects on time. Proficient in SQL and
          MongoDB. Passionate about expanding knowledge in AWS and leveraging the latest
          technologies to deliver exceptional results. Adept at creative problem-solving and working
          collaboratively to maintain live applications with high uptime and minimal downtime.
        </Typography>
        {viewMoreComponent}
      </Grid>
    </Grid>
  );
}
