import { GlobalStyles } from "@mui/material"

function IndexStyles() {
  return (
    <GlobalStyles
      styles={{
        ":root": {
          "--bg-color": "#1c1050",
          "--bg-color-dark": "#160c41",
          "--bg-color-light": "#361d9f",
        },
        "*": {
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        },
        body: {
          fontFamily: "Poppins, sans-serif",
        },

        "#app-container": {
          backgroundColor: "white",
          backgroundImage: "url(/background_desktop.png)",
          backgroundSize: "cover",
          width: "100vw",
          minHeight: "100vh",
        },
      }}
    />
  )
}
export default IndexStyles
