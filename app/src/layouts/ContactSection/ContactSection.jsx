import { Container, Stack, Typography } from "@mui/material"
import ContactSectionContainer from "./Style"
import { FormContact } from "../../components"
import { formFields, validationSchema } from "./form-fields"
function ContactSection() {
  return (
    <ContactSectionContainer id="contact-section">
      <Container className="container">
        <Typography variant="h3">Contact me</Typography>
        <Stack width={"100%"} paddingTop={"32px"}>
          <FormContact fields={formFields} validation={validationSchema} />
        </Stack>
      </Container>
    </ContactSectionContainer>
  )
}
export default ContactSection
