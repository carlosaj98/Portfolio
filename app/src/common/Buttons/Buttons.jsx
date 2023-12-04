import { Button, styled } from "@mui/material"

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "var(--gray)",
  fontFamily: "var(--font-text)",
  fontSize: "var(--font-size-XS)",
  borderRadius: "12px",
  padding: "6px 12px",

  "&:hover": {
    backgroundColor: "var(--gray-light)",
    border: "2px solid var(--gray-light)",
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
        boxShadow: variant === "artist" && "0 0 30px var(--secondary-color)",
        transition: "all 0.3s ease-out",
      }}
    >
      {text}
    </CustomButton>
  )
}
export { DeveloperButton, ArtistButton }
