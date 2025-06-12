import { Stack, styled } from "@mui/material"

const AboutDevContainer = styled(Stack)({
  marginTop: "32px",
  justifyContent: "space-between",

  "#skills-dev-container": {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  ".skill-dev": {
    alignItems: "center",
    gap: "6px",
    background: "linear-gradient(var(--primary-color-extralight),transparent)",
    boxShadow: "0 10px 15px rgba(0,0,0,0.25)",
    borderRadius: "12px",
    border: "2px solid var(--primary-color-extralight)",
    color: "black",
    fontWeight: "600",
  },

  "#text-dev-container": {
    width: "100%",
    gap: "24px",
  },

  "#dev-title-container": {
    flexDirection: "row",
    gap: "16px",
  },

  "#dev-title": {
    fontFamily: "var(--font-title)",
    color: "var(--primary-color-light)",
  },

  ".dev-desc-container": {
    gap: "16px",
  },

  ".dev-desc": {
    fontFamily: "var(--font-text)",
    lineHeight: "var(--font-size-M)",
    color: "white",
  },

  ".divider": {
    border: "1px solid var(--gray-dark)",
    order: "1",
  },
})

export default AboutDevContainer
