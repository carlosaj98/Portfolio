import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { GlobalStyles } from "@mui/material"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles
      styles={{
        root: {},
        "*": {
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        },
      }}
    />
    <App />
  </>
)
