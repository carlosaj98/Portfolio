import { Container, Stack, Typography } from "@mui/material"
import AboutContainer from "./Style"
import { AboutDev } from "../../components"
function AboutSection() {
  return (
    <AboutContainer component={"section"} id="about-section">
      <Container id="container">
        <Typography variant="h3" id="about-title">
          What I can do
        </Typography>
        <Stack gap={"64px"} justifyContent={"space-between"}>
          <AboutDev />
        </Stack>
      </Container>
    </AboutContainer>
  )
}
export default AboutSection
