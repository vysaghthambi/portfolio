import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { StyledContainer } from "../common/StyledContainer/StyledContainer";
import ComponentHeading from "../common/ContentHeading/ContentHeading";

import style from "./Skills.module.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NodeJS",
  "React Testing Library",
  "Jest",
  "Git",
  "Java",
  "Spring Boot",
  "DBMS",
  "Shopify",
];

export default function Skills() {
  return (
    <Box mt={5}>
      <ComponentHeading heading="Skills" />

      <StyledContainer mt={4}>
        <Stack
          direction="row"
          rowGap={2}
          columnGap={1}
          justifyContent="center"
          useFlexGap
          flexWrap="wrap"
        >
          {skills.map((skill) => (
            <Chip
              key={skill}
              variant="outlined"
              color="secondary"
              label={
                <Typography fontSize="1.6rem" fontWeight={500} color="text.secondary" p={2}>
                  {skill}
                </Typography>
              }
              className={style.SkillChip}
            />
          ))}
        </Stack>
      </StyledContainer>
    </Box>
  );
}
