import { Container, Typography } from "@mui/material"
import ContactSectionContainer from "./Style"
import { FormContact } from "../../components"

function ContactSection() {
  return (
    <ContactSectionContainer id="contact-section">
      <Container className="container">
        <Typography variant="h3">Contact me</Typography>
        <FormContact />
      </Container>
    </ContactSectionContainer>
  )
}
export default ContactSection
