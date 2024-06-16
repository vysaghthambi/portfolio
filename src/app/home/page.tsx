import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { StyledLinkButton } from "@/components/common/StyledLinkButton/StyledLinkButton";
import WaveBorder from "@/components/common/WaveBorder/WaveBorder";
import { StyledContainer } from "@/components/common/StyledContainer/StyledContainer";
import ProjectSection from "@/components/ProjectSection/ProjectSection";

import { resumeData } from "@/utils/resume";

import style from "./page.module.css";

export default function Home() {
  const { firstName, lastName, designation, about, projects } = resumeData;

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Box className={style.HeroSection}>
        <div className={style.TextContainer}>
          <Typography fontSize="2rem" fontWeight={400} letterSpacing=".2rem" color="text.primary">
            THIS IS ME
          </Typography>
          <Typography fontSize="4.8rem" fontWeight={800} color="text.secondary">
            {firstName} {lastName}
          </Typography>
          <Typography fontSize="4.8rem" fontWeight={800} color="text.secondary">
            {designation}
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

      <StyledContainer className={[style.Section, style.About].join(" ")}>
        <Typography fontSize="4rem" fontWeight={600} color="text.primary">
          Hello, I&apos;m {firstName} {lastName}
        </Typography>
        <Typography fontSize="2.4rem" color="text.secondary" mt={2} mb={5}>
          {about}
        </Typography>

        <StyledLinkButton title="More About Me" href="/about" className={style.DetailsLink} />
      </StyledContainer>
      <WaveBorder primary />
      <StyledContainer className={[style.Section, style.Project].join(" ")}>
        <Typography fontSize="4rem" fontWeight={600} color="text.primary">
          Featured Projects
        </Typography>
        <Box mt={3} mb={5}>
          <ProjectSection projects={featuredProjects} />
        </Box>

        <StyledLinkButton
          title="View All Projects"
          href="/projects"
          className={style.DetailsLink}
        />
      </StyledContainer>
      <WaveBorder />
    </>
  );
}
