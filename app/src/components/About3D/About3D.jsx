import { Stack, Box, Typography, Divider } from "@mui/material"
import { Icon3D } from "../../common/Icons/Icons"
import Skills from "./Skills"
import About3DContainer from "./Styles"

function About3D() {
  return (
    <About3DContainer>
      <Stack id="text-dev-container" lineHeight={"var(--font-size-M)"}>
        <Stack>
          <Box width={"30px"}>
            <Icon3D color={"var(--secondary-color)"} />
          </Box>
          <Typography id="dev-title">As 3D Artist:</Typography>
        </Stack>
        As a 3D artist, I bring imagination to life through digital worlds.
        Using software like Blender or Maya, I sculpt, texture, and animate 3D
        models, creating captivating visuals. I craft environments, characters,
        and objects that form the backdrop for games, films, or simulations. My
        goal is to blend creativity with technical skills to produce immersive
        and visually stunning experiences.
      </Stack>
      <Box border={"1px solid var(--gray-dark)"}></Box>
      <Stack id="skills-dev-container">
        {Skills.map((skill) => {
          return (
            <Stack
              key={skill.id}
              className="skill-dev"
              border={"1px solid red"}
            >
              <Box width={"50px"} height={"50px"}>
                {skill.icon}
              </Box>
              <Box fontSize={"12px"} textAlign={"center"} color="black">
                {skill.text}
              </Box>
            </Stack>
          )
        })}
      </Stack>
    </About3DContainer>
  )
}
export default About3D
