import { Stack, keyframes, styled } from "@mui/material"

const HomeContainer = styled(Stack)({
  height: "100vh",
  background: `
  radial-gradient(circle at bottom, var(--primary-color-light) -200%, var(--hero-bg-color) 70%)
  `,

  "#container": {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
  },

  ".animate__fadeInLeft": {
    animationDuration: "0.75s",
    animationDelay: "0s",
  },

  ".animate__fadeInRight": {
    animationDuration: "0.75s",
    animationDelay: "0s",
  },
})

export default HomeContainer
