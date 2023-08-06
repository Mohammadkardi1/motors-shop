import React from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LocalCarsCard = (item, index) => {
  return (
    <div key={index} >
        <div className='relative w-[280px] shadow-lg border rounded-md overflow-hidden'>
            <img 
                src={item.img} 
                alt={item.alt} 
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
                <p className='text-blue-600 text-md'>{item.label}</p>
                <div className='flex text-lg text-gray-600'>
                    <p>{item.price} ليرة</p>
                    &nbsp;&bull;&nbsp;
                    <p>{item.traveledDistance} كيلو متر</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocalCarsCard