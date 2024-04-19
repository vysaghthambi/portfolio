import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import style from "./Footer.module.css";

export default function Footer() {
  return (
    <Box className={style.Footer}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" columnGap={1}>
          <Link
            href="https://github.com/vysaghthambi"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHubIcon fontSize="large" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vysagh-k-t/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        </Stack>
        <Stack>
          <Typography fontSize="1.2rem">vysaghkt.mec@gmail.com</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
