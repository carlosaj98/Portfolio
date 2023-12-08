import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

function emailService(template, actionReset) {
  emailjs.send(SERVICE_ID, TEMPLATE_ID, template, PUBLIC_KEY).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text)
      actionReset()
    },
    function (error) {
      console.log("FAILED...", error)
    }
  )
}

export default emailService
