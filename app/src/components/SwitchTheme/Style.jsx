import { Stack, styled } from "@mui/material"

const SwitchThemeContainer = styled(Stack)(({ theme }) => {
  return {
    borderRadius: "50%",
    border: "2px solid var(--gray)",
    backgroundColor:
      theme === "dark" ? "var(--neutral-800)" : "rgba(0,0,0,0.6)",
    padding: "4px",
    height: "48px",
    width: "48px",
    cursor: "pointer",

    ".icon-container": {
      height: "100%",
      width: "100%",
      padding: "3px",
      borderRadius: "50%",
      transition: "background-color 0.3s ease",

      "@media (hover: hover)": {
        "&:hover": {
          backgroundColor: "var(--gray-dark)",
          svg: {
            fill: "white",
          },
        },
      },
    },

    ".icon-container svg": {
      fill: theme === "dark" ? "var(--primary-color)" : "var(--gray-light)",
      transition: "fill 0.3s ease",
    },
  }
})

export default SwitchThemeContainer
