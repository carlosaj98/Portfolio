import { Stack, keyframes, styled } from "@mui/material"

const HomeContainer = styled(Stack)({
  minHeight: "100vh",
  background: `
  radial-gradient(ellipse at bottom, var(--primary-color-light) -200%, var(--hero-bg-color) 70%)
  `,
  justifyContent:"center",

  "#container": {
    height:"100%",
    alignItems: "center",
    justifyContent: "center",
    gap:"32px",
    margin:"0 auto",
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
