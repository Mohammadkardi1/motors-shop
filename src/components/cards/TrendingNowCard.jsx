import React, { useState } from 'react'
import {BiLeftArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'


const TrendingNowCard = (item, index, hoverdCard, setHoverdCard) => {

  return (
    <Link to='/cars/moterFilter' key={index}>
        <div className='relative h-[340px] w-[280px] shadow-lg border rounded-md overflow-hidden cursor-pointer'
                onMouseEnter={() => setHoverdCard(index)}
                onMouseLeave={() => setHoverdCard(null)}>
            <img 
                src={item.img} 
                alt={item.alt} 
                className='w-full h-1/2 object-cover' />
            <div className={`px-6 pt-10 bg-neutral-50 w-full h-full absolute bottom-1/2 left-0 transition-transform duration-500 
                ${ index === hoverdCard ? ' translate-y-[50%]' : ' translate-y-full'}`}>
                    <h1 className='mb-2 text-md text-gray-500'>
                        {item.type}
                    </h1>
                    <p className='mb-4 text-lg font-bold'>{item.title}</p>
                    <p className={`transition-opacity duration-700 text-gray-500 ${index === hoverdCard ? "opacity-100 " : "opacity-0"}`}>
                        {item.brief.slice(0,200)} 
                        {item.brief.length > 200 ? '...' : ''}
                    </p>
                    <div className='flex justify-end'>
                        <BiLeftArrowAlt className='text-blue-500 text-xl font-bold cursor-pointer'/>
                    </div>
            </div>
        </div>
    </Link>
  )
}

export default TrendingNowCard