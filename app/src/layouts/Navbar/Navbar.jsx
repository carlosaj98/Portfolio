import { Stack, Link } from "@mui/material"
import NavbarContainer from "./Style"
import { useMediaQuery } from "@mui/material"
import NavLinks from "./NavLinks"

function Navbar() {
  const isMobileScreen = useMediaQuery("(max-width: 600px)")
  return (
    <NavbarContainer>
      {NavLinks.map((link) => {
        return (
          <Link
            key={link.id}
            id={link.id}
            href={"#" + link.id}
            padding={{ sm: "12px 24px", xs: "6px 12px" }}
          >
            {!isMobileScreen ? link.title : link.icon}
          </Link>
        )
      })}
    </NavbarContainer>
  )
}
export default Navbar
