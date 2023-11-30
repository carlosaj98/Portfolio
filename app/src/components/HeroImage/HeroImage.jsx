import { Box } from "@mui/material"
import HeroImageContainer from "./Style"

function HeroImage({ titleIndex }) {
  return (
    <HeroImageContainer
      className="animate__fadeInRight"
      width={{lg:"500px" ,md: "400px", xs: "180px" }}
      order={{md:"1", xs:"-1"}}
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
    </HeroImageContainer>
  )
}
export default HeroImage
