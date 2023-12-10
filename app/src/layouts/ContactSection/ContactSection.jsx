import { Container, Stack, Typography } from "@mui/material"
import ContactSectionContainer from "./Style"
import { FormContact } from "../../components"
import { formFields, validationSchema } from "./form-fields"
import useReveal from "../../hooks/useReveal"

function ContactSection() {
  const { isVisible, sectionRef } = useReveal()
  return (
    <ContactSectionContainer id="contact-section" ref={sectionRef}>
      <Container
        className="container"
        sx={{ opacity: isVisible ? "1" : "0" }}
      >
        <Typography variant="h3">Contact me</Typography>
        <Stack width={"100%"} paddingTop={"32px"}>
          <FormContact fields={formFields} validation={validationSchema} />
        </Stack>
      </Container>
    </ContactSectionContainer>
  )
}
export default ContactSection
