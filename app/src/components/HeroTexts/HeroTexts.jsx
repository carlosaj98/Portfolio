/* eslint-disable react/prop-types */
import { Stack, Typography, Link } from "@mui/material"

import {
  IconLinkedin,
  IconArtstation,
  IconGithub,
  IconDownload,
} from "../../common/Icons/Icons"

import HeroTextsContainer from "./Style"

function HeroTexts({ titleIndex, currentTitle }) {
  return (
    <HeroTextsContainer
      className="text-intro-container animate__fadeInLeft"
      alignItems={{ md: "flex-start", xs: "center" }}
    >
      <Typography
        variant="h1"
        textAlign={{ md: "left", xs: "center" }}
        fontSize={{ md: "var(--font-size-XXXL)", xs: "var(--font-size-XL)" }}
      >
        Hi! 👋,
        <br />
        I`m Carlos
      </Typography>
      {titleIndex === 0 && (
        <Typography
          variant="h2"
          className="animate__fadeInLeft"
          color="var(--primary-color-light)"
          textAlign={{ md: "left", xs: "center" }}
          fontSize={{
            lg: "var(--font-size-XXL)",
            md: "var(--font-size-XL)",
            xs: "var(--font-size-L)",
          }}
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
          textAlign={{ md: "left", xs: "center" }}
          fontSize={{
            lg: "var(--font-size-XXL)",
            md: "var(--font-size-XL)",
            xs: "var(--font-size-L)",
          }}
          sx={{
            textShadow: "0 0 12px var(--secondary-color)",
          }}
        >
          {currentTitle}
        </Typography>
      )}

      <Typography
        id="hero-text-desc"
        textAlign={{ md: "left", xs: "center" }}
        fontSize={{ md: "var(--font-size-S)", xs: "var(--font-size-XXS)" }}
      >
        I create web applications and pages with
        seamless user experiences, integrating 3D design to deliver visually
        impactful solutions. If you`re looking for a versatile professional to
        bring your ideas to life, feel free to reach out.
      </Typography>
      <Stack
        id="social-media-links"
        marginTop={"32px"}
        flexDirection={"row"}
        gap={"18px"}
        alignItems={"center"}
        justifyContent={{ md: "flex-start", xs: "center" }}
      >
        <Link
          href="https://www.linkedin.com/in/carlosaj98"
          target="_blank"
          width={"30px"}
          height={"30px"}
          className="social-media-links"
        >
          <IconLinkedin color={"var(--gray)"} />
        </Link>
        <Link
          href="https://www.artstation.com/carlosaj"
          target="_blank"
          width={"30px"}
          height={"30px"}
          className="social-media-links"
        >
          <IconArtstation color={"var(--gray)"} />
        </Link>

        <Link
          href="https://github.com/carlosaj98"
          target="_blank"
          width={"30px"}
          height={"30px"}
          className="social-media-links"
        >
          <IconGithub color={"var(--gray)"} />
        </Link>
        <Link
          href="/CV_CarlosAlvarez.pdf"
          download="CV_CarlosAlvarez"
          className="cv-download"
        >
          Download CV
          <IconDownload color={"var(--gray)"} size={"16px"} />
        </Link>
      </Stack>
    </HeroTextsContainer>
  )
}
export default HeroTexts
