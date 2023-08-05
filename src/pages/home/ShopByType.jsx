import React from 'react'
import {motorTypes} from '../../assets/data/DataItem'
import Container from '../../components/Container';
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'




const ShopByType = () => {

  const scrollright = () => {
    document.getElementById('type-carousel').scrollLeft += 200
  }

  const scrollleft = () => {
    document.getElementById('type-carousel').scrollLeft -= 200
  }


  return (
    <Container>
      <div className='mt-20'>
        <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
           تسوق حسب النوع
        </h1>
      
        <div className='relative'>
          
          <div 
            className='absolute h-full flex flex-col justify-center text-xl
            text-neutral-500 hover:text-brandBlue' 
            style={{background: "linear-gradient(90deg,rgba(0,0,0,.000024) 0,rgba(0,0,0,.24))"}}>
            <button 
              className='shadow-lg bg-white py-4 px-3 rounded-e-lg '
              onClick={scrollright}>
              <MdArrowForwardIos/>
            </button>
          </div>



          <div 
            className='absolute h-full left-0 flex flex-col justify-center text-xl
            text-neutral-500 hover:text-brandBlue' 
            style={{background: "linear-gradient(270deg,rgba(0,0,0,.000024) 0,rgba(0,0,0,.24))"}}>
            <button 
              className='shadow-lg bg-white py-4 px-3 rounded-s-lg '
              onClick={scrollleft}>
              <MdArrowBackIos/>
            </button>
          </div>



          <div id='type-carousel' className='px-4 flex gap-4 items-center justify-start scroll-smooth overflow-x-auto '>
            

                {motorTypes.map((item, index) => (
                  <div key={index} className=' bg-gray-200 rounded-md border-[2px]
                     border-white hover:border-brandBlue  transition-all duration-90 cursor-pointer'>
                    <div className='w-[120px] h-[120px] p-1 flex flex-col justify-center gap-2 '>
                      <img src={item.img} alt={item.alt} className=' w-full' />
                      <p className='text-neutral-800 text-center font-light'>{item.label}</p>
                    </div>
                  </div>
                ))}


                
          </div>
        </div>
      </div>
      </Container>
  )
}

export default ShopByType