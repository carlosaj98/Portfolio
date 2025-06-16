import { Box } from "@mui/material"
import { IconMoon } from "../../common/Icons/Icons"
import SwitchThemeContainer from "./Style"
import { useCustomTheme } from "../../context/CustomThemeContext"

function SwitchTheme() {
  const { theme, toggleTheme } = useCustomTheme()
  return (
    <SwitchThemeContainer onClick={toggleTheme} theme={theme}>
      <Box className="icon-container">
        <IconMoon />
      </Box>
    </SwitchThemeContainer>
  )
}
export default SwitchTheme
