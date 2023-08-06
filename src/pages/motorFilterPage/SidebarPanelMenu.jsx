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
          Hello DistanceShipping
        </div>
      }


      {filterType === 'Make' && 
        <div>
          Hello Make
        </div>
      }


      {filterType === 'FuelType' && 
        <div>
          Hello FuelType
        </div>
      }
      

      
      {filterType === 'Year' && 
        <div>
          Hello Year
        </div>
      }

      {filterType === 'Mileage' && 
        <div>
          Hello Mileage
        </div>
      }


      {filterType === 'Features' && 
        <div>
          Hello Features
        </div>
      }




      {filterType === 'Drivetrian' && 
        <div>
          Hello Drivetrian
        </div>
      }



      {filterType === 'ExteriorColor' && 
        <div>
          Hello ExteriorColor
        </div>
      }


      {filterType === 'InteriorColor' && 
        <div>
          Hello InteriorColor
        </div>
      }




      {filterType === 'Transmission' && 
        <div>
          Hello Transmission
        </div>
      }

      {filterType === 'Cylinders' && 
        <div>
          Hello Cylinders
        </div>
      }


      {filterType === 'MPGHighway' && 
        <div>
          Hello MPGHighway
        </div>
      }





      {filterType === 'AdvancedSearch' && 
        <div>
          Hello AdvancedSearch
        </div>
      }


    </>
  )
}

export default SidebarPanelMenu