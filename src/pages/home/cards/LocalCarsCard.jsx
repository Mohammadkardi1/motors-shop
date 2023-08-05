import React from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LocalCarsCard = (testimonial, index) => {
  return (
    <div key={index}>
        <div className='relative w-[280px] shadow-lg border rounded-md overflow-hidden'>
            <img 
                src={testimonial.img} 
                alt={testimonial.alt} 
                className=' h-[200px] object-cover w-full' />
            <div className='absolute top-3 left-3 '>
                <div className="relative transition cursor-pointer">
                    <AiOutlineHeart
                        size={28}
                        className="absolute -top-[2px] -right-[2px] fill-brandBlue hover:fill-red-500"/>
                    <AiFillHeart
                        size={24}
                        className= 'fill-white'/>
                </div>
            </div>
            <div className='p-3 '>
                <p className='text-blue-600 text-md'>{testimonial.label}</p>
                <div className='flex text-lg text-gray-600'>
                    <p>{testimonial.price} ليرة</p>
                    &nbsp;&bull;&nbsp;
                    <p>{testimonial.traveledDistance} كيلو متر</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocalCarsCard