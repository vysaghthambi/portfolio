import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type ComponentHeadingProps = Readonly<{
  heading: string;
}>;

export default function ComponentHeading({ heading }: ComponentHeadingProps) {
  return (
    <Divider textAlign="center" variant="middle">
      <Typography fontSize="2rem" fontWeight={500} color="text.primary" textTransform="uppercase">
        {heading}
      </Typography>
    </Divider>
  );
}
