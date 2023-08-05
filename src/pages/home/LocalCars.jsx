import React from 'react'
import Container from '../../components/Container'
import {MdArrowForwardIos} from 'react-icons/md'
import {MdArrowBackIos} from 'react-icons/md'
import {localCars} from '../../assets/data/DataItem'
// import {AiOutlineHeart} from 'react-icons/ai'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";



const LocalCars = () => {


    const scrollright = () => {
        document.getElementById('local-car-carousel').scrollLeft += 200
      }
    
    const scrollleft = () => {
    document.getElementById('local-car-carousel').scrollLeft -= 200
    }
    
  return (
    <Container>


        <div className='mt-20 space-y-10'>
            <h1 className='text-center text-brandBlue text-[2rem] font-bold'>
                سيارات بالقرب منك
            </h1>
        
            <div className='relative'>
            
                <div className='absolute z-10 h-full flex flex-col justify-center text-xl
                    text-neutral-500 hover:text-brandBlue' >
                    <button 
                        className='shadow-lg bg-white py-12 px-3 
                        rounded-e-lg '
                        onClick={scrollright}>
                    <MdArrowForwardIos/>
                    </button>
                </div>


                <div className='absolute z-10 h-full left-0 flex flex-col justify-center text-xl
                    text-neutral-500 hover:text-brandBlue'>
                    <button 
                        className='shadow-lg bg-white py-12 px-3 rounded-s-lg '
                        onClick={scrollleft}>
                    <MdArrowBackIos/>
                    </button>
                </div>



                <div id='local-car-carousel' className=' flex gap-4 items-center justify-start scroll-smooth overflow-x-auto '>
                    
                    {localCars.map((item, index) => (
                        <div key={index}>
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
                    ))}

                </div>



            </div>



            <div className='flex justify-center'>
                <button 
                    className='btn-yellow py-1  px-6'>
                    تسوق سيارات محلية
                </button>
            </div>



            
        </div>
    </Container>
  )
}

export default LocalCars