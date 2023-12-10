import { Stack, styled } from "@mui/material"

const WorkSectionContainer = styled(Stack)({
  height: "100%",

  ".container": {
    display: "flex",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    gap: "32px",
    marginBottom: "64px",
    transition: "opacity 0.5s ease-in-out",
  },

  h3: {
    color: "white",
    fontFamily: "var(--font-title)",
    marginTop: "32px",
    textAlign: "center",
  },

  "#btn-works-container": {
    flexDirection: "row",
    gap: "32px",
  },

  ".animate__fadeInRight, animate__fadeOut": {
    animationTimingFunction: "ease-out",
    animationDuration: "0.5s",
  },
})

export default WorkSectionContainer
