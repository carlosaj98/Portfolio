import { Stack, styled } from "@mui/material"
import { useCustomTheme } from "../../context/CustomThemeContext"

const AboutDevContainer = styled(Stack)(() => {
  const { theme } = useCustomTheme()
  return {
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
      background:
        theme === "dark"
          ? "linear-gradient(var(--primary-color-extradark),transparent)"
          : "linear-gradient(var(--primary-color-extralight),transparent)",
      boxShadow: "0 5px 5px rgba(0,0,0,0.25)",
      borderRadius: "12px",
      border:
        theme === "dark"
          ? "2px solid var(--primary-color-extradark)"
          : "2px solid var(--primary-color-extralight)",
      color: "var(--texts-colors)",
      fontWeight: "600",
    },

    "#text-dev-container": {
      width: "100%",
      gap: "24px",
    },

    "#dev-title-container": {
      flexDirection: "row",
      gap: "16px",
      svg: {
        fill:
          theme === "dark"
            ? "var(--primary-color-light)"
            : "var(--primary-color)",
      },
    },

    "#dev-title": {
      fontFamily: "var(--font-title)",
      color:
        theme === "dark"
          ? "var(--primary-color-light)"
          : "var(--primary-color)",
    },

    ".dev-desc-container": {
      gap: "16px",
    },

    ".dev-desc": {
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

export default AboutDevContainer
