import { Stack, Box, Typography, Divider } from "@mui/material"
import { Icon3D } from "../../common/Icons/Icons"
import Skills from "./Skills"
import About3DContainer from "./Styles"

function About3D() {
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
            3D Artist
          </Typography>
        </Stack>
        <Typography
          id="artist-desc"
          fontSize={{ sm: "var(--font-size-XS)", xs: "var(--font-size-XXS)" }}
        >
          As a 3D artist, I bring imagination to life through digital worlds.
          Using software like Blender, Maya, or Zbrush among others, I sculpt,
          texture, and render 3D models, creating captivating visuals. I craft
          environments, characters, and objects that form the backdrop for
          games, films, or simulations. My goal is to blend creativity with
          technical skills to produce immersive and visually stunning
          experiences.
        </Typography>
      </Stack>
    </About3DContainer>
  )
}
export default About3D
