import Stack from "@mui/material/Stack";

import ProjectCard from "./ProjectCard/ProjectCard";

import { Project } from "@/types/resume";

type ProjectProps = {
  projects: Project[];
};

export default function ProjectSection({ projects }: ProjectProps) {
  return (
    <Stack gap={4}>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </Stack>
  );
}
