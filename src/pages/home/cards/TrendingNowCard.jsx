import React, { useState } from 'react'
import {BiLeftArrowAlt} from 'react-icons/bi'



const TrendingNowCard = (testimonial, index, hoverdCard, setHoverdCard) => {

  return (
    <div key={index}>
        <div className='relative h-[340px] w-[280px] shadow-lg border rounded-md overflow-hidden cursor-pointer'
                onMouseEnter={() => setHoverdCard(index)}
                onMouseLeave={() => setHoverdCard(null)}>
            <img 
                src={testimonial.img} 
                alt={testimonial.alt} 
                className='w-full h-1/2 object-cover' />
            <div className={`px-6 pt-10 bg-neutral-50 w-full h-full absolute bottom-1/2 left-0 transition-transform duration-500 
                ${ index === hoverdCard ? ' translate-y-[50%]' : ' translate-y-full'}`}>
                    <h1 className='mb-2 text-md text-gray-500'>
                        {testimonial.type}
                    </h1>
                    <p className='mb-4 text-lg font-bold'>{testimonial.title}</p>
                    <p className={`transition-opacity duration-700 text-gray-500 ${index === hoverdCard ? "opacity-100 " : "opacity-0"}`}>
                        {testimonial.brief.slice(0,200)} 
                        {testimonial.brief.length > 200 ? '...' : ''}
                    </p>
                    <div className='flex justify-end'>
                        <BiLeftArrowAlt className='text-blue-500 text-xl font-bold cursor-pointer'/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default TrendingNowCard