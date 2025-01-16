import { Container } from "@mui/material"
import HomeContainer from "./Style"
import { useState, useEffect } from "react"
import { HeroTexts, HeroImage } from "../../components"
import { useTranslation } from "react-i18next"

function HomeSection() {
  const { t } = useTranslation()
  const heroTitles = [t("home_section.dev_rol"), t("home_section.artist_rol")]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % heroTitles.length)
      }, 2500)
      return () => clearInterval(interval)
    }, 1000)
  }, [heroTitles.length])

  const currentTitle = heroTitles[currentTitleIndex]

  return (
    <HomeContainer component="section" id="home-section">
      <Container
        className="container"
        sx={{
          flexDirection: { md: "row", xs: "column" },
          padding: { md: "0px 24px", xs: "0px 16px" },
          justifyContent: { sm: "center", xs: "flex-start" },
        }}
      >
        <HeroTexts titleIndex={currentTitleIndex} currentTitle={currentTitle} />
        <HeroImage titleIndex={currentTitleIndex} />
      </Container>
    </HomeContainer>
  )
}
export default HomeSection
