import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { resumeData } from "@/utils/resume";

import style from "./Footer.module.css";

export default function Footer() {
  const { githubUrl, linkedInUrl, email } = resumeData;

  return (
    <Box className={style.Footer}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" columnGap={1}>
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener" color="inherit">
              <GitHubIcon fontSize="large" />
            </Link>
          )}
          {linkedInUrl && (
            <Link href={linkedInUrl} target="_blank" rel="noopener" color="inherit">
              <LinkedInIcon fontSize="large" />
            </Link>
          )}
        </Stack>
        <Stack>
          <Typography fontSize="1.2rem">{email}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
