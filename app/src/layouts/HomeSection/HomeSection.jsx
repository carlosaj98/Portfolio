import { Box, Stack, Typography, Container, Link } from "@mui/material"
import HomeContainer from "./Style"
import { useState, useEffect } from "react"
import { HeroTexts, HeroImage } from "../../components"

function HomeSection() {
  const heroTitles = ["Full Stack Developer", "3D Artist"]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % heroTitles.length)
      }, 2000)
      return () => clearInterval(interval)
    }, 1000)
  }, [heroTitles.length])

  const currentTitle = heroTitles[currentTitleIndex]

  return (
    <HomeContainer component="section" id="home-section" padding={{sm:"0px", xs:"80px 0px"}}>
      <Stack
        id="container"
        flexDirection={{ md: "row", xs: "column" }}
        padding={{ md: "0px 24px", xs: "0px 16px" }}
      >
        <HeroTexts titleIndex={currentTitleIndex} currentTitle={currentTitle} />
        <HeroImage titleIndex={currentTitleIndex} />
      </Stack>
    </HomeContainer>
  )
}
export default HomeSection
