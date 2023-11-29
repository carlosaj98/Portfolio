import { Stack, styled } from "@mui/material"

const NavbarContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "baseline",
  position: "fixed",
  bottom:"0",
  marginBottom:"24px",
  backgroundColor: "rgba(255,255,255,0.8)",
  padding: "4px",
  backdropFilter: "blur(5px)",
  borderRadius: "64px",
  gap: "6px",
  zIndex: "10",

  a: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    textDecoration: "none",
    color: "var(--primary-color-dark)",
    fontFamily: "var(--font-title)",
    borderRadius: "64px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: "var(--primary-color-dark)",
      color: "white",
      svg: {fill: "white", transition:"fill 0.3s ease"}
    }
  },
})

export default NavbarContainer
