import React from 'react'
import Sidebar from './Sidebar'
import { localCars } from '../../assets/data/DataItem'
import LocalCarsCard from '../../components/cards/LocalCarsCard'



const MotorFilterPage = () => {
  return (
    <div className='relative flex min-h-[100vh] '>
      <Sidebar/>


      <div className='sidebar-grid p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
          gap-4 overflow-y-auto'>
        {
          localCars.map((item, index) => (
            <div>
              {LocalCarsCard(item, index)}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MotorFilterPage