import { Stack, Box, Typography } from "@mui/material"
import { IconDev } from "../../common/Icons/Icons"
import Skills from "./Skills"
import AboutDevContainer from "./Styles"

function AboutDev() {
  return (
    <AboutDevContainer>
      <Stack id="skills-dev-container">
        {Skills.map((skill) => {
          return (
            <Stack key={skill.id} className="skill-dev">
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
      <Box border={"1px solid var(--gray-dark)"}></Box>
      <Stack id="text-dev-container" lineHeight={"var(--font-size-M)"}>
        <Stack>
          <Box width={"30px"}>
            <IconDev color={"var(--primary-color-light)"} />
          </Box>
          <Typography id="dev-title">As Frontend Developer:</Typography>
        </Stack>
        As a frontend developer, my main focus is turning design concepts into
        functional code. I create user interfaces using HTML, CSS, and
        JavaScript, ensuring a seamless experience across devices and browsers.
        <br />
        As a backend developer, I handle server-side tasks, managing databases,
        server logic, and overall application architecture. My focus is on
        ensuring efficient data processing and supporting frontend
        functionalities.
      </Stack>
    </AboutDevContainer>
  )
}
export default AboutDev
