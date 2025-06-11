import { Stack } from "@mui/material"
import {
  Navbar,
  HomeSection,
  AboutSection,
  WorkSection,
  ContactSection,
} from "./layouts"
import "animate.css"

function App() {
  localStorage.setItem("custom-theme", "dark")

  const getTheme = localStorage.getItem("custom-theme")

  document.querySelector("body").setAttribute("class", `theme-${getTheme}`)

  return (
    <Stack id="app-container" alignItems={"center"}>
      <Navbar />
      <Stack id="sections-container" width={"100%"} height={"100%"}>
        <HomeSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </Stack>
    </Stack>
  )
}
export default App
