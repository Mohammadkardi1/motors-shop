import React from 'react'
import assistanceImg from '../assets/images/AssistanceMessage.jpg'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import {galleryItems} from '../assets/data/DataItem'


const Gallery = () => {


    const scrollright = () => {
        document.getElementById('gallery').scrollLeft += 200
      }
    
    const scrollleft = () => {
    document.getElementById('gallery').scrollLeft -= 200
    }


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
                <div className=' grid grid-rows-2'>


                    <div class="  row-span-2">
                        <img 
                            src={assistanceImg} 
                            alt="assistance-img" 
                            className='h-full w-full rounded-md object-cover object-center' />

                    </div>

                    <div class="">
                        <img
                            alt="assistance-img"
                            class="block h-full w-full  rounded-md object-cover object-center"
                            src={assistanceImg} />
                    </div>


                {/* <div class="flex flex-col flex-wrap w-1/4 h-full">

                    {galleryItems.map((item, index) => (
                        <div class=" w-full">
                            <img
                                alt="assistance-img"
                                class="block h-full w-full  rounded-md object-cover object-center"
                                src={assistanceImg} />
                        </div>
                    ))}
                </div> */}


                </div>



                
            {/* {galleryItems.map((item, index) => (
                // <div className="relative w-[280px] shadow-lg border rounded-md overflow-hidden">
                    <img 
                        src={assistanceImg} 
                        alt="assistance-img" 
                        className='w-[280px] h-[200px] object-cover' />
                // </div>
            ))} */}
        </div>
    </div>
  )
}

export default Gallery