import React from 'react'

const MotorBrandCard = (testimonial, index) => {
  return (
    <div key={index} className='h-[220px] flex  items-end cursor-pointer'>
        <div className='relative w-[270px] hover:top-[-11px] transition-all duration-700'>
            <img src={testimonial.img} alt={testimonial.alt} className='rounded-md  w-full' />
            <div className='absolute top-3 left-3'>
                <p className='text-brandBlue text-lg font-bold'>{testimonial.label}</p>
                <p className='text-neutral-500 font-light'>{testimonial.match}</p>
            </div>
        </div>
    </div>
  )
}

export default MotorBrandCard