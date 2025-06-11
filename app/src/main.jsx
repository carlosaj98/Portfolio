import ReactDOM from "react-dom/client"
import App from "./App"
import IndexStyles from "./utils/IndexStyles"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./utils/i18n"
import { CustomThemeProvider } from "./context/CustomThemeContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CustomThemeProvider>
      <IndexStyles />
      <App />
    </CustomThemeProvider>

    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="colored"
    />
  </>
)
