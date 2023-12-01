import { Stack, styled } from "@mui/material"

const AboutContainer = styled(Stack)({
  height: "100%",
  color: "white",
  alignItems: "center",
  background: `radial-gradient(ellipse at top left, var(--primary-color-light) -200%, transparent 70%), 
    radial-gradient(ellipse at bottom right, var(--secondary-color) -200%, transparent 70%)`,
  backgroundColor: "black",

  "#container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    height: "100%",
    marginBottom: "64px",
    transition:"all 0.5s ease"
  },

  "#about-title": {
    fontFamily: "var(--font-title)",
    marginTop: "32px",
    fontWeight: "500",
  },

  ".animate__fadeInLeft":{
    animationDuration:"0.75s"
  },

  ".animate__fadeOutLeft":{
    animationDuration:"0.75s"
  },
})

export default AboutContainer
