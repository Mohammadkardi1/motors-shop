import React from 'react'
import Container from '../../components/Container'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import { yearCategories } from '../../assets/data/DataItem'



const ShopByYear = () => {

    const scrollright = () => {
        document.getElementById('year-carousel').scrollLeft += 200
      }
    
    const scrollleft = () => {
        document.getElementById('year-carousel').scrollLeft -= 200
    }

  return (
    <Container>


        <div className='mt-20'>
            <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
                تسوق حسب السنة
            </h1>

            <div className='relative'>
            
                <div className='absolute z-10 h-full  text-xl
                    text-neutral-500 hover:text-brandBlue' >
                    <button 
                        className='shadow-lg bg-white h-full px-3 '
                        onClick={scrollright}>
                    <MdArrowForwardIos/>
                    </button>
                </div>


                <div className='absolute z-10 h-full left-0 text-xl
                    text-neutral-500 hover:text-brandBlue'>
                    <button 
                        className='shadow-lg bg-white h-full px-3 '
                        onClick={scrollleft}>
                    <MdArrowBackIos/>
                    </button>
                </div>




                <div id='year-carousel' className=' flex gap-4 items-center justify-start scroll-smooth overflow-x-auto '>
                    {yearCategories.map((item, index) => (
                        <div key={index} className='bg-gray-200 rounded-full border-[2px] 
                            border-white hover:border-brandBlue transition-all duration-90 cursor-pointer'>
                            <div className='w-[100px]'>

                                <p className='py-1  text-center'>{item.label}</p>



                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    </Container>
  )
}

export default ShopByYear