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
        <Stack id="dev-title-container">
          <Box width={{ sm: "var(--font-size-M)", xs: "var(--font-size-S)" }}>
            <IconDev color={"var(--primary-color-light)"} />
          </Box>
          <Typography
            id="dev-title"
            fontSize={{ sm: "var(--font-size-M)", xs: "var(--font-size-S)" }}
          >
            Frontend Developer
          </Typography>
        </Stack>
        <Stack className="dev-desc-container">
          <Typography
            className="dev-desc"
            fontSize={{ sm: "var(--font-size-XS)", xs: "var(--font-size-XXS)" }}
          >
            As a Frontend Developer specializing in MERN, I focus on building
            captivating user interfaces using React.js, HTML, CSS, JavaScript
            and TypeScript. I craft responsive designs that ensure an engaging
            and seamless user experience across various devices.
          </Typography>
          <Typography
            className="dev-desc"
            fontSize={{ sm: "var(--font-size-XS)", xs: "var(--font-size-XXS)" }}
          >
            I also use Node.js and Express.js to construct the
            server-side logic, manage databases like MongoDB, and establish APIs
            for efficient data flow between the server and frontend. Ensuring
            robust security measures is also part of my role to safeguard data
            integrity and user privacy.
          </Typography>
        </Stack>
      </Stack>
    </AboutDevContainer>
  )
}
export default AboutDev
