import { Stack, styled } from "@mui/material"

const LangMenuContainer = styled(Stack)({
  backgroundColor: "white",
  padding: "12px",
  gap: "12px",
  borderRadius: "12px",
  position: "absolute",
  bottom: "80px",
  right: "-8%",
  boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
  animationDuration: "0.3s",

  p: {
    width: "80px",
    fontWeight: "500",
    fontFamily: "var(--font-text)",
  },

  ".lang-item": {
    cursor: "pointer",
    "&:hover": {
      color: "var(--primary-color-light)",
    },
  },
})

export default LangMenuContainer
