import * as yup from "yup"
import { useTranslation } from "react-i18next"
const FormFields = () => {
  const { t } = useTranslation()
  return [
    {
      name: "fullname",
      label: "Write your name",
      placeholder: t("contact_section.form_name"),
    },
    {
      name: "email",
      label: "Write your email",
      placeholder: t("contact_section.form_email"),
    },

    {
      name: "subject",
      label: "Write a subject",
      placeholder: t("contact_section.form_subject"),
    },

    {
      name: "content",
      label: "Write something",
      placeholder: t("contact_section.form_content"),
      multiline: true,
      minRows: 10,
    },
  ]
}

const validationSchema = yup.object().shape({
  fullname: yup.string().required("Can`t be empty"),
  email: yup.string().email("Must be a valid email").required("Can`t be empty"),
  subject: yup.string().required("Can`t be empty"),
  content: yup.string().required("Can`t be empty"),
})

export { FormFields, validationSchema }
