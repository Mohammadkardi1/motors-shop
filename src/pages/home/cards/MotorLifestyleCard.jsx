import React from 'react'

const MotorLifestyleCard = (testimonial, index) => {
  return (
    <div key={index} className='h-[340px] flex  items-end cursor-pointer '>
        <div className='relative w-[270px] transition-all duration-500 hover:top-[-11px]  rounded-md overflow-hidden'>
            <img src={testimonial.img} alt={testimonial.alt} className='  w-full' />
            <div className='absolute w-full h-full top-0 right-0 bg-black opacity-[0.2]'></div>
            <div className='absolute text-white text-lg font-bold  top-5 right-5 '>
                {testimonial.label}
            </div>
        </div>
    </div>
  )
}

export default MotorLifestyleCard