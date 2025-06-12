import { Stack, Link, Box, Button } from "@mui/material"
import NavbarContainer from "./Style"
import { useMediaQuery } from "@mui/material"
import NavLinks from "./NavLinks"
import { IconLanguage } from "../../common/Icons/Icons"
import { useState } from "react"
import LangMenu from "../../components/LangMenu/LangMenu"
import { useCustomTheme } from "../../context/CustomThemeContext"

function Navbar() {
  const isMobileScreen = useMediaQuery("(max-width: 600px)")
  const [isVisible, setIsVisible] = useState(false)
  const navLinks = NavLinks()
  const { toggleTheme } = useCustomTheme()
  return (
    <NavbarContainer marginBottom={{ sm: "24px", xs: "12px" }}>
      <Stack className="navlinks-container">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={"#" + link.id}
              padding={{ sm: "12px 24px", xs: "6px 12px" }}
            >
              {!isMobileScreen ? link.title : link.icon}
            </Link>
          )
        })}
      </Stack>
      <Stack className="nav-lang">
        <Box
          height={"48px"}
          width={"48px"}
          borderRadius={"50%"}
          border={"2px solid var(--gray-light)"}
          padding={"6px"}
          onClick={() => setIsVisible((status) => !status)}
          sx={{ cursor: "pointer", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <IconLanguage color={"var(--gray-light)"} />
        </Box>
        {isVisible && <LangMenu action={() => setIsVisible(false)} />}
      </Stack>
      <Stack>
        <Button variant="contained" onClick={toggleTheme}>
          Theme
        </Button>
      </Stack>
    </NavbarContainer>
  )
}
export default Navbar
