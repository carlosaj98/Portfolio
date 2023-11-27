import { Box, Stack, Typography, Container } from "@mui/material"
import HomeContainer from "./Style"

function HomeSection() {
  return (
    <HomeContainer component="section" id="home-section">
      <Container id="container">
        <Stack className="text-intro-container">
          <Typography variant="h1">
            Hi!, 👋<br></br>I`m Carlos
          </Typography>
          <Typography variant="h2">Full Stack Developer </Typography>
          <Typography>
            A fusion of tech mastery and artistic flair—a Full Stack Developer
            with 3D artistry. Crafting immersive experiences, coding meets
            creativity.
          </Typography>
        </Stack>
        <Box width="450px">
          <img src="/FotoPerfil.png" />
        </Box>
      </Container>
    </HomeContainer>
  )
}
export default HomeSection
