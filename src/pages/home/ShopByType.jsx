import React from 'react'
import {motorTypes} from '../../assets/data/DataItem'
import Container from '../../components/Container';
import Testimonial from '../../components/Testimonial';
import MotorTypeCard from '../../components/cards/MotorTypeCard';



const ShopByType = () => {

  return (
    <Container>
      <div className='mt-20'>
        <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
           تسوق حسب النوع
        </h1>
        <Testimonial
          testimonials={motorTypes} 
          cardComponent={MotorTypeCard} 
          testimonialID={'type-carousel'} 
          useShadow={true}
          buttonPadding={'py-4'}
          testimonialPadding={'px-4'}/>
      </div>
    </Container>
  )
}

export default ShopByType