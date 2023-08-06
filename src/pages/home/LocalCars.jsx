import React from 'react'
import Container from '../../components/Container'
import {localCars} from '../../assets/data/DataItem'
import LocalCarsCard from '../../components/cards/LocalCarsCard'
import Testimonial from '../../components/Testimonial'



const LocalCars = () => {


  return (
    <Container>
        <div className='mt-20 space-y-10'>
            <h1 className='text-center text-brandBlue text-[2rem] font-bold'>
                سيارات بالقرب منك
            </h1>
            <Testimonial
              testimonials={localCars} 
              cardComponent={LocalCarsCard} 
              testimonialID={'local-car-carousel'} 
              useShadow={false}
              buttonPadding={' py-12'}
              testimonialPadding={' '}/>
            <div className='flex justify-center'>
                <button 
                    className='btn-yellow py-1  px-6'>
                    تسوق سيارات محلية
                </button>
            </div>
        </div>
    </Container>
  )
}

export default LocalCars