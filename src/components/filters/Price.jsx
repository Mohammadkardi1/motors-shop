import React, { useState } from 'react'
import {priceRangeOptions} from '../../assets/data/DataItem'
import {AiOutlineDown} from 'react-icons/ai'




const Price = () => {

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
    <div className=' flex flex-col gap-6 p-4'>
        <h1 className=' font-bold'>
        السعر  
        </h1>
        <div className='px-4'>
            <div className={`relative w-full py-2 border border-brandBlue rounded-sm shadow-lg
                ${priceRange.minPrice !== null ? " outline outline-brandBlue" : ""}`}>
                <select 
                    name="ship-byDistance" 
                    defaultValue='default'
                    onChange={handleMinPriceChange}
                    className='h-full px-2 bg-transparent  z-20 custom-select w-full outline-none ring-transparent '>
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
        </div>
        <div className='px-4'>
            <div className={`relative w-full py-2 border border-brandBlue rounded-sm shadow-lg
                ${priceRange.maxPrice !== null ? " outline outline-brandBlue" : ""}`}>
                <select 
                    name="ship-byDistance" 
                    defaultValue='default'
                    onChange={handleMaxPriceChange}
                    className='h-full px-2 bg-transparent  z-20 custom-select w-full outline-none ring-transparent '>
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
        </div>
    </div>
  )
}

export default Price