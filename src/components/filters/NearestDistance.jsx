import React, { useState } from 'react'
import {NearestDistanceFilterItems} from '../../assets/data/DataItem'


const NearestDistance = () => {

const [nearestDistanceFilter, setNearestDistanceFilter] = useState(null)


  return (
    <div className=' flex flex-col gap-2 p-4'>
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

        </div>
        ))
        }
    </div>
  )
}

export default NearestDistance