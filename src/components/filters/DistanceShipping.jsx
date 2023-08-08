import React, { useState } from 'react'
import {ShipByDistanceFilterItems, 
        MaxShippingFeeFilterItems} from '../../assets/data/DataItem'
import {AiOutlineDown} from 'react-icons/ai'



const DistanceShipping = ({filterLabel}) => {

    const [shipByDistance, setShipByDistance] = useState(null)
    const [maxShippingFee, setMaxShippingFee] = useState(null)
    const [outOfMarket, setOutOfmarket] = useState(false)
    const ShipByDistanceSelect = (event) => {
      setShipByDistance(event.target.value)
    }
    const MaxShippingFeeSelect = (event) => {
      setMaxShippingFee(event.target.value)
    }

  return (
    
    <div className=' flex flex-col gap-6 py-4'>
        <h1 className=' font-bold px-4'>
            {filterLabel}
        </h1>
        <div className='px-4'>
            <p className='mb-2'>التسوق حسب المسافة</p>
            <div className={`relative w-full py-2 border border-brandBlue rounded-sm shadow-lg
                ${shipByDistance !== null ? " outline outline-brandBlue" : ""}`}>
                <select 
                    name="ship-byDistance" 
                    defaultValue='default'
                    onChange={ShipByDistanceSelect}
                    className='h-full px-2 bg-transparent  z-20 custom-select w-full outline-none ring-transparent '>
                    {/* <option value="default" disabled>اختر ماركة</option> */}
                    {ShipByDistanceFilterItems.map((item, index) => (
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
            <p className='mb-2'>أقصى رسوم الشحن</p>
            <div className={`relative w-full py-2 border border-brandBlue rounded-sm shadow-lg
                ${maxShippingFee !== null ? " outline outline-brandBlue" : ""}`}>
                <select 
                    name="ship-byDistance" 
                    defaultValue='default'
                    onChange={MaxShippingFeeSelect}
                    className='h-full px-2 bg-transparent  z-20 custom-select w-full outline-none ring-transparent '>
                    {/* <option value="default" disabled>اختر ماركة</option> */}
                    {MaxShippingFeeFilterItems.map((item, index) => (
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
        <div className=' border-t border-b border-neutral-300 py-6 px-4'>
            <div class="inline-flex items-center">
                <div class="relative inline-block h-4 w-8 cursor-pointer rounded-full bg-neutral-500">
                <input
                    id="switch-1"
                    type="checkbox"
                    class="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
                />
                <label
                    for="switch-1"
                    class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 
                    -translate-y-2/4 cursor-pointer rounded-full  border-2 border-neutral-500  
                    bg-white shadow-md transition-all 
                    duration-300 before:absolute before:top-2/4 before:left-2/4 
                    before:block before:h-10 before:w-10 before:-translate-y-2/4 
                    before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 
                    before:opacity-0 before:transition-opacity hover:before:opacity-10 
                    peer-checked:translate-x-full peer-checked:border-blue-500
                    peer-checked:before:bg-blue-500"
                >
                    <div
                    class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5 "
                    data-ripple-dark="true"
                    ></div>
                </label>
                </div>
                <label
                    class="mt-px cursor-pointer select-none "
                    for="switch-1"
                    >
                <p className='ms-4 cursor-pointer'>خارج السوق</p>
                </label>
            </div>
            <p className='text-xs font-semibold text-neutral-500 mt-2'>
            قد يشمل ذلك السيارات التي لا يمكن شحنها وهي متوفرة فقط في متجرها الحالي
            </p>
        </div>
    </div>
  )
}

export default DistanceShipping