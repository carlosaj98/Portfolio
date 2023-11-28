import { Box, Stack, Typography, Link } from "@mui/material"

import {
  IconLinkedin,
  IconArtstation,
  IconGithub,
} from "../../common/Icons/Icons"

import HeroTextsContainer from "./Style"

function HeroTexts({ titleIndex, currentTitle }) {
  return (
    <HeroTextsContainer className="text-intro-container animate__fadeInLeft">
      <Typography variant="h1">
        Hi!, 👋<br></br>I`m Carlos
      </Typography>
      {titleIndex === 0 && (
        <Typography
          variant="h2"
          className="animate__fadeInLeft"
          color="var(--primary-color-light)"
          sx={{
            textShadow: "0 0 12px var(--primary-color-light)",
          }}
        >
          {currentTitle}
        </Typography>
      )}

      {titleIndex === 1 && (
        <Typography
          variant="h2"
          className="animate__fadeInLeft"
          color="var(--secondary-color)"
          sx={{
            textShadow: "0 0 12px var(--secondary-color)",
          }}
        >
          {currentTitle}
        </Typography>
      )}

      <Typography id="hero-text-desc">
        Full Stack Developer and 3D Artist blending technology and creativity.
        Bridging technical functionality with artistic vision for innovative
        solutions.
        <br /> Let's connect to elevate your projects together!
      </Typography>
      <Stack
        id="social-media-links"
        marginTop={"24px"}
        flexDirection={"row"}
        gap={"18px"}
      >
        <Link
          href="https://www.linkedin.com/in/carlosaj98"
          target="_blank"
          width={"30px"}
          height={"30px"}
        >
          <IconLinkedin color={"rgba(255,255,255,0.5)"} />
        </Link>
        <Link
          href="https://www.artstation.com/carlosaj"
          target="_blank"
          width={"30px"}
          height={"30px"}
        >
          <IconArtstation color={"rgba(255,255,255,0.5)"} />
        </Link>

        <Link
          href="https://github.com/carlosaj98"
          target="_blank"
          width={"30px"}
          height={"30px"}
        >
          <IconGithub color={"rgba(255,255,255,0.5)"} />
        </Link>
      </Stack>
    </HeroTextsContainer>
  )
}
export default HeroTexts
