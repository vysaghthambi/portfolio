import { Education, Experience, Resume } from "@/types/resume";

const experiences: Experience[] = [
  {
    organization: "Gadgeon Smart Systems",
    organizationUrl: "https://www.gadgeon.com/",
    designation: "Software Engineer",
    location: "Kochi, Kerala",
    startDate: "2021-10-06T00:00:00+05:30",
    isCurrentEmployer: true,
    jobDescription: `
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
    <br />
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
    `,
  },
];

const education: Education[] = [
  {
    institution: "Govt. Model Engineering College",
    institutionUrl: "https://www.mec.ac.in/",
    location: "Kochi, Kerala",
    degree: "B.Tech",
    stream: "Electrical and Electronics Engineering",
    startDate: "2017-10-06T00:00:00+05:30",
    endDate: "2021-10-06T00:00:00+05:30",
    cgpa: 8.2,
  },
  {
    institution: "Model Technical H.S.S",
    institutionUrl: "https://thsskaloor.ihrd.ac.in/",
    degree: "Class XII",
    location: "Kochi, Kerala",
    endDate: "2017-10-06T00:00:00+05:30",
    percentage: 87.6,
  },
  {
    institution: "St. Albert's H.S.S",
    institutionUrl: "https://stalbertshss.in/",
    degree: "Class X",
    location: "Kochi, Kerala",
    endDate: "2015-10-06T00:00:00+05:30",
    percentage: 90,
  },
];

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

export const resumeData: Resume = {
  firstName: "Vysagh",
  lastName: "K T",
  email: "vysaghkt.mec@gmail.com",
  designation: "Software Engineer",
  linkedInUrl: "https://www.linkedin.com/in/vysagh-k-t/",
  githubUrl: "https://github.com/vysaghthambi",
  about:
    "Accomplished full-stack software engineer with over 2 years of experience delivering cutting-edge web applications using React and Node.js. Skilled in Agile methodologies and adept at leading teams to deliver high-quality projects on time. Proficient in SQL and MongoDB. Passionate about expanding knowledge in AWS and leveraging the latest technologies to deliver exceptional results. Adept at creative problem-solving and working collaboratively to maintain live applications with high uptime and minimal downtime.",
  imageUrl: "/assets/images/user_image.jpg",
  resumeUrl: "/docs/resume.pdf",
  experiences,
  education,
  skills,
};
