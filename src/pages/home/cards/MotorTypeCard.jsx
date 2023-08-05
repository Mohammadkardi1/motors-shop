import React from 'react'

const MotorTypeCard = (testimonial, index) => {
  return (
    <div key={index} className=' bg-gray-200 rounded-md border-[2px]
    border-white hover:border-brandBlue  transition-all duration-90 cursor-pointer'>
        <div className='w-[120px] h-[120px] p-1 flex flex-col justify-center gap-2 '>
            <img src={testimonial.img} alt={testimonial.alt} className=' w-full' />
            <p className='text-neutral-800 text-center font-light'>{testimonial.label}</p>
        </div>
    </div>
  )
}

export default MotorTypeCard