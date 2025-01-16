import { Box } from "@mui/material"
import FormContactContainer from "./Style"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputTemplate from "./InputTemplate"
import { SubmitButton } from "../../common/Buttons/Buttons"
import emailService from "../../services/emailService"
import { useTranslation } from "react-i18next"

function FormContact({ fields, validation }) {
  const {t} = useTranslation()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validation) })

  const TO_EMAIL = import.meta.env.VITE_TO_EMAIL

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.fullname,
      from_email: data.email,
      email_subject: data.subject,
      message: data.content,
      to_email: TO_EMAIL,
    }
    emailService(templateParams, reset)
  }

  return (
    <FormContactContainer component="form" onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({ name, ...rest }) => (
        <Controller
          key={name}
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputTemplate
              field={field}
              rest={rest}
              name={name}
              errors={errors}
            />
          )}
        />
      ))}
      <Box>
        <SubmitButton text={t("contact_section.form_button")} />
      </Box>
    </FormContactContainer>
  )
}
export default FormContact
