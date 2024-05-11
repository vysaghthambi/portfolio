import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

import ComponentHeading from "../common/ContentHeading/ContentHeading";
import { StyledContainer } from "../common/StyledContainer/StyledContainer";

export default function Education() {
  return (
    <Box mt={5}>
      <ComponentHeading heading="Education" />

      <StyledContainer mt={4}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography fontSize="2rem" fontWeight={500} color="text.secondary">
                  B.Tech - Electrical and Electronics
                </Typography>
                <Link
                  href="https://www.mec.ac.in/"
                  underline="hover"
                  fontSize="2rem"
                  fontWeight={500}
                  color="info.main"
                >
                  Model Engineering College
                </Link>
                <Typography fontSize="1.6rem" color="text.secondary">
                  2017 - 2021 | Kochi, Kerala
                </Typography>
                <Typography fontSize="1.4rem" color="text.secondary">
                  CGPA: 8.2
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography fontSize="2rem" fontWeight={500} color="text.secondary">
                  Class XII
                </Typography>
                <Link
                  href="https://thsskaloor.ihrd.ac.in/"
                  underline="hover"
                  fontSize="2rem"
                  fontWeight={500}
                  color="info.main"
                >
                  Model Technical H.S.S
                </Link>
                <Typography fontSize="1.6rem" color="text.secondary">
                  2017 | Kochi, Kerala
                </Typography>
                <Typography fontSize="1.4rem" color="text.secondary">
                  Aggregate: 87.6%
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography fontSize="2rem" fontWeight={500} color="text.secondary">
                  Class X
                </Typography>
                <Link
                  href="https://stalbertshss.in/"
                  underline="hover"
                  fontSize="2rem"
                  fontWeight={500}
                  color="info.main"
                >
                  St. Albert's H.S.S
                </Link>
                <Typography fontSize="1.6rem" color="text.secondary">
                  2015 | Kochi, Kerala
                </Typography>
                <Typography fontSize="1.4rem" color="text.secondary">
                  Aggregate: 90%
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </StyledContainer>
    </Box>
  );
}
