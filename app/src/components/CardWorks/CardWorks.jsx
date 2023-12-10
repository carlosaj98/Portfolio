import { Box, Link, Stack, Typography } from "@mui/material"
import CardWorksContainer from "./Style"
import { IconArtstation, IconGithub, IconWeb } from "../../common/Icons/Icons"
function CardWorks({ image, title, description, link, linkGit }) {
  let variant = ""
  linkGit ? (variant = "variant-dev") : (variant = "variant-artist")

  return (
    <CardWorksContainer sx={{ maxWidth: { md: "350px", xs: "300px" }, padding:{sm:"24px", xs:"12px"} }}>
      <Box
        width={"100%"}
        height={{ sm: "200px", xs: "150px" }}
        className="work-img-container"
      >
        <img src={image} alt={title}/>
      </Box>
      <Stack flexGrow={"1"} className="work-content-container">
        <Typography className={`work-title ${variant}`}>{title}</Typography>
        <Typography className="work-desc">{description}</Typography>
        <Stack className="work-links" alignItems={"flex-end"}>
          <Link href={link} target="_blank" className={variant}>
            {linkGit ? (
              <IconWeb color={"var(--gray)"} />
            ) : (
              <IconArtstation color={"var(--gray)"} />
            )}
          </Link>
          {linkGit && (
            <Link href={linkGit} target="_blank" className={variant}>
              <IconGithub color={"var(--gray)"} />
            </Link>
          )}
        </Stack>
      </Stack>
    </CardWorksContainer>
  )
}
export default CardWorks
