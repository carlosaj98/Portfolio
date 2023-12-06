import { Stack, styled } from "@mui/material"

const ContactSectionContainer = styled(Stack)({
  height: "100vh",
  background:"radial-gradient(circle at center, var(--primary-color-light) -250%, var(--hero-bg-color))",

  ".container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  h3: {
    color: "white",
    fontFamily: "var(--font-title)",
    fontSize: "var(--font-size-XL)",
    marginTop: "32px",
  },
})

export default ContactSectionContainer
