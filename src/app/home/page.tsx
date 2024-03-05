import AboutIntro from "@/components/AboutIntro/AboutIntro";
import LinkButton from "@/components/common/LinkButton/LinkButton";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <Grid container className={style.HeroSection}>
        <Grid item md={6} display="flex" justifyContent="center" alignItems="center">
          <Stack>
            <Typography fontSize="1.4rem" fontWeight={400} letterSpacing=".2rem" color="info">
              THIS IS ME
            </Typography>
            <Typography fontSize="6rem" fontWeight={600}>
              VYSAGH K T
            </Typography>
            <Typography fontSize="2rem" fontWeight={400} letterSpacing=".2rem">
              Software Engineer
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>

      <Container maxWidth="lg">
        <AboutIntro viewMoreComponent={<LinkButton href="/about" />} />
      </Container>
    </>
  );
}
