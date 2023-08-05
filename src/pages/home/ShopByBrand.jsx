import React from 'react'
import Container from '../../components/Container'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import {motorBrands} from '../../assets/data/DataItem'
import {AiOutlineDown} from 'react-icons/ai'
import { useState } from 'react'


const ShopByBrand = () => {

    const [motorBrand, setMotorBrand] = useState(null)



    const scrollright = () => {
        document.getElementById('brand-carousel').scrollLeft += 200
      }
    
    const scrollleft = () => {
    document.getElementById('brand-carousel').scrollLeft -= 200
    }


    const handleSelectChange = (event) => {
    setMotorBrand(event.target.value)
    }


  return (
    <Container>


        <div className='mt-20'>
            <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
                تسوق حسب الماركة
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



                <div id='brand-carousel' className=' flex gap-4 items-center justify-start scroll-smooth overflow-x-auto '>
                    
                    {motorBrands.map((item, index) => (
                        <div key={index} className='h-[220px] flex  items-end cursor-pointer'>
                            <div className='relative w-[270px] hover:top-[-11px] transition-all duration-700'>
                            <img src={item.img} alt={item.alt} className='rounded-md  w-full' />
                            
                            <div className='absolute top-3 left-3'>
                                <p className='text-brandBlue text-lg font-bold'>{item.label}</p>
                                <p className='text-neutral-500 font-light'>{item.match}</p>
                            </div>


                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='flex justify-center mt-20'>
                

                <div className='w-[600px]'>

                    <h1 className='mb-1'>الماركة</h1>
                
                    <div className='grid grid-cols-2 gap-4'>
                        
                    
                        <div className={`relative border border-brandBlue rounded-sm shadow-lg
                            ${motorBrand !== null ? " outline outline-brandBlue" : ""}`}>
                            <select 
                                name="motor-brands" 
                                defaultValue='default'
                                onChange={handleSelectChange}
                                className='h-full px-2 bg-transparent  z-20 custom-select w-full outline-none ring-transparent '>
                                <option value="default" disabled>اختر ماركة</option>
                                {motorBrands.map((item, index) => (
                                    <option key={index} value={item.label}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                            <div className='absolute z-10 top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 '>
                                <AiOutlineDown/>
                            </div>
                        </div>
                        


                        <button 
                            className='btn-yellow w-full py-2 disabled:bg-gray-400 disabled:text-neutral-900 disabled:opacity-80 ' 
                            disabled={!motorBrand }>
                            تسوق هذه الماركة
                        </button>



                    </div>

                </div>
            </div>

            
        </div>
    </Container>
  )
}

export default ShopByBrand