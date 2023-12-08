import { Box } from "@mui/material"
import FormContactContainer from "./Style"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputTemplate from "./InputTemplate"
import { SubmitButton } from "../../common/Buttons/Buttons"
import emailjs from "@emailjs/browser"

function FormContact({ fields, validation }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validation) })

  const SERVICE_ID= import.meta.env.VITE_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.fullname,
      from_email: data.email,
      email_subject: data.subject,
      message: data.content,
    }
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text)
          reset()
        },
        function (error) {
          console.log("FAILED...", error)
        }
      )
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
        <SubmitButton text={"Send a message"} />
      </Box>
    </FormContactContainer>
  )
}
export default FormContact
