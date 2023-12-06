import { Stack } from "@mui/material"
import {
  Navbar,
  HomeSection,
  AboutSection,
  WorkSection,
} from "./layouts"
import "animate.css"

function App() {
  return (
    <Stack id="app-container" alignItems={"center"}>
      <Navbar />
      <Stack id="sections-container" width={"100%"} height={"100%"}>
        <HomeSection />
        <AboutSection />
        <WorkSection />
      </Stack>
    </Stack>
  )
}
export default App
