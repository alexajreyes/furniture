import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export default function useContactForm() {
  function limpiarFormulario() {
    document.getElementById('miForm')?.reset()
  }

  const sendEmail = event => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_k044dfq',
        'template_1wbutrf',
        event.target,
        'nWiU9d1ezIM9fSwXG'
      )
      .then(response => {
        if (response.status === 200) {
          toast.success(
            '👍 Gracias por tu mensaje me pondre en contacto lo mas pronto',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          )
          limpiarFormulario()
        }
      })
      .catch(error => {
        if (error) {
          toast.error('☹️	!Ups, algo salio mal, intentalo de nuevo', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      })
  }
  return {
    sendEmail,
    limpiarFormulario,
  }
}
