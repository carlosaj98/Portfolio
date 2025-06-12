import { Stack, styled } from "@mui/material"

const About3DContainer = styled(Stack)({
  marginTop: "32px",
  justifyContent: "space-between",

  "#skills-artist-container": {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  ".skill-artist": {
    alignItems: "center",
    gap: "6px",
    background:
      "linear-gradient(var(--secondary-color-extralight),transparent)",
    boxShadow: "0 10px 15px rgba(0,0,0,0.25)",
    borderRadius: "12px",
    border: "2px solid var(--secondary-color-extralight)",
    color: "black",
    fontWeight: "600",
  },

  "#text-artist-container": {
    width: "100%",
    gap: "24px",
  },

  "#text-artist-container > div": {
    flexDirection: "row",
    gap: "16px",
  },

  "#artist-title": {
    fontFamily: "var(--font-title)",
    color: "var(--secondary-color)",
  },

  "#artist-desc": {
    fontFamily: "var(--font-text)",
    lineHeight: "var(--font-size-M)",
    color: "white",
  },

  ".divider": {
    border: "1px solid var(--gray-dark)",
    order: "1",
  },
})

export default About3DContainer
