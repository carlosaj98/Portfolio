import { createContext, useContext, useEffect, useState } from "react"

const CustomThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("custom-theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.setAttribute("class", `custom-theme-${savedTheme}`)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("custom-theme", newTheme)
    document.body.setAttribute("class", `custom-theme-${newTheme}`)
  }

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  )
}

export const useTheme = () => useContext(CustomThemeContext)
