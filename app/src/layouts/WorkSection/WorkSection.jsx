import { Typography, Container, Stack, Button } from "@mui/material"
import { DeveloperButton, ArtistButton } from "../../common/Buttons/Buttons"
import { CardWorks } from "../../components"
import WorkSectionContainer from "./Style"
import worksTemplate from "./worksTemplate"
import { useState } from "react"

function WorkSection() {
  const [currentWork, setCurrentWork] = useState("developer")

  const handleClick = (current) => setCurrentWork(current)
  return (
    <WorkSectionContainer
      id="works-section"
      sx={{
        background:
          currentWork === "developer"
            ? "radial-gradient(circle at bottom right , var(--primary-color-light) -200%, black 90%)"
            : "radial-gradient(circle at bottom left , var(--secondary-color) -200%, black 90%)",
      }}
    >
      <Container id="container">
        <Typography id="work-title" variant="h3" fontSize={{sm:"var(--font-size-XL)", xs:"var(--font-size-L)"}}>
          These are my creations
        </Typography>
        <Stack id="btn-works-container">
          <DeveloperButton
            className="btn-selection"
            text={"Developer Works"}
            action={handleClick}
            variant={currentWork}
          ></DeveloperButton>
          <ArtistButton
            className="btn-selection"
            text={"3D Artist Works"}
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
          {worksTemplate[currentWork].map((work) => {
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
