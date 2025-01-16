import { Stack, Box, Typography } from "@mui/material"
import { Icon3D } from "../../common/Icons/Icons"
import Skills from "./Skills"
import About3DContainer from "./Styles"
import { useTranslation } from "react-i18next"

function About3D() {
  const { t } = useTranslation()
  return (
    <About3DContainer
      flexDirection={{ md: "row", xs: "column" }}
      padding={{ md: "0", xs: "0 16px" }}
      gap={{ md: "64px", xs: "32px" }}
    >
      <Stack
        id="skills-artist-container"
        order={{ md: "2", xs: "2" }}
        justifyContent={{ md: "flex-start", xs: "center" }}
        gap={{ sm: "24px", xs: "12px" }}
      >
        {Skills.map((skill) => {
          return (
            <Stack
              key={skill.id}
              className="skill-artist"
              width={{ sm: "100px", xs: "90px" }}
              padding={{ sm: "12px", xs: "8px" }}
            >
              <Box width={"50px"} height={"50px"}>
                {skill.icon}
              </Box>
              <Box fontSize={"12px"} textAlign={"center"}>
                {skill.text}
              </Box>
            </Stack>
          )
        })}
      </Stack>
      <Box className="divider"></Box>
      <Stack id="text-artist-container" order={{ md: "0", xs: "0" }}>
        <Stack>
          <Box width={{ sm: "var(--font-size-M)", xs: "var(--font-size-S)" }}>
            <Icon3D color={"var(--secondary-color)"} />
          </Box>
          <Typography
            id="artist-title"
            fontSize={{ sm: "var(--font-size-M)", xs: "var(--font-size-S)" }}
          >
            {t("about_section.artist_title")}
          </Typography>
        </Stack>
        <Typography
          id="artist-desc"
          fontSize={{ sm: "var(--font-size-XS)", xs: "var(--font-size-XXS)" }}
        >
          {t("about_section.artist_desc_1")}
        </Typography>
      </Stack>
    </About3DContainer>
  )
}
export default About3D
