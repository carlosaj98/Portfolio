import { Stack, styled } from "@mui/material";

const NavbarContainer = styled(Stack)({
  flexDirection:"row",
  alignItems:"baseline",
  position:"fixed",
  marginTop:"32px",
  backgroundColor:"rgba(255,255,255,0.75)",
  padding:"4px",
  backdropFilter:"blur(5px)",
  borderRadius:"64px",
  gap:"6px",

  a:{
    textAllign:"center",
    textDecoration:"none",
    color:"var(--primary-color-dark)",
    fontFamily:"var(--font-title)",
    padding:"12px 24px",
    borderRadius:"64px",
    cursor:"pointer",
    transition:"all 0.3s",
    "&:hover":{
      backgroundColor:"var(--primary-color-dark)",
      color:"white",
    }
  },
})

export default NavbarContainer