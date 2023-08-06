import React from 'react'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'


 
const Testimonial = ({ testimonials, 
            cardComponent, 
            testimonialID, 
            useShadow, 
            buttonPadding, 
            testimonialPadding , 
            hoverdCard, 
            setHoverdCard}) => {


    const scrollright = () => {
        document.getElementById(testimonialID).scrollLeft += 200
      }
    
    const scrollleft = () => {
    document.getElementById(testimonialID).scrollLeft -= 200
    }


  return (
    <div className='relative'>
        <div className='absolute h-full z-30 flex flex-col justify-center text-xl
            text-neutral-500 hover:text-brandBlue' 
            style={{background:`${useShadow && "linear-gradient(90deg,rgba(0,0,0,.000024) 0,rgba(0,0,0,.24))"}`   }}>
            <button 
              className={`shadow-lg bg-white ${buttonPadding} px-3 rounded-e-lg `}
              onClick={scrollright}>
              <MdArrowForwardIos/>
            </button>
        </div>
        <div className='absolute h-full left-0 z-30 flex flex-col justify-center text-xl
            text-neutral-500 hover:text-brandBlue' 
            style={{background: `${useShadow && "linear-gradient(270deg,rgba(0,0,0,.000024) 0,rgba(0,0,0,.24))"}`}}>
            <button 
              className={`${buttonPadding} shadow-lg bg-white px-3 rounded-s-lg `}
              onClick={scrollleft}>
              <MdArrowBackIos/>
            </button>
        </div>
        <div id={testimonialID} className={`testimonial ${testimonialPadding} flex gap-4 items-center justify-start scroll-smooth overflow-x-auto `}>
            {testimonials.map((item, index) => (
              <>
                {cardComponent(item, index, hoverdCard, setHoverdCard)}
              </>
            ))}
        </div>
    </div>
  )
}

export default Testimonial