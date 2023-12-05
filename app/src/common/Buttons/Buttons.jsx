import { Button, styled } from "@mui/material"

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "var(--gray)",
  fontFamily: "var(--font-text)",
  borderRadius: "12px",
  padding: "6px 12px",
  "&:hover": {
    backgroundColor: "var(--gray-light)",
    border: "2px solid transparent",
    boxShadow: "0 0 30px var(--gray-light)",
    color: "black",
  },
})

function DeveloperButton({ text, variant, action }) {
  return (
    <CustomButton
      onClick={() => action("developer")}
      sx={{
        border:
          variant === "developer"
            ? "2px solid var(--primary-color-light)"
            : "2px solid var(--gray)",
        color: variant === "developer" && "white",
        fontSize: { md: "var(--font-size-XS)", xs: "var(--font-size-XXS)" },
        boxShadow:
          variant === "developer" && "0 0 30px var(--primary-color-light)",
        transition: "all 0.3s ease-out",
      }}
    >
      {text}
    </CustomButton>
  )
}

function ArtistButton({ text, variant, action }) {
  return (
    <CustomButton
      onClick={() => action("artist")}
      sx={{
        border:
          variant === "artist"
            ? "2px solid var(--secondary-color)"
            : "2px solid var(--gray)",
        color: variant === "artist" && "white",
        fontSize: { md: "var(--font-size-XS)", xs: "var(--font-size-XXS)" },
        boxShadow: variant === "artist" && "0 0 30px var(--secondary-color)",
        transition: "all 0.3s ease-out",
      }}
    >
      {text}
    </CustomButton>
  )
}
export { DeveloperButton, ArtistButton }
