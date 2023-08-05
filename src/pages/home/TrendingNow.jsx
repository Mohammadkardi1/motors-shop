import React, { useState } from 'react'
import Container from '../../components/Container'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import {trendingNow} from '../../assets/data/DataItem'
import {BiLeftArrowAlt} from 'react-icons/bi'



const TrendingNow = () => {


    const [hoverdCard, setHoverdCard] = useState(null);

    const scrollright = () => {
        document.getElementById('trending-now-carousel').scrollLeft += 200
      }
    
    const scrollleft = () => {
    document.getElementById('trending-now-carousel').scrollLeft -= 200
    }

  return (
    <Container>


        <div className='mt-20 space-y-10'>
            <h1 className='text-center text-brandBlue text-[2rem] font-bold'>
                الرائج الأن
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



                <div id='trending-now-carousel' 
                    className=' flex gap-4 items-center justify-start scroll-smooth overflow-x-auto '>
                    
                    {trendingNow.map((item, index) => (
                        <div key={index}>
                            <div className='relative h-[340px] w-[280px] shadow-lg border rounded-md overflow-hidden'
                                      onMouseEnter={() => setHoverdCard(index)}
                                      onMouseLeave={() => setHoverdCard(null)}>
                            <img 
                                src={item.img} 
                                alt={item.alt} 
                                className='w-full h-1/2 object-cover' />
                            


                            {/* index === hoverdCard */}
                            <div className={`px-6 pt-10 bg-neutral-50 w-full h-full absolute bottom-1/2 left-0 transition-transform duration-500 
                                ${ index === hoverdCard ? ' translate-y-[50%]' : ' translate-y-full'}`}>



                                    <h1 className='mb-2 text-md text-gray-500'>
                                        {item.type}
                                    </h1>
                                    <p className='mb-4 text-lg font-bold'>{item.title}</p>
                                    


                                    <p className={`transition-opacity duration-700 text-gray-500 ${index === hoverdCard ? "opacity-100 " : "opacity-0"}`}>
                                        {item.brief.slice(0,200)} 
                                        {item.brief.length > 200 ? '...' : ''}
                                    </p>

                                    <div className='flex justify-end'>
                                        <BiLeftArrowAlt className='text-blue-500 text-xl font-bold cursor-pointer'/>
                                    </div>
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

export default TrendingNow