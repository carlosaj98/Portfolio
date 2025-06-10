import { Stack, keyframes, styled } from "@mui/material"

const HomeContainer = styled(Stack)({
  height: "100vh",
  background: `
  radial-gradient(circle at bottom, var(--primary-color-light) -150%, var(--hero-bg-color) 70%)
  `,

  ".container": {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
  },

  ".animate__fadeInLeft": {
    animationDuration: "0.6s",
  },

  ".animate__fadeInRight": {
    animationDuration: "0.6s",
  },
})

export default HomeContainer
