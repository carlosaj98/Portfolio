import { GlobalStyles } from "@mui/material"

function IndexStyles() {
  return (
    <GlobalStyles
      styles={{
        ":root": {
          "--hero-bg-color": "#02040E",

          "--primary-color": "#0798f2",
          "--primary-color-dark": "#005ea6",
          "--primary-color-light": "#79caff",
          "--primary-color-extradark": "#094371",
          "--primary-color-extralight": "#dff0ff",

          "--secondary-color": "#f88317",
          "--secondary-color-dark": "#c14e0d",
          "--secondary-color-light": "#fcc375",
          "--secondary-color-extradark": "#7c3412",
          "--secondary-color-extralight": "#fff0d5",

          "--gray": "#ffffff80",
          "--gray-dark": "#ffffff40",
          "--gray-light": "#ffffffbf",

          "--neutral-50": "#fafafa",
          "--neutral-100": "#f5f5f5",
          "--neutral-200": "#e5e5e5",
          "--neutral-300": "#d4d4d4",
          "--neutral-400": "#a1a1a1",
          "--neutral-500": "#737373",
          "--neutral-600": "#525252",
          "--neutral-700": "#404040",
          "--neutral-800": "#262626",

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

          "--headers-color": "var(--neutral-100)",
          "--texts-color": "var(--neutral-200)",
          "--hero-texts-shadows": "",
        },

        ".custom-theme-light": {
          "--hero-bg-color": "var(--neutral-100)",
          "--headers-color": "var(--neutral-800)",
          "--texts-color": "var(--neutral-800)",
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
