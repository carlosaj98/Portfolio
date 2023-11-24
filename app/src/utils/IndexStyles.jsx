import { GlobalStyles } from "@mui/material"

function IndexStyles() {
  return (
    <GlobalStyles
      styles={{
        ":root": {
          "--primary-color": "#1C3659",
          "--primary-color-dark": "#171B26",
          "--primary-color-light": "#0798F2",
          "--secondary-color": "#F2C879",
          "--secondary-color-dark": "#D9C49C",
          "--secondary-color-light": "#FAEACB",
          "--font-title": "Lexend, sans-serif",
          "--font-text": "Inter, sans-serif",
        },
        "*": {
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        },
        body: {
          backgroundColor: "black",
          fontFamily:"var(--font-text)"
        },

        "#app-container": {
          backgroundColor: "black",
          maxWidth: "100vw",
          minHeight: "100vh",
        },
      }}
    />
  )
}
export default IndexStyles