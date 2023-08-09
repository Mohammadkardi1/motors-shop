import React from 'react'
import assistanceImg from '../assets/images/AssistanceMessage.jpg'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import {galleryItems} from '../assets/data/DataItem'
import { useState } from 'react'
import GalleryOverlay from './GalleryOverlay '


const Gallery = ({setOpenGalleryOverlay}) => {



    const scrollright = () => {
        document.getElementById('gallery').scrollLeft += 200
      }
    
    const scrollleft = () => {
    document.getElementById('gallery').scrollLeft -= 200
    }


//   if (openGalleryOverlay) {
//     return <GalleryOverlay setOpenGalleryOverlay={setOpenGalleryOverlay}/>
// }


  return (
    <div className='relative'>

        <div className='absolute h-full z-30 flex flex-col justify-center text-xl
            text-neutral-500 hover:text-brandBlue'>
            <button 
              className="shadow-lg bg-white py-12 px-3 rounded-e-lg"
              onClick={scrollright}>
              <MdArrowForwardIos/>
            </button>
        </div>

        <div className='absolute h-full left-0 z-30 flex flex-col justify-center text-xl
            text-neutral-500 hover:text-brandBlue'>
            <button 
              className="shadow-lg bg-white py-12 px-3 rounded-s-lg"
              onClick={scrollleft}>
              <MdArrowBackIos/>
            </button>
        </div>

        <div id={'gallery'} className="testimonial flex gap-1 items-center justify-start scroll-smooth overflow-x-auto">
            <div className='h-[330px] flex '>
                <div class="w-[620px] me-1 h-full p-1">
                    <img 
                        src={galleryItems[0].imgURL} 
                        alt="assistance-img" 
                        className='h-full w-full rounded-md object-cover object-center cursor-pointer'
                        onClick={() => setOpenGalleryOverlay(true)} />

                </div>
                <div class="flex flex-col flex-wrap  w-[310px] ">
                    {galleryItems.map((item, index) => (
                        index !== 0 &&
                        <div key={index} class=" w-full h-1/2 p-1">
                            <img
                                alt="error"
                                class="block h-full w-full  rounded-md object-cover object-center cursor-pointer"
                                src={item.imgURL}
                                onClick={() => setOpenGalleryOverlay(true)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery