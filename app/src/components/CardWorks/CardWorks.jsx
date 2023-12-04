import { Box, Link, Stack, Typography } from "@mui/material"
import CardWorksContainer from "./Style"
function CardWorks({ image, title, description, link, linkGit, variant }) {
  return (
    <CardWorksContainer>
      <Box width={"100%"} height="200px" className="work-img-container">
        <img
          src={image}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Stack flexGrow={"1"} className="work-content-container">
        <Typography className="work-title">{title}</Typography>
        <Typography className="work-desc">{description}</Typography>
        <Stack className="work-links">
          <Link href={link} target="_blank">
            {linkGit ? "Project" : "Artstation"}
          </Link>
          {linkGit && (
            <Link href={linkGit} target="_blank">
              Github
            </Link>
          )}
        </Stack>
      </Stack>
    </CardWorksContainer>
  )
}
export default CardWorks
