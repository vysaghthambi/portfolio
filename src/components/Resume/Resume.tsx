"use client";

import Box from "@mui/material/Box";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import ContentHeading from "../common/ContentHeading/ContentHeading";
import { StyledContainer } from "../common/StyledContainer/StyledContainer";
import { StyledButton } from "../common/StyledButton/StyledButton";

import { resumeData } from "@/utils/resume";

export default function Resume() {
  const { resumeUrl, firstName } = resumeData;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.setAttribute("type", "hidden");
    link.href = resumeUrl;
    link.download = `${firstName}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Box mt={5}>
      <ContentHeading heading="Resume" />
      <StyledContainer mt={4} display="flex" justifyContent="center">
        <StyledButton startIcon={<FileDownloadOutlinedIcon />} onClick={handleDownload}>
          Download Resume
        </StyledButton>
      </StyledContainer>
    </Box>
  );
}
