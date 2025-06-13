import { Button, styled } from "@mui/material"
import { useCustomTheme } from "../../context/CustomThemeContext"

const CustomButton = styled(Button)(() => {
  const { theme } = useCustomTheme()
  return {
    textTransform: "none",
    color: theme === "dark" ? "var(--neutral-300)" : "var(--neutral-600)",
    fontFamily: "var(--font-text)",
    borderRadius: "12px",
    padding: "6px 12px",
    "&:hover": {
      backgroundColor:
        theme === "dark" ? "var(--neutral-100)" : "var(--neutral-800)",
      border: "2px solid transparent",
      color: theme === "dark" ? "var(--neutral-800)" : "var(--neutral-100)",
    },
  }
})

function DeveloperButton({ text, variant, action }) {
  const { theme } = useCustomTheme()
  return (
    <CustomButton
      onClick={() => action("developer")}
      sx={{
        border:
          variant === "developer"
            ? "2px solid var(--primary-color)"
            : theme === "dark"
            ? "2px solid var(--neutral-300)"
            : "2px solid var(--neutral-600)",
        color: theme === "dark" ? "var(--neutral-300)" : "var(--neutral-600)",
        fontSize: { md: "var(--font-size-XS)", xs: "var(--font-size-XXS)" },
        boxShadow: variant === "developer" && "0 0 20px var(--primary-color)",
        transition: "all 0.3s ease-out",
      }}
    >
      {text}
    </CustomButton>
  )
}

function ArtistButton({ text, variant, action }) {
  const { theme } = useCustomTheme()
  return (
    <CustomButton
      onClick={() => action("artist")}
      sx={{
        border:
          variant === "artist"
            ? "2px solid var(--secondary-color)"
            : theme === "dark"
            ? "2px solid var(--neutral-300)"
            : "2px solid var(--neutral-600)",
        color: theme === "dark" ? "var(--neutral-300)" : "var(--neutral-600)",
        fontSize: { md: "var(--font-size-XS)", xs: "var(--font-size-XXS)" },
        boxShadow: variant === "artist" && "0 0 30px var(--secondary-color)",
        transition: "all 0.3s ease-out",
      }}
    >
      {text}
    </CustomButton>
  )
}

function SubmitButton({ text }) {
  const { theme } = useCustomTheme()
  return (
    <CustomButton
      type="submit"
      sx={{
        border:
          theme === "dark"
            ? "2px solid var(--neutral-300)"
            : "2px solid var(--neutral-600)",
        fontSize: "var(--font-size-XS)",
      }}
    >
      {text}
    </CustomButton>
  )
}
export { DeveloperButton, ArtistButton, SubmitButton }
