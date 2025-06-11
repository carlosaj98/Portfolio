import { Stack, styled } from "@mui/material"

const HeroTextsContainer = styled(Stack)({
  width: "100%",
  gap: "12px",
  h1: {
    color: "var(--headers-color)",
    fontFamily: "var(--font-title)",
  },

  h2: {
    fontFamily: "var(--font-title)",
  },

  p: {
    color: "var(--texts-color)",
    fontFamily: "var(--font-text)",
    maxWidth: "650px",
    marginTop: "12px",
  },

  ".social-media-links, .social-media-links svg": {
    transition: "scale 0.15s ease-out, fill 0.15s ease-out",
    "&:hover": {
      scale: "1.2",
      fill: "var(--gray-light)",
    },
  },

  ".cv-download": {
    textDecoration: "none",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "2px solid var(--gray)",
    color: "var(--gray)",
    fontFamily: "var(--font-text)",
    fontWeight: "500",
    fontSize: "var(--font-size-XS)",
    transition:
      "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
    display: "flex",
    alignItems: "center",
    jusifyContent: "center",
    gap: "12px",
    "&:hover": {
      backgroundColor: "var(--gray-light)",
      borderColor: "var(--gray-light)",
      color: "var(--primary-color-dark)",
      border: "2px solid transparent",
      boxShadow: "0 0 16px var(--gray-light)",
      svg: { fill: "var(--primary-color-dark)", transition: "fill 0.3s ease" },
    },
  },
})

export default HeroTextsContainer
