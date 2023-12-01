import { Container, Stack, Typography } from "@mui/material"
import AboutContainer from "./Style"
import { AboutDev, About3D } from "../../components"
function AboutSection() {
  return (
    <AboutContainer component={"section"} id="about-section">
      <Container id="container" >
        <Typography variant="h3" id="about-title" fontSize={{sm:"var(--font-size-XL)", xs:"var(--font-size-L)"}}>
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
