import React, { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import {yearCategories} from '../../assets/data/DataItem'




const Year = ({filterLabel}) => {

    const [minYear, setMinYear] = useState(null)
    const [maxYear, setMaxYear] = useState(null)
  

  return (
    <div className=' flex flex-col gap-2 p-4'>
        <h1 className=' font-bold'>
            {filterLabel} 
        </h1>
        <div className='px-4'>
            <p className='mb-2'>من</p>
            <div className={`relative w-full py-2 border border-brandBlue rounded-sm shadow-lg
                ${minYear !== null ? " outline outline-brandBlue" : ""}`}>
                <select 
                    name="ship-byDistance" 
                    defaultValue='default'
                    onChange={(e) => setMinYear(e.target.value)}
                    className='h-full px-2 bg-transparent  z-20 custom-select w-full outline-none ring-transparent '>
                    {/* <option value="default" disabled>اختر ماركة</option> */}
                    {yearCategories.map((item, index) => (
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
            <p className='mb-2'>إلى</p>
            <div className={`relative w-full py-2 border border-brandBlue rounded-sm shadow-lg
                ${maxYear !== null ? " outline outline-brandBlue" : ""}`}>
                <select 
                    name="ship-byDistance" 
                    defaultValue='default'
                    onChange={(e) => setMaxYear(e.target.value)}
                    className='h-full px-2 bg-transparent  z-20 custom-select w-full outline-none ring-transparent '>
                    {/* <option value="default" disabled>اختر ماركة</option> */}
                    {yearCategories.map((item, index) => (
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

export default Year