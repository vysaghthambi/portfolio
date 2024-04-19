import Link from "next/link";

import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import EastIcon from "@mui/icons-material/East";

import WaveBorder from "../common/WaveBorder/WaveBorder";

import style from "./Banner.module.css";

type BannerProps = {
  title: string;
  pageTitle: string;
};

export default function Banner({ title, pageTitle }: BannerProps) {
  return (
    <>
      <Box className={style.Banner}>
        <Stack alignItems="center">
          <Typography color="text.primary" fontSize="4.8rem" fontWeight={600}>
            {title}
          </Typography>
          <Breadcrumbs separator={<EastIcon fontSize="large" className={style.Arrow} />}>
            <Link href="/">
              <Typography color="text.secondary" fontSize="1.4rem" fontWeight={300}>
                Home
              </Typography>
            </Link>
            <Typography color="text.secondary" fontSize="1.4rem" fontWeight={400}>
              {pageTitle}
            </Typography>
          </Breadcrumbs>
        </Stack>
      </Box>

      <WaveBorder />
    </>
  );
}
