import React from 'react'
import { useState } from 'react'
import {NearestDistanceFilterItems} from '../../assets/data/DataItem'



const SidebarPanelMenu = ({filterType}) => {

  const [nearestDistanceFilter, setNearestDistanceFilter] = useState(null)


  const [isSelected, setIsSelected] = useState(false)

  // console.log(nearestDistance)

  return (
    <>
      

      {filterType === 'NearestDistance' && 
        <div className=' flex flex-col gap-6 p-4'>
          <h1 className=' font-bold'>
            الترتيب حسب أقرب مسافة
          </h1>
          {
            NearestDistanceFilterItems.map((item, index) => (

              <div className='flex gap-2 cursor-pointer'
                onClick={() => setNearestDistanceFilter(item.type)}>

                <div key={index}
                  className={`rounded-full w-6 h-6 border cursor-pointer  transition duration-300 
                  ${item.type ===  nearestDistanceFilter ? " border-8 border-blue-800 ring-4 ring-blue-300  " : "border-black"} `}
                  
                >
                </div>

                <p>{item.label}</p>


            </div>
            ))
          }
        </div>
      }




      {filterType === 'DistanceShipping' && 
        <div>
           DistanceShipping
        </div>
      }


      {filterType === 'Make' && 
        <div>
           Make
        </div>
      }


      {filterType === 'FuelType' && 
        <div>
           FuelType
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