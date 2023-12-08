import { Stack, styled } from "@mui/material";

const FormContactContainer = styled(Stack)({
  width:"100%",
  gap:"24px",
  alignItems:"center",

  ".custom-error-text":{
    fontFamily:"var(--font-text)",
    fontWeight:"500",
    fontSize:"var(--font-size-XXS)",
  },

})

export default FormContactContainer