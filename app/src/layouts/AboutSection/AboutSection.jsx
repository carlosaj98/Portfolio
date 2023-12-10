import { Container, Stack, Typography } from "@mui/material"
import AboutContainer from "./Style"
import { AboutDev, About3D } from "../../components"
import useReveal from "../../hooks/useReveal"

function AboutSection() {
  const { isVisible, sectionRef } = useReveal()
  return (
    <AboutContainer component={"section"} id="about-section" ref={sectionRef}>
      <Container
        className="container"
        sx={{ opacity: isVisible ? "1" : "0" }}
      >
        <Typography
          variant="h3"
          id="about-title"
          fontSize={{ sm: "var(--font-size-XL)", xs: "var(--font-size-L)" }}
        >
          What I can do
        </Typography>
        <Stack gap={"64px"} justifyContent={"space-between"}>
          <AboutDev />
          <About3D />
        </Stack>
      </Container>
    </AboutContainer>
  )
}
export default AboutSection
