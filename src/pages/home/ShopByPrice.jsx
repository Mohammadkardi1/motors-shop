import React, { useState } from 'react'
import Container from '../../components/Container'
import { priceCategories } from '../../assets/data/DataItem'
import {AiOutlineDown} from 'react-icons/ai'
import { priceRangeOptions } from '../../assets/data/DataItem'
import Testimonial from '../../components/Testimonial'
import PriceCategoriesCard from '../../components/cards/PriceCategoriesCard'

const ShopByPrice = () => {

    const [priceRange, setPriceRange] = useState({minPrice: null, maxPrice: null});
    const [minPriceIndex, setMinPriceIndex] = useState(0);
    const [maxPriceIndex, setMaxPriceIndex] = useState(priceRangeOptions.length -1);

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
            <Testimonial
              testimonials={priceCategories} 
              cardComponent={PriceCategoriesCard} 
              testimonialID={'price-category-carousel'} 
              useShadow={false}
              buttonPadding={' h-full'}
              testimonialPadding={' '}/>
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
                        // 
                            className={`py-1 px-6 
                            ${priceRange.minPrice === null || priceRange.maxPrice === null ? 'btn-gray' : 'btn-yellow'}`}
                            disabled={priceRange.minPrice === null || priceRange.maxPrice === null} >
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