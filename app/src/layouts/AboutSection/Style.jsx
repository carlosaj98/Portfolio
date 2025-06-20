import { Stack, styled } from "@mui/material"

const AboutContainer = styled(Stack)({
  height: "100%",
  color: "var(--headers-color)",
  alignItems: "center",
  background: `radial-gradient(circle at top left, var(--primary-color-light) -150%, transparent 70%), 
    radial-gradient(circle at bottom right, var(--secondary-color-light) -150%, transparent 70%)`,
  backgroundColor: "var(--hero-bg-color)",

  ".container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    height: "100%",
    marginBottom: "64px",
    transition: "opacity 0.5s ease-in-out",
  },

  "#about-title": {
    fontFamily: "var(--font-title)",
    marginTop: "32px",
    fontWeight: "500",
  },

  ".animate__fadeInLeft, animate__fadeOut": {
    animationTimingFunction: "ease-out",
    animationDuration: "0.5s",
  },
})

export default AboutContainer
