import Esther from '../assets/images/Testimonial/pexels-mentatdgt-1024311-removebg-preview.png'
import AnyshaGrimes from '../assets/images/Testimonial/pexels-anastasiya-gepp-1462637-removebg-preview.png'
import AndreCohan from '../assets/images/Testimonial/pexels-andrea-piacquadio-774909-removebg-preview.png'
import JefreyMaxwell from '../assets/images/Testimonial/pexels-jeffrey-reed-769745-removebg-preview.png'

export const BaseTestimonial = [
  {
    id: 1,
    Name: 'Esther Arauz',
    Rating: 4,
    Image: Esther,
    Date: '15 Feb 2021',
  },
  {
    id: 2,
    Name: 'Anysha Grime',
    Rating: 5,
    Image: AnyshaGrimes,
    Date: '25 Jun 2021',
  },
  {
    id: 3,
    Name: 'Andre Cohan ',
    Rating: 5,
    Image: AndreCohan,
    Date: '12 Mar 2022',
  },
  {
    id: 4,
    Name: 'Jefrey Maxwell ',
    Rating: 4,
    Image: JefreyMaxwell,
    Date: '11 Jul 2020',
  },
]

export const DefaultTestimonial = BaseTestimonial.find(item => item.id === 1)
export const Testimonials = BaseTestimonial.filter(item => item.id !== 1)
