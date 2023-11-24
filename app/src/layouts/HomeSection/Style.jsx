import { Stack, styled } from "@mui/material"

const HomeContainer = styled(Stack)({
  height: "100vh",
  background: `
  radial-gradient(ellipse at top right, var(--primary-color) -20%, transparent), 
  radial-gradient(ellipse at bottom left, var(--secondary-color) -150%, transparent 50%)
  `,
  backgroundColor: "black",
})

export default HomeContainer
