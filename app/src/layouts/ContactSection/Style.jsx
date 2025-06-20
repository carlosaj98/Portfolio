import { Stack, styled } from "@mui/material"

const ContactSectionContainer = styled(Stack)({
  background:"radial-gradient(circle at center, var(--primary-color-light) -200%, var(--hero-bg-color))",

  ".container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom:"128px",
    transition: "opacity 0.5s ease-in-out",
  },

  h3: {
    color: "var(--headers-color)",
    fontFamily: "var(--font-title)",
    marginTop: "32px",
  },
})

export default ContactSectionContainer
