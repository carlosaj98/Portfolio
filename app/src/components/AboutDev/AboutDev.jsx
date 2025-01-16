import { Stack, Box, Typography } from "@mui/material"
import { IconDev } from "../../common/Icons/Icons"
import Skills from "./Skills"
import AboutDevContainer from "./Styles"
import { useTranslation } from "react-i18next"

function AboutDev() {
  const {t} = useTranslation()
  return (
    <AboutDevContainer
      flexDirection={{ md: "row", xs: "column" }}
      padding={{ md: "0", xs: "0 16px" }}
      gap={{ md: "64px", xs: "32px" }}
    >
      <Stack
        id="skills-dev-container"
        order={{ md: "0", xs: "2" }}
        justifyContent={{ md: "flex-start", xs: "center" }}
        gap={{ sm: "24px", xs: "12px" }}
      >
        {Skills.map((skill) => {
          return (
            <Stack
              key={skill.id}
              className="skill-dev"
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
      <Stack id="text-dev-container" order={{ md: "2", xs: "0" }}>
        <Stack id="dev-title-container">
          <Box width={{ sm: "var(--font-size-M)", xs: "var(--font-size-S)" }}>
            <IconDev color={"var(--primary-color-light)"} />
          </Box>
          <Typography
            id="dev-title"
            fontSize={{ sm: "var(--font-size-M)", xs: "var(--font-size-S)" }}
          >
            {t("about_section.dev_title")}
          </Typography>
        </Stack>
        <Stack className="dev-desc-container">
          <Typography
            className="dev-desc"
            fontSize={{ sm: "var(--font-size-XS)", xs: "var(--font-size-XXS)" }}
          >
          {t("about_section.dev_desc_1")}
          </Typography>
          <Typography
            className="dev-desc"
            fontSize={{ sm: "var(--font-size-XS)", xs: "var(--font-size-XXS)" }}
          >
         {t("about_section.dev_desc_2")}
          </Typography>
        </Stack>
      </Stack>
    </AboutDevContainer>
  )
}
export default AboutDev
