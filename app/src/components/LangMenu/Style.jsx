import { Stack, styled } from "@mui/material"
import { useCustomTheme } from "../../context/CustomThemeContext"

const LangMenuContainer = styled(Stack)(() => {
  const { theme } = useCustomTheme()
  return {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "12px",
    gap: "12px",
    borderRadius: "12px",
    position: "absolute",
    bottom: "70px",
    right:"15px",
    boxShadow: "0 3px 3px rgba(0,0,0,0.25)",
    animationDuration: "0.25s",
    backdropFilter: "blur(5px)",

    p: {
      width: "80px",
      fontWeight: "500",
      fontFamily: "var(--font-text)",
    },

    ".lang-item": {
      cursor: "pointer",
      color: theme === "dark" ? "var(--neutral-300)" : "var(--neutral-300)",
      "&:hover": {
        color: theme === "dark" ? "var(--neutral-50)" : "var(--neutral-50)",
      },
    },
  }
})

export default LangMenuContainer
