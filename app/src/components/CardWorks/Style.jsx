import { Stack, styled } from "@mui/material"

const CardWorksContainer = styled(Stack)({
  maxWidth: "350px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 5px 10px black",
  padding: "24px",
  gap: "12px",
  backgroundColor: "rgba(255,255,255,0.1)",
  border: "2px solid var(--gray-dark)",

  ".work-content-container": {
    gap: "12px",
  },

  ".work-title": {
    fontFamily: "var(--font-title)",
    fontSize: "var(--font-size-M)",
    textAlign: "center",
  },

  ".variant-dev": {
    color: "var(--primary-color-light)",
  },

  ".variant-artist": {
    color: "var(--secondary-color)",
  },

  ".work-desc": {
    fontFamily: "var(--font-text)",
    fontSize: "var(--font-size-XXS)",
    textAlign: "center",
    color: "white",
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
    svg: { transition: "all 0.25s ease" },
    "&:hover": {
      svg: {
        fill: "var(--primary-color-light)",
        transform: "scale(1.2)",
      },
    },
  },

  "a.variant-artist": {
    svg: { transition: "all 0.25s ease" },
    "&:hover": {
      svg: {
        fill: "var(--secondary-color)",
        transform: "scale(1.2)",
      },
    },
  },

  img: {
    borderRadius: "12px",
    width: "100%",
    height: "100%",
  },
})

export default CardWorksContainer
