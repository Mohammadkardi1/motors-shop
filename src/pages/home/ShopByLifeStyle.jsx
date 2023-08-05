import React from 'react'
import Container from '../../components/Container'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import {motorLifestyle} from '../../assets/data/DataItem'


const ShopByLifeStyle = () => {



    const scrollright = () => {
        document.getElementById('lifestyle-carousel').scrollLeft += 200
      }
    
    const scrollleft = () => {
    document.getElementById('lifestyle-carousel').scrollLeft -= 200
    }


  return (
    <Container>


        <div className='mt-20'>
            <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
               التسوق حسب نمط الحياة
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



                <div id='lifestyle-carousel' className=' flex gap-4 items-center justify-start scroll-smooth overflow-x-auto '>
                    
                    {motorLifestyle.map((item, index) => (
                            <div key={index} className='h-[340px] flex  items-end cursor-pointer '>
                                <div className='relative w-[270px] transition-all duration-500 hover:top-[-11px]  rounded-md overflow-hidden'>
                                    <img src={item.img} alt={item.alt} className='  w-full' />
                                

                                    <div className='absolute w-full h-full top-0 right-0 bg-black opacity-[0.2]'></div>
                                    <div className='absolute text-white text-lg font-bold  top-5 right-5 '>
                                        {item.label}
                                    </div>


                                </div>
                            </div>
                        ))}

                </div>
            </div>



            
        </div>
    </Container>
  )
}

export default ShopByLifeStyle