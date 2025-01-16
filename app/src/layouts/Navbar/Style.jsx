import { Stack, styled } from "@mui/material"

const NavbarContainer = styled(Stack)({
  position: "fixed",
  bottom: "0",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  gap: "12px",
  zIndex:"100",

  ".navlinks-container":{
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "4px",
    backdropFilter: "blur(7px)",
    borderRadius: "64px",
    gap: "6px",
    border: "2px solid var(--gray)",
  },


  a: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "var(--gray-light)",
    fontFamily: "var(--font-text)",
    fontSize: "var(--font-size-XS)",
    borderRadius: "64px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: "var(--gray-dark)",
      color: "white",
      svg: { fill: "white", transition: "fill 0.3s ease" },
    },
  },
})

export default NavbarContainer
