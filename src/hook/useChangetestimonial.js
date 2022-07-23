import { useState } from 'react'
import {
  BaseTestimonial,
  DefaultTestimonial,
  Testimonials,
} from 'utils/Testimonial'

export default function useChangetestimonial() {
  const [testimonial, setTestimonial] = useState(DefaultTestimonial)
  //Iniciamos el estado de la lista  de testimonios
  const [listTestimonial, setLisTestimonial] = useState(Testimonials)

  //funciones que permite cambiar testimonial
  const handleNextTestimonial = () => {
    //iniciamos un valor por defecto
    const DEFAULT_VALUE = 1

    //asignamos una variable al valor del id del testimonial
    let currentValue = testimonial.id
    //incrementamos el valor del id del testimonial
    let nexTestimonial = currentValue + 1
    //validacion que se encarga de evaluar la longitud del array del testimonial
    const valueNextTestimonial =
      nexTestimonial > BaseTestimonial.length ? DEFAULT_VALUE : nexTestimonial

    //procedemos a filtrar el testimonial de acorde al que se selecciono
    const testimonials = BaseTestimonial.filter(
      item => item.id !== valueNextTestimonial
    )
    //buscamos el testimonial que coicida con el valor incrementado
    const defaultTestimonial = BaseTestimonial.find(
      item => item.id === valueNextTestimonial
    )
    //actualizamos estados
    setTestimonial(defaultTestimonial)

    setLisTestimonial(testimonials)
  }

  const handlePrevTestimonial = () => {
    let currentValue = testimonial.id

    let nexTestimonial = currentValue - 1

    if (nexTestimonial < 1) {
      nexTestimonial = 4
    }

    const Testimonials = BaseTestimonial.filter(
      item => item.id !== nexTestimonial
    )
    const defaultTestimonial = BaseTestimonial.find(
      item => item.id === nexTestimonial
    )

    setLisTestimonial(Testimonials)
    setTestimonial(defaultTestimonial)
  }

  return {
    listTestimonial,
    testimonial,
    handleNextTestimonial,
    handlePrevTestimonial,
  }
}
