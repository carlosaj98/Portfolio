import { Stack } from "@mui/material"
import { Navbar, HomeSection } from "./layouts"
import "animate.css"

function App() {
  return (
    <Stack id="app-container" alignItems={"center"}>
      <Navbar/>
      <Stack id="sections-container" width={"100%"} height={"100%"}>
        <HomeSection />
        <HomeSection />
      </Stack>
    </Stack>
  )
}
export default App
