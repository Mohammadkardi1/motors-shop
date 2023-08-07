import React from 'react'
import { useState } from 'react'
import {NearestDistanceFilterItems} from '../../assets/data/DataItem'
import {AiOutlineDown} from 'react-icons/ai'
import {ShipByDistanceFilterItems,
        MaxShippingFeeFilterItems,
        motorBrands,
        motorTypes,
        FuelTypeFilterItems} from '../../assets/data/DataItem'



const SidebarPanelMenu = ({filterType}) => {


  // NearestDistance
  const [nearestDistanceFilter, setNearestDistanceFilter] = useState(null)



  // DistanceShipping
  const [shipByDistance, setShipByDistance] = useState(null)
  const [maxShippingFee, setMaxShippingFee] = useState(null)
  const [outOfMarket, setOutOfmarket] = useState(false)
  const ShipByDistanceSelect = (event) => {
    setShipByDistance(event.target.value)
  }
  const MaxShippingFeeSelect = (event) => {
    setMaxShippingFee(event.target.value)
  }


  console.log('outOfMarket', outOfMarket)

  // console.log(nearestDistance)

  return (
    <>
      

      {filterType === 'NearestDistance' && 
        <div className=' flex flex-col gap-6 p-4'>
          <h1 className=' font-bold'>
            الترتيب حسب أقرب مسافة
          </h1>
          {NearestDistanceFilterItems.map((item, index) => (
              <div key={index} className='flex gap-2 cursor-pointer'
                onClick={() => setNearestDistanceFilter(item.type)}>
                <div class="inline-flex items-center">
                  <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
                    for={`distance-${index}`}
                    data-ripple-dark="true"
                  >
                    <input id={`distance-${index}`} name="type" type="radio"
                      class="before:content[''] peer relative h-5 w-5 cursor-pointer 
                      border-2 border-neutral-500 appearance-none rounded-full
                      text-blue-500 transition-all before:absolute before:top-2/4 
                      before:left-2/4 before:block before:h-12 before:w-12 
                      before:-translate-y-2/4 before:-translate-x-2/4 
                      before:rounded-full before:bg-blue-gray-500 before:opacity-0 
                      before:transition-opacity checked:border-blue-500 
                      checked:before:bg-blue-500 hover:before:opacity-10"/>
                    <div class="pointer-events-none absolute top-2/4 left-2/4 
                    -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 
                    transition-opacity peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                      </svg>
                    </div>
                  </label>
                  <label
                    class="mt-px cursor-pointer select-none "
                    for={`distance-${index}`}
                  >
                    <p>{item.label}</p>
                  </label>
                </div>

                {/* <p>{item.label}</p> */}
            </div>
            ))
          }
        </div>
      }




      {filterType === 'DistanceShipping' && 
        <div className=' flex flex-col gap-6 py-4'>
          <h1 className=' font-bold px-4'>
              المسافة & الشحن 
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
      }





      {filterType === 'Make' && 
        <div className=' flex flex-col gap-2 p-4'>
          <h1 className=' font-bold'>
            الصنع
          </h1>
          {motorBrands.map((item, index) => (
            <div key={index} class="inline-flex items-center">
              <label for={`make-${index}`} class="relative flex cursor-pointer items-center rounded-full p-3">
                <input
                  id={`make-${index}`}
                  type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none 
                   border-2 border-neutral-500 transition-all before:absolute before:top-2/4 
                   before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 
                   before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 
                   before:opacity-0 before:transition-opacity checked:border-blue-500
                  checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </label>
              <label
                    class="mt-px cursor-pointer select-none "
                    for={`make-${index}`}
                  >
                <p className='cursor-pointer'>{item.label}</p>
              </label>
            </div>
            ))
          }
        </div>
      }


      {filterType === 'BodyType' && 
        <div className=' flex flex-col gap-2 p-4'>
          <h1 className=' font-bold'>
            نوع الهيكل
          </h1>
          {motorTypes.map((item, index) => (
            <div key={index} class="inline-flex items-center">
              <label for={`body-${index}`} class="relative flex cursor-pointer items-center rounded-full p-3">
                <input
                  id={`body-${index}`}
                  type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none 
                  border-2 border-neutral-500 transition-all before:absolute before:top-2/4 
                  before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 
                  before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 
                  before:opacity-0 before:transition-opacity checked:border-blue-500
                  checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </label>
              <label
                    class="mt-px cursor-pointer select-none "
                    for={`body-${index}`}
                  >
                <p className='cursor-pointer'>{item.label}</p>
              </label>
            </div>
            ))
          }
        </div>
      }


      
      {filterType === 'FuelType' && 
        <div className=' flex flex-col gap-2 p-4'>
          <h1 className=' font-bold'>
            نوع الوقود
          </h1>
          {FuelTypeFilterItems.map((item, index) => (
            <div key={index} class="inline-flex items-center">
              <label for={`fuel-${index}`} class="relative flex cursor-pointer items-center rounded-full p-3">
                <input
                  id={`fuel-${index}`}
                  type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none 
                  border-2 border-neutral-500 transition-all before:absolute before:top-2/4 
                  before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 
                  before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 
                  before:opacity-0 before:transition-opacity checked:border-blue-500
                  checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </label>
              <label
                    class="mt-px cursor-pointer select-none "
                    for={`fuel-${index}`}
                  >
                <p className='cursor-pointer'>{item.label}</p>
              </label>
            </div>
            ))
          }
        </div>
      }
      
      {filterType === 'Year' && 
        <div>
           Year
        </div>
      }

      {filterType === 'Mileage' && 
        <div>
           Mileage
        </div>
      }


      {filterType === 'Features' && 
        <div>
           Features
        </div>
      }




      {filterType === 'Drivetrian' && 
        <div>
           Drivetrian
        </div>
      }



      {filterType === 'ExteriorColor' && 
        <div>
           ExteriorColor
        </div>
      }


      {filterType === 'InteriorColor' && 
        <div>
           InteriorColor
        </div>
      }




      {filterType === 'Transmission' && 
        <div>
           Transmission
        </div>
      }

      {filterType === 'Cylinders' && 
        <div>
           Cylinders
        </div>
      }


      {filterType === 'MPGHighway' && 
        <div>
           MPGHighway
        </div>
      }





      {filterType === 'AdvancedSearch' && 
        <div>
           AdvancedSearch
        </div>
      }


    </>
  )
}

export default SidebarPanelMenu