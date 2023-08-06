import React from 'react'

const SidebarPanelMenu = ({filterType}) => {
  return (
    <>
      

      {filterType === 'NearestDistance' && 
        <div>
          Hello NearestDistance
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