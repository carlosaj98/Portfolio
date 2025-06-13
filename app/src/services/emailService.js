import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

const notify = (translation) => {
  toast.success(translation(`contact_section.${"Message sent successfully"}`), {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "colored",
  })
}

function emailService(template, actionReset, translation) {
  emailjs.send(SERVICE_ID, TEMPLATE_ID, template, PUBLIC_KEY).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text)
      notify(translation)
      actionReset()
    },
    function (error) {
      console.log("FAILED...", error)
    }
  )
}

export default emailService
