import Link from "next/link";
import Image from "next/image";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Project } from "@/types/resume";

import style from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Stack className={style.ProjectCardContainer}>
      <Stack>
        <Image src={project.images[0]} alt={project.name} width={400} height={200} />
      </Stack>
      <Stack pl={4}>
        <Stack direction="row" alignItems="center" gap={3}>
          <Link href={project.url} target="_blank" rel="noopener">
            <Typography fontSize="2rem" fontWeight={700} color="text.secondary">
              {project.name}
              <OpenInNewIcon sx={{ ml: 1 }} />
            </Typography>
          </Link>
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener">
              <GitHubIcon fontSize="large" />
            </Link>
          )}
        </Stack>
        <Typography fontSize="1.8rem" color="text.primary" mt={2}>
          {project.description}
        </Typography>
        <Stack direction="row" rowGap={2} columnGap={1} mt={2} useFlexGap flexWrap="wrap">
          {project.stack.map((item) => (
            <Chip
              key={item}
              variant="outlined"
              color="secondary"
              label={
                <Typography fontSize="1.6rem" fontWeight={500} color="text.secondary" p={2}>
                  {item}
                </Typography>
              }
              className={style.StackChip}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
