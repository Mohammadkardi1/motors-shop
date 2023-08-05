import React, { useState } from 'react'
import Container from '../../components/Container'
import {trendingNow} from '../../assets/data/DataItem'
import Testimonial from '../../components/Testimonial'
import trendingNowCard from './cards/TrendingNowCard'


const TrendingNow = () => {
    const [hoverdCard, setHoverdCard] = useState(null);

  return (
    <Container>
        <div className='mt-20 space-y-10'>
            <h1 className='text-center text-brandBlue text-[2rem] font-bold'>
                الرائج الأن
            </h1>
            <Testimonial
              testimonials={trendingNow} 
              cardComponent={trendingNowCard} 
              testimonialID={'trending-now-carousel'} 
              useShadow={false}
              buttonPadding={' py-12'}
              testimonialPadding={''}
              hoverdCard={hoverdCard}
              setHoverdCard={setHoverdCard}/>
        </div>
    </Container>
  )
}

export default TrendingNow