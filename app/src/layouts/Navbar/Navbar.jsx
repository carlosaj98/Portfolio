import { Stack, Link } from "@mui/material"
import NavbarContainer from "./Style"

function Navbar() {
  return (
    <NavbarContainer>
      <Link>Home</Link>
      <Link>About me</Link>
      <Link>Works</Link>
      <Link>Education</Link>
      <Link>Contact</Link>
    </NavbarContainer>
  )
}
export default Navbar