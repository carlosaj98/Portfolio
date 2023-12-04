import { Typography, Container, Stack, Button } from "@mui/material"
import { CardWorks } from "../../components"
import WorkSectionContainer from "./Style"

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
        <Stack alignItems={"center"} justifyContent={"center"} gap={"24px"} flexDirection={"row"} flexWrap={"wrap"}>
          <CardWorks />
          <CardWorks />
          <CardWorks />
          <CardWorks />
          <CardWorks />
        </Stack>
      </Container>
    </WorkSectionContainer>
  )
}
export default WorkSection
