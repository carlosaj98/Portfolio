import { Stack, styled } from "@mui/material"
import { useCustomTheme } from "../../context/CustomThemeContext"

const HeroTextsContainer = styled(Stack)(() => {
  const { theme } = useCustomTheme()
  return {
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

    ".social-media-links svg": {
      transition: "scale 0.15s ease-out, fill 0.15s ease-out",
      fill: theme === "dark" ? "var(--neutral-400)" : "var(--neutral-600)",
      "&:hover": {
        scale: "1.2",
        fill: theme === "dark" ? "var(--neutral-100)" : "var(--neutral-800)",
      },
    },

    ".cv-download": {
      textDecoration: "none",
      padding: "12px 16px",
      borderRadius: "12px",
      border: theme === "dark" ? "2px solid var(--neutral-400)" : "2px solid var(--neutral-600)",
      color: theme === "dark" ? "var(--neutral-400)" : "var(--neutral-600)",
      fontFamily: "var(--font-text)",
      fontWeight: "500",
      fontSize: "var(--font-size-XS)",
      transition:
        "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
      display: "flex",
      alignItems: "center",
      jusifyContent: "center",
      gap: "12px",
      svg: {
        fill: theme === "dark" ? "var(--neutral-400)" : "var(--neutral-600)",
        transition: "fill 0.3s ease",
      },
      "&:hover": {
        backgroundColor:
          theme === "dark" ? "var(--neutral-100)" : "var(--neutral-800)",
        borderColor: theme === "dark" ? "var(--neutral-100)" : "var(--neutral-800)",
        color: theme === "dark" ? "var(--neutral-800)" : "var(--neutral-100)",
        border: "2px solid transparent",
        svg: {
          fill: theme === "dark" ? "var(--neutral-800)" : "var(--neutral-100)",
        },
      },
    },
  }
})

export default HeroTextsContainer
