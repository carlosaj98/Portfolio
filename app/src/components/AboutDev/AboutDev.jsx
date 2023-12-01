import { Stack, Box, Typography } from "@mui/material"
import { IconDev } from "../../common/Icons/Icons"
import Skills from "./Skills"
import AboutDevContainer from "./Styles"

function AboutDev() {
  
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
        <Stack>
          <Box width={{ sm: "var(--font-size-M)", xs: "var(--font-size-S)" }}>
            <IconDev color={"var(--primary-color-light)"} />
          </Box>
          <Typography
            id="dev-title"
            fontSize={{ sm: "var(--font-size-M)", xs: "var(--font-size-S)" }}
          >
            As Frontend Developer:
          </Typography>
        </Stack>
        <Typography
          id="dev-desc"
          fontSize={{ sm: "var(--font-size-XS)", xs: "var(--font-size-XXS)" }}
        >
          As a frontend developer, my main focus is turning design concepts into
          functional code. I create user interfaces using HTML, CSS, and
          JavaScript, ensuring a seamless experience across devices and
          browsers.
          <br />
          As a backend developer, I handle server-side tasks, managing
          databases, server logic, and overall application architecture. My
          focus is on ensuring efficient data processing and supporting frontend
          functionalities.
        </Typography>
      </Stack>
    </AboutDevContainer>
  )
}
export default AboutDev
