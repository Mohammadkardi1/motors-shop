import React, { useState } from 'react'
import Container from '../../components/Container'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import { priceCategories } from '../../assets/data/DataItem'
import {AiOutlineDown} from 'react-icons/ai'
import { priceRangeOptions } from '../../assets/data/DataItem'

const ShopByPrice = () => {

    const [priceRange, setPriceRange] = useState({minPrice: null, maxPrice: null});
    const [minPriceIndex, setMinPriceIndex] = useState(0);
    const [maxPriceIndex, setMaxPriceIndex] = useState(priceRangeOptions.length -1);



    const scrollright = () => {
        document.getElementById('price-carousel').scrollLeft += 200
      }
    
    const scrollleft = () => {
        document.getElementById('price-carousel').scrollLeft -= 200
    }



    const handleMinPriceChange = (event) => {
        setPriceRange(prevRange => ({ ...prevRange, minPrice: event.target.value }))
        setMinPriceIndex(priceRangeOptions.findIndex(option => option.label === event.target.value))
    }

    const handleMaxPriceChange = (event) => {
        setPriceRange(prevRange => ({...prevRange, maxPrice: event.target.value}))
        setMaxPriceIndex(priceRangeOptions.findIndex(option => option.label === event.target.value))
    }

  return (
    <Container>


        <div className='mt-20'>
            <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
                تسوق حسب السعر
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




                <div id='price-carousel' className=' flex gap-4 items-center justify-start scroll-smooth overflow-x-auto '>
                    {priceCategories.map((item, index) => (
                        <div key={index} className='bg-gray-200 rounded-full border-[2px] 
                            border-white hover:border-brandBlue transition-all duration-90 cursor-pointer'>
                            <div className='w-[170px]'>

                                <p className='p-1  text-center'>{item.label}</p>



                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='flex  justify-center  mt-16'>
                

                
                <div className='w-[600px] grid grid-cols-2 gap-4'>

                    <div className='col-span-2'>
                        <h1 className='text-brandBlue text-[1rem] font-bold'>
                            اختر مجال 
                        </h1>
                    </div>
                    
                
                    <div className={`relative rounded-sm shadow-lg border border-brandBlue
                        ${priceRange.minPrice !== null ? "border outline outline-brandBlue" : ""}`}>
                        <select 
                            name="motor-brands" 
                            defaultValue='default'
                            onChange={handleMinPriceChange}
                            className='h-full px-2 bg-transparent py-2 z-20 custom-select w-full outline-none ring-transparent '>
                            <option value="default" disabled>السعر الأدنى</option>
                                {priceRangeOptions.map((item, index) => (
                                    index < maxPriceIndex &&
                                    <option key={index} value={item.label}>
                                        {item.label}
                                    </option>
                                ))}
                        </select>
                        <div className='absolute z-10 top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 '>
                            <AiOutlineDown/>
                        </div>
                    </div>




                    <div className={`relative border border-brandBlue rounded-sm shadow-lg 
                        ${priceRange.maxPrice !== null ? "border outline outline-brandBlue" : ""}`}>
                        <select 
                            name="motor-brands" 
                            defaultValue='default'
                            onChange={handleMaxPriceChange}
                            className='h-full px-2 bg-transparent py-2 z-20 custom-select w-full outline-none ring-transparent '>
                            <option value="default" disabled>السعر الأقصى</option>
                                {priceRangeOptions.map((item, index) => (
                                    index > minPriceIndex &&
                                    <option key={index} value={item.label}>
                                        {item.label}
                                    </option>
                                ))}
                        </select>
                        <div className='absolute z-10 top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 '>
                            <AiOutlineDown/>
                        </div>
                    </div>
                    

                    <div className='col-span-2 flex justify-center'>
                        <button 
                            className='btn-yellow py-1 disabled:bg-gray-400 px-6
                                disabled:text-neutral-900 disabled:opacity-80 '
                            disabled={priceRange.minPrice === null || priceRange.maxPrice === null  } >
                            بحث
                        </button>
                    </div>


                </div>
            </div>
        </div>
    </Container>
  )
}

export default ShopByPrice