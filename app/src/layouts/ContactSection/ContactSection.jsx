import { Container, Stack, Typography } from "@mui/material"
import ContactSectionContainer from "./Style"
import { FormContact } from "../../components"
import { FormFields, validationSchema } from "./form-fields"
import useReveal from "../../hooks/useReveal"
import { useTranslation } from "react-i18next"

function ContactSection() {
  const { isVisible, sectionRef } = useReveal()
  const fields = FormFields()
  const {t} = useTranslation()
  return (
    <ContactSectionContainer id="contact-section" ref={sectionRef}>
      <Container className="container" sx={{ opacity: isVisible ? "1" : "0" }}>
        <Typography
          variant="h3"
          fontSize={{ sm: "var(--font-size-XL)", xs: "var(--font-size-L)" }}
        >
          {t("contact_section.contact_title")}
        </Typography>
        <Stack width={"100%"} paddingTop={"32px"}>
          <FormContact fields={fields} validation={validationSchema} />
        </Stack>
      </Container>
    </ContactSectionContainer>
  )
}
export default ContactSection
