import { Stack, styled } from "@mui/material"

const NavbarContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "baseline",
  position: "fixed",
  backgroundColor: "rgba(255,255,255,0.8)",
  padding: "4px",
  backdropFilter: "blur(5px)",
  borderRadius: "64px",
  gap: "6px",
  zIndex: "10",

  a: {
    textAllign: "center",
    textDecoration: "none",
    color: "var(--primary-color-dark)",
    fontFamily: "var(--font-title)",
    padding: "12px 24px",
    borderRadius: "64px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: "var(--primary-color-dark)",
      color: "white",
    },
  },
})

export default NavbarContainer
