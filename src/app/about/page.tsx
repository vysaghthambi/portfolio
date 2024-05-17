import Image from "next/image";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Banner from "@/components/Banner/Banner";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills/Skills";
import { StyledContainer } from "@/components/common/StyledContainer/StyledContainer";
import Resume from "@/components/Resume/Resume";

import { resumeData } from "@/utils/resume";

import style from "./page.module.css";

export default function About() {
  const { firstName, lastName, imageUrl, about } = resumeData;

  return (
    <section>
      <Banner title="About Me" pageTitle="About" />

      <StyledContainer>
        <Stack gap={4} className={style.AboutSection}>
          <div>
            <Image src={imageUrl} alt={firstName} height={300} width={230} />
          </div>
          <div>
            <Typography fontSize="4rem" fontWeight={600} color="text.primary">
              Hello, I&apos;m {firstName} {lastName}
            </Typography>
            <Typography fontSize="2.2rem" color="text.secondary" mt={2} mb={5}>
              {about}
            </Typography>
          </div>
        </Stack>
      </StyledContainer>

      <Experience />
      <Education />
      <Skills />
      <Resume />
    </section>
  );
}
