import { Stack, keyframes, styled } from "@mui/material"

const HomeContainer = styled(Stack)({
  flexDirection: "row",
  gap: "64px",
  height: "100vh",
  background: `
  radial-gradient(ellipse at bottom, var(--primary-color-light) -200%, var(--hero-bg-color) 70%)
  `,

  "#container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap:"32px"
  },

  img: {
    width: "100%",
    height:"auto",
  },

  ".animate__fadeInLeft":{
    animationDuration:"0.75s",
    animationDelay:"0s"
  },

  ".animate__fadeInRight":{
    animationDuration:"0.75s",
    animationDelay:"0s"
  },
})

export default HomeContainer
