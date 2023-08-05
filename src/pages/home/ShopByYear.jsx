import React from 'react'
import Container from '../../components/Container'
import { yearCategories } from '../../assets/data/DataItem'
import Testimonial from '../../components/Testimonial'
import yearCategoriesCard from './cards/yearCategoriesCard'



const ShopByYear = () => {

    const scrollright = () => {
        document.getElementById('year-carousel').scrollLeft += 200
      }
    
    const scrollleft = () => {
        document.getElementById('year-carousel').scrollLeft -= 200
    }

  return (
    <Container>
        <div className='mt-20'>
            <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
                تسوق حسب السنة
            </h1>
            <Testimonial
              testimonials={yearCategories} 
              cardComponent={yearCategoriesCard} 
              testimonialID={'year-carousel'} 
              useShadow={false}
              buttonPadding={'h-full'}
              testimonialPadding={''}/>
        </div>
    </Container>
  )
}

export default ShopByYear