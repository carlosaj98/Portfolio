import { Stack, styled } from "@mui/material"

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
    justifyContent: "space-between",
  },

  h1: {
    color: "white",
    fontFamily: "var(--font-title)",
    textShadow: "0 0 12px white",
  },

  h2: {
    color: "var(--primary-color-light)",
    fontFamily: "var(--font-title)",
    textShadow: "0 0 12px var(--primary-color-light)",
  },

  p: {
    color: "white",
    fontSize: "18px",
    fontFamily: "var(--font-text)",
    maxWidth: "550px",
    marginTop: "24px",
    textShadow: "0 0 6px white",
  },

  img: {
    width: "100%",
    boxShadow:
      "0 0 30px 0px var(--primary-color-light), 0 0 30px 0px var(--primary-color-light) inset",
    borderRadius: "50%",
    border: "3px solid var(--primary-color-light)",
  },
})

export default HomeContainer
