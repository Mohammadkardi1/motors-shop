import React from 'react'
import { useState } from 'react'
import {galleryItems} from '../assets/data/DataItem'
import {AiOutlineClose} from 'react-icons/ai'


const GalleryOverlay  = ({setOpenGalleryOverlay}) => {

  const [mainImgIndex, setMainImgIndex] = useState(0)


  return (
    <div className='fixed flex w-[100%] h-[100vh] top-0  left-0   bg-black z-40 overflow-hidden'>



        <div className='w-[500px] h-full  bg-white overflow-y-auto'>
          {
            galleryItems.map((item,index) => (
              <div key={index} class="w-full  p-1">
                <img
                    alt="error"
                    class={`block h-full w-full object-cover object-center border-[4px] cursor-pointer transition duration-300
                      ${index === mainImgIndex ? 'border-lighBlue' : 'border-white'}`}
                    src={item.imgURL}
                    onClick={() => setMainImgIndex(index)}/>
              </div>
            ))
          }
        </div>


        <div class="relative flex items-center h-full p-1">
          <img 
              src={galleryItems[mainImgIndex].imgURL} 
              alt="assistance-img" 
              className=' w-full max-h-[80vh] rounded-md object-cover object-center cursor-pointer'
              />

          <button 
            className='absolute top-4 left-4 text-white text-[1.5rem]' 
            onClick={() => setOpenGalleryOverlay(false)}>
              <AiOutlineClose/> 
          </button>

        </div>





    </div>
  )
}

export default GalleryOverlay 