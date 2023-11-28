import { Box, Stack, Typography, Container, Link } from "@mui/material"
import HomeContainer from "./Style"
import { useState, useEffect } from "react"
import { HeroTexts, HeroImage } from "../../components"
import { IconLinkedin } from "../../common/Icons/Icons"

function HomeSection() {
  const heroTitles = ["Full Stack Developer", "3D Artist"]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  // useEffect(() => {
  //   setTimeout(() => {
  //     const interval = setInterval(() => {
  //       setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % heroTitles.length)
  //     }, 2000)
  //     return () => clearInterval(interval)
  //   }, 1000)
  // }, [heroTitles.length])

  const currentTitle = heroTitles[currentTitleIndex]

  return (
    <HomeContainer component="section" id="home-section">
      <Container id="container">
        <HeroTexts titleIndex={currentTitleIndex} currentTitle={currentTitle} />
        <HeroImage titleIndex={currentTitleIndex} />
      </Container>
    </HomeContainer>
  )
}
export default HomeSection
