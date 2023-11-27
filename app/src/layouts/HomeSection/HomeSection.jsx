import { Box, Stack, Typography, Container } from "@mui/material"
import HomeContainer from "./Style"
import { useState, useEffect } from "react"

function HomeSection() {
  const heroTitles = ["Full Stack Developer", "3D Artist"]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % heroTitles.length)
      }, 2000)
      return () => clearInterval(interval)
    }, 2000)
  }, [heroTitles.length])

  const currentTitle = heroTitles[currentTitleIndex]

  return (
    <HomeContainer component="section" id="home-section" >
      <Container id="container" >
        <Stack className="text-intro-container animate__fadeInLeft" >
          <Typography variant="h1">
            Hi!, 👋<br></br>I`m Carlos
          </Typography>
          {currentTitleIndex === 0 && (
            <Typography
              variant="h2"
              className="animate__fadeInLeft"
              color="var(--primary-color-light)"
              sx={{
                textShadow: "0 0 12px var(--primary-color-light)",
              }}
            >
              {currentTitle}
            </Typography>
          )}

          {currentTitleIndex === 1 && (
            <Typography
              variant="h2"
              className="animate__fadeInLeft"
              color="var(--secondary-color)"
              sx={{
                textShadow: "0 0 12px var(--secondary-color)",
              }}
            >
              {currentTitle}
            </Typography>
          )}

          <Typography id="hero-text-desc">
            Full Stack Developer and 3D Artist blending technology and
            creativity. Bridging technical functionality with artistic vision
            for innovative solutions.
            <br /> Let's connect to elevate your projects together!
          </Typography>
        </Stack>
        <Box
        className="animate__fadeInRight"
          width="450px"
          id="hero-img-container"
          sx={{
            boxShadow:
              currentTitleIndex === 0
                ? "0 0 30px 0px var(--primary-color-light), 0 0 30px 0px var(--primary-color-light) inset"
                : "0 0 30px 0px var(--secondary-color), 0 0 30px 0px var(--secondary-color) inset",
            borderRadius: "50%",
            border:
              currentTitleIndex === 0
                ? "3px solid var(--primary-color-light)"
                : "3px solid var(--secondary-color)",
            overflow: "hidden",
          }}
        >
          <img src="/profile-image.png" />
        </Box>
      </Container>
    </HomeContainer>
  )
}
export default HomeSection
