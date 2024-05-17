import React from "react";
import dayjs from "dayjs";
import htmlParser from "html-react-parser";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { resumeData } from "@/utils/resume";

import { StyledContainer } from "../common/StyledContainer/StyledContainer";
import ComponentHeading from "../common/ContentHeading/ContentHeading";

export default function Experience() {
  const { experiences } = resumeData;

  return (
    <Box>
      <ComponentHeading heading="Experience" />

      <StyledContainer mt={2}>
        {experiences.map((experience) => (
          <React.Fragment key={experience.organization}>
            <Typography
              fontSize="2rem"
              fontWeight={500}
              color="text.secondary"
              display="flex"
              flexDirection="row"
            >
              {experience.designation},
              <Link
                href={experience.organizationUrl}
                color="info.main"
                underline="hover"
                target="_blank"
                rel="noopener"
                ml={1}
              >
                {experience.organization}
              </Link>
            </Typography>

            <Typography fontSize="1.8rem" color="normalGrey.light">
              {dayjs(experience.startDate).format("MMM YYYY")}
              {experience.isCurrentEmployer
                ? " - Present"
                : experience.endDate
                  ? ` - ${dayjs(experience.endDate).format("MMM YYYY")}`
                  : ""}{" "}
              | {experience.location}
            </Typography>

            <Box mt={2} pl={5} pr={5}>
              <Typography component="div" fontSize="1.6rem" color="normalGrey.light">
                {htmlParser(experience.jobDescription)}
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </StyledContainer>
    </Box>
  );
}
