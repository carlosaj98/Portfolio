import { TextField } from "@mui/material"
import FormContactContainer from "./Style"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputTemplate from "./InputTemplate"

function FormContact({ fields, validation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validation) })
  const onSubmit = (data) => console.log(data)

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
      <button type="submit">Submit</button>
    </FormContactContainer>
  )
}
export default FormContact
