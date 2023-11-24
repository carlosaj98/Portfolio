import { Stack } from "@mui/material"
import HomeSection from "./layouts/HomeSection/HomeSection"

function App() {
  return (
    <Stack id="app-container" alignItems={"center"}>
      <Stack className="sections" width={"100%"} height={"100%"}>
        <HomeSection />
      </Stack>
    </Stack>
  )
}
export default App
