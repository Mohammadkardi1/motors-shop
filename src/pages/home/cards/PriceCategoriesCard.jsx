import React from 'react'

const priceCategoriesCard = (testimonial, index) => {
  return (
    <div key={index} className='bg-gray-200 rounded-full border-[2px] 
        border-white hover:border-brandBlue transition-all duration-90 cursor-pointer'>
        <div className='w-[170px]'>
            <p className='p-1  text-center'>{testimonial.label}</p>
        </div>
    </div>
  )
}

export default priceCategoriesCard