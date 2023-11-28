import { Stack, styled } from "@mui/material"

const HeroTextsContainer = styled(Stack)({
  width:"100%",
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
    fontFamily: "var(--font-text)",
    maxWidth: "650px",
    marginTop: "24px",
    textShadow: "0 0 6px white",
  },

  ".social-media-links, .social-media-links svg": {
    transition: "scale 0.15s ease-out, fill 0.15s ease-out",
    "&:hover": {
      scale: "1.2",
      fill: "white",
    },
  },

  ".cv-download": {
    textDecoration: "none",
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: "8px 16px",
    borderRadius: "24px",
    color: "var(--primary-color-dark)",
    fontFamily: "var(--font-text)",
    fontWeight: "500",
    transition:
      "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    alignItems: "center",
    jusifyContent: "center",
    gap: "12px",
    "&:hover": {
      backgroundColor: "var(--primary-color-dark)",
      color: "white",
      boxShadow: "0 0 16px white",
      svg: { fill: "white", transition: "fill 0.3s ease" },
    },
  },
})

export default HeroTextsContainer
