import { Stack, Link, Box } from "@mui/material"
import NavbarContainer from "./Style"
import { useMediaQuery } from "@mui/material"
import NavLinks from "./NavLinks"
import { IconLanguage } from "../../common/Icons/Icons"
import { useState } from "react"
import LangMenu from "../../components/LangMenu/LangMenu"

function Navbar() {
  const isMobileScreen = useMediaQuery("(max-width: 600px)")
  const [isVisible, setIsVisible] = useState(false)
  return (
    <NavbarContainer marginBottom={{ sm: "24px", xs: "12px" }}>
      <Stack className="navlinks-container">
        {NavLinks.map((link) => {
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
      <Stack className="nav-lang" >
        <Box
          height={"48px"}
          width={"48px"}
          borderRadius={"50%"}
          border={"2px solid var(--gray-light)"}
          padding={"6px"}
          onClick={()=> setIsVisible((status)=>!status)}
          sx={{cursor:"pointer"}}
        >
          <IconLanguage color={"var(--gray-light)"} />
        </Box>
        {isVisible && <LangMenu />}
      </Stack>
    </NavbarContainer>
  )
}
export default Navbar
