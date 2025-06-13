import { Stack, styled } from "@mui/material"
import { useCustomTheme } from "../../context/CustomThemeContext"

const CardWorksContainer = styled(Stack)(() => {
  const { theme } = useCustomTheme()
  return {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 5px 5px rgba(0,0,0,0.25)",
    gap: "12px",
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "2px solid var(--neutral-400)",

    ".work-content-container": {
      gap: "12px",
    },

    ".work-title": {
      fontFamily: "var(--font-title)",
      fontSize: "var(--font-size-M)",
      textAlign: "center",
    },

    ".variant-dev": {
      color:
        theme === "dark"
          ? "var(--primary-color-light)"
          : "var(--primary-color)",
    },

    ".variant-artist": {
      color:
        theme === "dark"
          ? "var(--secondary-color-light)"
          : "var(--secondary-color)",
    },

    ".work-desc": {
      fontFamily: "var(--font-text)",
      fontSize: "var(--font-size-XXS)",
      textAlign: "center",
      color: "var(--texts-color)",
      flexGrow: "1",
    },

    ".work-links": {
      flexDirection: "row",
      gap: "32px",
      justifyContent: "center",
    },

    ".work-links a": {
      textDecoration: "none",
      fontFamily: "var(--font-title)",
      color: "black",
      borderRadius: "12px",
      width: "30px",
    },

    "a.variant-dev": {
      svg: {
        transition: "all 0.25s ease",
        fill: theme === "dark" ? "var(--neutral-400)" : "var(--neutral-600)",
      },
      "&:hover": {
        svg: {
          fill:
            theme === "dark"
              ? "var(--primary-color-light)"
              : "var(--primary-color)",
          transform: "scale(1.2)",
        },
      },
    },

    "a.variant-artist": {
      svg: {
        transition: "all 0.25s ease",
        fill: theme === "dark" ? "var(--neutral-400)" : "var(--neutral-600)",
      },
      "&:hover": {
        svg: {
          fill:
            theme === "dark"
              ? "var(--secondary-color-light)"
              : "var(--secondary-color)",
          transform: "scale(1.2)",
        },
      },
    },
    img: {
      borderRadius: "12px",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      boxShadow: "0 3px 3px rgba(0,0,0,0.25)",
    },
  }
})

export default CardWorksContainer
