import { Stack, styled } from "@mui/material"

const AboutDevContainer = styled(Stack)({
  marginTop:"32px",
  flexDirection: "row",
  justifyContent:"space-between",
  gap: "64px",

  "#skills-dev-container": {
    width:"100%",
    flexDirection: "row",
    gap: "24px",
    flexWrap: "wrap",
  },

  ".skill-dev": {
    alignItems: "center",
    gap: "6px",
    background:
      "linear-gradient(var(--primary-color),var(--primary-color-dark))",
    boxShadow: "0 10px 15px black",
    width: "100px",
    padding:"12px",
    borderRadius: "12px",
    border: "2px solid var(--primary-color)",
  },

  "#text-dev-container": {
    width:"100%",
    gap:"24px",
  },

  "#text-dev-container > div": {
    flexDirection:"row",
    gap:"16px",
  },

  "#dev-title":{
    fontFamily:"var(--font-title)",
    fontSize:"var(--font-size-M)",
    color:"var(--primary-color-light)",

  }
})

export default AboutDevContainer
