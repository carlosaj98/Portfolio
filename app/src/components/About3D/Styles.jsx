import { Stack, styled } from "@mui/material"
import { useCustomTheme } from "../../context/CustomThemeContext"

const About3DContainer = styled(Stack)(() => {
  const { theme } = useCustomTheme()
  return {
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
        theme === "dark"
          ? "linear-gradient(var(--secondary-color-dark),transparent)"
          : "linear-gradient(var(--secondary-color-extralight),transparent)",
      boxShadow: "0 5px 5px rgba(0,0,0,0.25)",
      borderRadius: "12px",
      border:
        theme === "dark"
          ? "2px solid var(--secondary-color-dark)"
          : "2px solid var(--secondary-color-extralight)",
      color: "var(--texts-colors)",
      fontWeight: "600",
    },

    "#title-artist-container": {
      width: "100%",
      gap: "24px",
      svg: {
        fill:
          theme === "dark"
            ? "var(--secondary-color-light)"
            : "var(--secondary-color)",
      },
    },

    "#title-artist-container > div": {
      flexDirection: "row",
      gap: "16px",
    },

    "#artist-title": {
      fontFamily: "var(--font-title)",
      color:
        theme === "dark"
          ? "var(--secondary-color-light)"
          : "var(--secondary-color)",
    },

    "#artist-desc": {
      fontFamily: "var(--font-text)",
      lineHeight: "var(--font-size-M)",
      color: "var(--texts-color)",
    },

    ".divider": {
      border:
        theme === "dark"
          ? "1px solid var(--neutral-600)"
          : "1px solid var(--neutral-400)",
      order: "1",
    },
  }
})

export default About3DContainer
