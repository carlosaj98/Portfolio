import { GlobalStyles } from "@mui/material"

function IndexStyles() {
  return (
    <GlobalStyles
      styles={{
        ":root": {
          "--hero-bg-color": "#02040E",

          "--primary-color": "#1C3659",
          "--primary-color-dark": "#171B26",
          "--primary-color-light": "#0798F2",

          "--secondary-color": "#F2C879",
          "--secondary-color-dark": "#D9C49C",
          "--secondary-color-light": "#FAEACB",

          "--gray":"#ffffff80",
          "--gray-dark":"#ffffff40",
          "--gray-light":"#ffffffbf",

          "--font-title": "Lexend, sans-serif",
          "--font-text": "Inter, sans-serif",

          "--font-size-XXXL": "80px",
          "--font-size-XXL": "64px",
          "--font-size-XL": "48px",
          "--font-size-L": "32px",
          "--font-size-M": "24px",
          "--font-size-S": "18px",
          "--font-size-XS": "16px",
          "--font-size-XXS": "14px",
        },
        "*": {
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        },
        html: {
          scrollBehavior: "smooth",
        },

        body: {
          backgroundColor: "black",
          fontFamily: "var(--font-text)",
          overflowX: "hidden",
        },

        "#app-container": {
          backgroundColor: "black",
          minHeight: "100vh",
        },
      }}
    />
  )
}
export default IndexStyles
