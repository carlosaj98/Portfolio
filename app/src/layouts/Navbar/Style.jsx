import { Stack, styled } from "@mui/material"

const NavbarContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "baseline",
  position: "fixed",
  bottom:"0",
  backgroundColor: "var(--gray-dark)",
  padding: "4px",
  backdropFilter: "blur(10px)",
  borderRadius: "64px",
  gap: "6px",
  zIndex: "10",
  boxShadow:"0 0px 30px rgba(0,0,0,0.5)",

  a: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    textDecoration: "none",
    color: "var(--gray-light)",
    fontFamily: "var(--font-text)",
    fontSize:"var(--font-size-XS)",
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
