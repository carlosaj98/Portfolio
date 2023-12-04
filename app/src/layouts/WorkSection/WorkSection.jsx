import { Typography, Container, Stack, Button } from "@mui/material"
import { CardWorks } from "../../components"
import WorkSectionContainer from "./Style"
import { artistTemplate } from "./worksTemplate"

function WorkSection() {
  return (
    <WorkSectionContainer id="works-section">
      <Container id="container">
        <Typography id="work-title" variant="h3">
          These are my creations
        </Typography>
        <Stack id="btn-works-container">
          <Button variant="contained">Dev Works</Button>
          <Button variant="contained">3D Works</Button>
        </Stack>
        <Stack
          justifyContent={"center"}
          gap={"24px"}
          flexDirection={"row"}
          flexWrap={"wrap"}
        >
          {artistTemplate.map((work) => {
            return (
              <CardWorks
                key={work.id}
                image={work.image}
                title={work.title}
                description={work.description}
                link={work.link}
                linkGit={work.linkGit ? work.linkGit : ""}
              />
            )
          })}
        </Stack>
      </Container>
    </WorkSectionContainer>
  )
}
export default WorkSection
