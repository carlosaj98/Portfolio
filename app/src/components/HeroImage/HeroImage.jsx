import { Box } from "@mui/material"

function HeroImage({ titleIndex }) {
  return (
    <Box
      className="animate__fadeInRight"
      width="450px"
      id="hero-img-container"
      sx={{
        boxShadow:
          titleIndex === 0
            ? "0 0 30px 0px var(--primary-color-light), 0 0 30px 0px var(--primary-color-light) inset"
            : "0 0 30px 0px var(--secondary-color), 0 0 30px 0px var(--secondary-color) inset",
        borderRadius: "50%",
        border:
          titleIndex === 0
            ? "3px solid var(--primary-color-light)"
            : "3px solid var(--secondary-color)",
        overflow: "hidden",
      }}
    >
      <img src="/profile-image.png" />
    </Box>
  )
}
export default HeroImage
