import React from 'react'
import Container from '../../components/Container'
import {motorLifestyle} from '../../assets/data/DataItem'
import MotorLifestyleCard from '../../components/cards/MotorLifestyleCard'
import Testimonial from '../../components/Testimonial'


const ShopByLifeStyle = () => {
  return (
    <Container>
        <div className='mt-20'>
            <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
               التسوق حسب نمط الحياة
            </h1>
            <Testimonial
              testimonials={motorLifestyle} 
              cardComponent={MotorLifestyleCard} 
              testimonialID={'lifestyle-carousel'} 
              useShadow={false}
              buttonPadding={' py-12'}
              testimonialPadding={' '}/>
        </div>
    </Container>
  )
}

export default ShopByLifeStyle