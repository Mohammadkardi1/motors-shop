import React from 'react'
import { Link } from 'react-router-dom'

const MotorTypeCard = (item, index) => {
  return (
    <Link to='/cars/car' key={index} className=' bg-gray-200 rounded-md border-[2px]
    border-white hover:border-brandBlue  transition-all duration-90 cursor-pointer'>
        <div className='w-[120px] h-[120px] p-1 flex flex-col justify-center gap-2 '>
            <img src={item.img} alt={item.alt} className=' w-full' />
            <p className='text-neutral-800 text-center font-light'>{item.label}</p>
        </div>
    </Link>
  )
}

export default MotorTypeCard