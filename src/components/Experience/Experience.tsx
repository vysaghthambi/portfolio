import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { StyledContainer } from "../common/StyledContainer/StyledContainer";
import ComponentHeading from "../common/ContentHeading/ContentHeading";

export default function Experience() {
  return (
    <Box>
      <ComponentHeading heading="Experience" />

      <StyledContainer mt={2}>
        <Typography
          fontSize="2rem"
          fontWeight={500}
          color="text.secondary"
          display="flex"
          flexDirection="row"
        >
          Software Engineer,
          <Link href="https://www.gadgeon.com/" color="info.main" underline="hover">
            Gadgeon Smart Systems
          </Link>
        </Typography>

        <Typography fontSize="1.8rem" color="normalGrey.light">
          OCT 2021 - Present | Kochi, Kerala
        </Typography>

        <Box mt={2} pl={5} pr={5}>
          <Typography component="div" fontSize="1.6rem" color="normalGrey.light">
            <ul>
              <li>
                Implemented and integrated new features by writing code and ensuring their
                successful operation.
              </li>
              <li>
                Conducted rigorous testing of software to detect and rectify potential issues,
                guaranteeing proper functionality.
              </li>
              <li>
                Investigated user-reported issues to promptly identify and address any problems that
                emerged.
              </li>
              <li>
                Mentored junior colleagues by offering guidance and support to help them excel in
                coding and debugging tasks.
              </li>
              <li>
                Successfully collaborated with onshore clients in an Ecommerce project, ensuring
                effective communication and meeting project deadlines
              </li>
            </ul>

            <b>Key Contributions: </b>

            <ul>
              <li>
                Developed expertise in HTML, CSS, JavaScript, TypeScript, ReactJS, NodeJS, and Git.
              </li>
              <li>
                Leveraged ReactJS to create and style components, ensuring proper alignment with the
                provided UX
              </li>
              <li>
                Expertise in working with MUI Styled Components to style React components, ensuring
                a consistent and visually appealing user interface.
              </li>
              <li>
                Utilized React hooks to enhance functionality and developed custom hooks for
                authentication and other purposes.
              </li>
              <li>Proficient in integrating forms into the UI using React Hook Forms.</li>
              <li>
                Conducted proper unit testing to ensure the quality and reliability of the software.
              </li>
              <li>
                Ensured code coverage through consistent unit testing with Jest and React Testing
                Library, regularly updating test cases.
              </li>
              <li>
                Utilized NodeJS to develop various endpoints and aligned them with the UI and
                database.
              </li>
              <li>
                Provided production support for both UI and API components of developed
                applications.
              </li>
              <li>
                Developed API endpoints using Java Spring Boot and demonstrated expertise in core
                Java concepts.
              </li>
              <li>Integrated Firebase authentication into Java Spring Boot microservices.</li>
              <li>
                Successfully implemented Shopify integration for the Ecommerce project, seamlessly
                connecting the platform to enhance functionality and provide a streamlined shopping
                experience for users.
              </li>
              <li>
                Leveraged the Serverless Framework for streamlined deployment and management of
                cloud functions.
              </li>
              <li>
                Developed and deployed serverless functions using AWS Lambda to enhance scalability
                and reduce infrastructure costs, ensuring efficient backend operations.
              </li>
            </ul>
          </Typography>
        </Box>
      </StyledContainer>
    </Box>
  );
}
