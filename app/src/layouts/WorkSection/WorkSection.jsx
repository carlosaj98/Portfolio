import { Typography, Container, Stack, Button } from "@mui/material"
import WorkSectionContainer from "./Style"

function WorkSection() {
  return (
    <WorkSectionContainer>
      <Container id="container">
        <Typography id="work-title" variant="h3">
          These are my creations
        </Typography>
        <Stack id="btn-works-container">
          <Button variant="contained">Dev Works</Button>
          <Button variant="contained">3D Works</Button>
        </Stack>
      </Container>
    </WorkSectionContainer>
  )
}
export default WorkSection
