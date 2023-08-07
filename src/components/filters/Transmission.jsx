import React from 'react'
import {TransmissionFilterItems} from '../../assets/data/DataItem'



const Transmission = () => {
  return (
    <div className=' flex flex-col gap-2 p-4'>
        <h1 className=' font-bold'>
        ناقل الحركة
        </h1>
        {TransmissionFilterItems.map((item, index) => (
            <div key={index} class="inline-flex items-center">
                <label for={`transmission-${index}`} class="relative flex cursor-pointer items-center rounded-full p-3">
                <input
                    id={`transmission-${index}`}
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
                    for={`transmission-${index}`}
                    >
                <p className='cursor-pointer'>{item.label}</p>
                </label>
            </div>
        ))
        }
    </div>
  )
}

export default Transmission