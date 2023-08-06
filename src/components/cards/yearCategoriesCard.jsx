import React from 'react'

const yearCategoriesCard = (item, index) => {
  return (
    <div key={index} className='bg-gray-200 rounded-full border-[2px] 
        border-white hover:border-brandBlue transition-all duration-90 cursor-pointer'>
        <div className='w-[100px]'>
            <p className='py-1  text-center'>{item.label}</p>
        </div>
    </div>
  )
}

export default yearCategoriesCard