import Image from "next/image";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Banner from "@/components/Banner/Banner";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills/Skills";
import { StyledContainer } from "@/components/common/StyledContainer/StyledContainer";

import userImage from "@/assets/images/user_image.jpg";

import style from "./page.module.css";

export default function About() {
  return (
    <section>
      <Banner title="About Me" pageTitle="About" />

      <StyledContainer>
        <Stack gap={4} className={style.AboutSection}>
          <div>
            <Image src={userImage} alt="Vysagh" height={300} />
          </div>
          <div>
            <Typography fontSize="4rem" fontWeight={600} color="text.primary">
              Hello, I&apos;m Vysagh K T
            </Typography>
            <Typography fontSize="2.2rem" color="text.secondary" mt={2} mb={5}>
              Accomplished full-stack software engineer with over 2 years of experience delivering
              cutting-edge web applications using React and Node.js. Skilled in Agile methodologies
              and adept at leading teams to deliver high-quality projects on time. Proficient in SQL
              and MongoDB. Passionate about expanding knowledge in AWS and leveraging the latest
              technologies to deliver exceptional results. Adept at creative problem-solving and
              working collaboratively to maintain live applications with high uptime and minimal
              downtime.
            </Typography>
          </div>
        </Stack>
      </StyledContainer>

      <Experience />
      <Education />
      <Skills />
    </section>
  );
}
