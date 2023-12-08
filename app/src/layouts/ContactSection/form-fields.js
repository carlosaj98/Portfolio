import * as yup from "yup"

const formFields = [
  {
    name: "fullname",
    label: "Write your name",
    placeholder: "Your name",
  },
  {
    name: "email",
    label: "Write your email",
    placeholder: "Your email",
  },

  {
    name: "subject",
    label: "Write a subject",
    placeholder: "Write a subject",
  },

  {
    name: "content",
    label: "Write something",
    placeholder: "Your message",
    multiline: true,
    minRows: 10,
  },
]

const validationSchema = yup.object().shape({
  fullname: yup.string().required("Can`t be empty"),
  email: yup.string().email("Must be a valid email").required("Can`t be empty"),
  subject: yup.string().required("Can`t be empty"),
  content: yup.string().required("Can`t be empty"),
})

export { formFields, validationSchema }
