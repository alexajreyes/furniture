import React from 'react'
import HeroComponent from '.././component/Hero'
import AboutComponent from '.././component/About'
import ProductComponent from '../component/Products'
import TestimonialComponent from '../component/Testimonial'
import ContactUsComponent from '.././component/Contact'

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <ProductComponent />
      <TestimonialComponent />
      <ContactUsComponent />
    </div>
  )
}
export default React.memo(Home)
