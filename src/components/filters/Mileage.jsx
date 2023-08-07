import React, { useState } from 'react'
import {MileageFilterItems} from '../../assets/data/DataItem'
import {AiOutlineDown} from 'react-icons/ai'



const Mileage = () => {

    const [mileage, setMileage] = useState(null)


  return (
    <div className=' flex flex-col gap-2 p-4'>
        <h1 className=' font-bold'>
        عدد الأميال 
        </h1>
        <div className='px-4'>
            <p className='mb-2'>من</p>
            <div className={`relative w-full py-2 border border-brandBlue rounded-sm shadow-lg
                ${mileage !== null ? " outline outline-brandBlue" : ""}`}>
                <select 
                    name="ship-byDistance" 
                    defaultValue='default'
                    onChange={(e) => setMileage(e.target.value)}
                    className='h-full px-2 bg-transparent  z-20 custom-select w-full outline-none ring-transparent '>
                    {/* <option value="default" disabled>اختر ماركة</option> */}
                    {MileageFilterItems.map((item, index) => (
                        <option key={index} value={item.label}>
                            {item.label}
                        </option>
                    ))}
                </select>
                <div className='absolute z-10 top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 '>
                    <AiOutlineDown/>
                </div>
            </div>
            <p className='mt-2'>أو أقل</p>
        </div>
    </div>
  )
}

export default Mileage