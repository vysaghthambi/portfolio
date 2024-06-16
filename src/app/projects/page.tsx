import Banner from "@/components/Banner/Banner";
import { StyledContainer } from "@/components/common/StyledContainer/StyledContainer";
import ProjectSection from "@/components/ProjectSection/ProjectSection";

import { resumeData } from "@/utils/resume";

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section>
      <Banner title="My Projects" pageTitle="Projects" />
      <StyledContainer>
        <ProjectSection projects={projects} />
      </StyledContainer>
    </section>
  );
}
