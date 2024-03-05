import AboutIntro from "@/components/AboutIntro/AboutIntro";
import Banner from "@/components/Banner/Banner";

import Container from "@mui/material/Container";

export default function About() {
  return (
    <section>
      <Banner title="About Me" pageTitle="About" />
      <Container maxWidth="lg">
        <AboutIntro />
      </Container>
    </section>
  );
}
