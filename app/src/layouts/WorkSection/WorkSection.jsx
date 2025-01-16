import { Typography, Container, Stack, Button } from "@mui/material"
import { DeveloperButton, ArtistButton } from "../../common/Buttons/Buttons"
import { CardWorks } from "../../components"
import WorkSectionContainer from "./Style"
import worksTemplate from "./worksTemplate"
import { useState } from "react"
import useReveal from "../../hooks/useReveal"
import { useTranslation } from "react-i18next"

function WorkSection() {
  const [currentWork, setCurrentWork] = useState("developer")
  const { isVisible, sectionRef } = useReveal()
  const template = worksTemplate()
  const handleClick = (current) => setCurrentWork(current)
  const {t} = useTranslation()
  return (
    <WorkSectionContainer
      id="works-section"
      ref={sectionRef}
      sx={{
        background:
          currentWork === "developer"
            ? "radial-gradient(circle at bottom right , var(--primary-color-light) -200%, black 90%)"
            : "radial-gradient(circle at bottom left , var(--secondary-color) -200%, black 90%)",
      }}
    >
      <Container className="container" sx={{ opacity: isVisible ? "1" : "0" }}>
        <Typography
          id="work-title"
          variant="h3"
          fontSize={{ sm: "var(--font-size-XL)", xs: "var(--font-size-L)" }}
        >
          {t("works_section.works_title")}
        </Typography>
        <Stack id="btn-works-container">
          <DeveloperButton
            className="btn-selection"
            text={t("works_section.dev_button")}
            action={handleClick}
            variant={currentWork}
          ></DeveloperButton>
          <ArtistButton
            className="btn-selection"
            text={t("works_section.artist_button")}
            action={handleClick}
            variant={currentWork}
          ></ArtistButton>
        </Stack>
        <Stack
          justifyContent={"center"}
          gap={"24px"}
          flexDirection={"row"}
          flexWrap={"wrap"}
        >
          {template[currentWork].map((work) => {
            return (
              <CardWorks
                key={work.id}
                image={work.image}
                title={work.title}
                description={work.description}
                link={work.link}
                linkGit={work.linkGit || ""}
              />
            )
          })}
        </Stack>
      </Container>
    </WorkSectionContainer>
  )
}
export default WorkSection
