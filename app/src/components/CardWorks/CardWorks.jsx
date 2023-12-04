import { Box, Button, Stack, Typography } from "@mui/material"
import CardWorksContainer from "./Style"
function CardWorks() {
  return (
    <CardWorksContainer>
      <Box width={"100%"} className="work-img-container">
        <img
          src="/works-images/work-3d-akm.jpg"
          width={"100%"}
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Stack flexGrow={"1"} className="work-content-container">
        <Typography className="work-title">Title</Typography>
        <Typography className="work-desc">
          electrónicos, quedando esencialmente igual al original. Fue
          popularizado en los 60s con la creación de las hojas "Letraset", las
          cuales contenian pasajes de Lorem Ipsum, y más recientemente con
          software de autoedición, como por ejemplo Aldus PageMaker, el cual
          incluye versiones de Lorem Ipsum.
        </Typography>
        <Stack flexDirection={"row"} gap={"24px"}>
          <Button variant="contained" fullWidth>Button</Button>
          <Button variant="contained" fullWidth>Button</Button>
        </Stack>
      </Stack>
    </CardWorksContainer>
  )
}
export default CardWorks
