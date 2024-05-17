import dayjs from "dayjs";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

import { resumeData } from "@/utils/resume";

import ComponentHeading from "../common/ContentHeading/ContentHeading";
import { StyledContainer } from "../common/StyledContainer/StyledContainer";

export default function Education() {
  const { education } = resumeData;

  return (
    <Box mt={5}>
      <ComponentHeading heading="Education" />

      <StyledContainer mt={4}>
        <Timeline position="alternate">
          {education.map((item) => (
            <TimelineItem key={item.institution}>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box>
                  <Typography fontSize="2rem" fontWeight={500} color="text.secondary">
                    {item.degree}
                    {item.stream && ` - ${item.stream}`}
                  </Typography>
                  <Link
                    href={item.institutionUrl}
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                    fontSize="2rem"
                    fontWeight={500}
                    color="info.main"
                  >
                    {item.institution}
                  </Link>
                  <Typography fontSize="1.6rem" color="text.secondary">
                    {item.startDate && `${dayjs(item.startDate).format("YYYY")} - `}{" "}
                    {item.endDate ? dayjs(item.endDate).format("YYYY") : "Present"} |{" "}
                    {item.location}
                  </Typography>
                  <Typography fontSize="1.4rem" color="text.secondary">
                    {item.cgpa
                      ? `CGPA: ${item.cgpa}`
                      : item.percentage
                        ? `Percentage: ${item.percentage}%`
                        : ""}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </StyledContainer>
    </Box>
  );
}
