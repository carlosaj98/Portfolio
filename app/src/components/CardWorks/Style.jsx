import { Stack, styled } from "@mui/material"

const CardWorksContainer = styled(Stack)({
  maxWidth:"350px",
  borderRadius:"12px",
  overflow:"hidden",
  boxShadow:"0 5px 10px black",
  padding:"12px",
  backgroundColor:"rgba(255,255,255,0.1)",
  border:"2px solid var(--gray-dark)",

  ".work-content-container":{
    gap:"12px"
  },

  ".work-title":{
    fontFamily:"var(--font-title)",
    fontSize:"var(--font-size-M)",
    textAlign:"center",
    color:"var(--secondary-color)"
  },

  ".work-desc":{
    fontFamily:"var(--font-text)",
    fontSize:"var(--font-size-XXS)",
    textAlign:"center",
    color:"white"
  }
})

export default CardWorksContainer
