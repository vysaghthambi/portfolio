"use client";

import Box from "@mui/material/Box";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import ContentHeading from "../common/ContentHeading/ContentHeading";
import { StyledContainer } from "../common/StyledContainer/StyledContainer";
import { StyledButton } from "../common/StyledButton/StyledButton";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.setAttribute("type", "hidden");
    link.href = "/docs/resume.pdf";
    link.download = "Vysagh_K_T_Resume.pdf";
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
