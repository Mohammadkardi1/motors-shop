import React from 'react'
import { Link } from 'react-router-dom'

const priceCategoriesCard = (item, index) => {
  return (
    <Link to='/cars/moterFilter' key={index} className='bg-gray-200 rounded-full border-[2px] 
        border-white hover:border-brandBlue transition-all duration-90 cursor-pointer'>
        <div className='w-[170px]'>
            <p className='p-1  text-center'>{item.label}</p>
        </div>
    </Link>
  )
}

export default priceCategoriesCard