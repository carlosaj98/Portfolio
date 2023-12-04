import { Stack, styled } from "@mui/material";

const WorkSectionContainer = styled(Stack)({
  height:"100vh",
  background:"radial-gradient(circle at bottom left, var(--primary-color-light) -200%, black 90%)",

  "#container":{
    display:"flex",
    height:"100%",
    border:"1px solid red",
    alignItems:"center",
    flexDirection:"column",
    gap:"32px"
  },

  h3:{
    color:"white",
    fontFamily:"var(--font-title)",
    fontSize:"var(--font-size-XL)",
    marginTop:"32px",
  },

  "#btn-works-container":{
    flexDirection:"row",
    gap:"32px"
  }
})

export default WorkSectionContainer