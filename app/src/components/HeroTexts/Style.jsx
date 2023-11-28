import { Stack, styled } from "@mui/material"

const HeroTextsContainer = styled(Stack)({
  h1: {
    color: "white",
    fontFamily: "var(--font-title)",
    textShadow: "0 0 12px white",
  },

  h2: {
    fontFamily: "var(--font-title)",
  },

  p: {
    color: "white",
    fontSize: "18px",
    fontFamily: "var(--font-text)",
    maxWidth: "650px",
    marginTop: "24px",
    textShadow: "0 0 6px white",
  },

  "a, svg": {
    transition: "scale 0.15s ease-out, fill 0.15s ease-out",
    "&:hover": {
      scale: "1.2",
      fill: "white" 
    },
  },
})

export default HeroTextsContainer
