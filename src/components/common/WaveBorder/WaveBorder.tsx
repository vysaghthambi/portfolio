"use client";

import { useTheme } from "@mui/material/styles";

type WaveBorderProps = {
  primary?: boolean;
};

export default function WaveBorder({ primary }: Readonly<WaveBorderProps>) {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 250"
      style={{
        backgroundColor: primary ? theme.palette.primary.main : theme.palette.secondary.main,
      }}
    >
      <path
        fill={primary ? theme.palette.secondary.main : theme.palette.primary.main}
        fillOpacity="1"
        d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,112C840,117,960,171,1080,160C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  );
}
