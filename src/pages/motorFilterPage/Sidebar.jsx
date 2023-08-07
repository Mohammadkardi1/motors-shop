import React from 'react'
import { useState } from 'react'
import {BsFilter} from 'react-icons/bs'
import {MdArrowBackIos, MdKeyboardArrowRight} from 'react-icons/md'
import {filterItems} from '../../assets/data/DataItem'
import SidebarPanelMenu from './SidebarPanelMenu.jsx'



const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [filterType, setFilterType] = useState(null)


  const filterItemHandler = (type) => {
    setIsOpen(!isOpen)
    setFilterType(type)
  }


  return (
    <div className='  sticky top-0  w-[320px] h-[100vh] border-e border-gray-300'>


      <div className='relative z-10 text-gray-600 shadow-md '>
        <div className='px-4 py-4 flex items-center gap-2 text-lg border-b border-gray-300 '>
          <BsFilter className='text-lg'/>
           فلترة & ترتيب  
        </div>
        
        <div className='flex flex-col items-center gap-2 py-2 px-4'>
          <p className='text-center'>
            أضف فلاتر لحفظ بحثك والحصول على إشعار عند وصول بيانات جديد.
          </p>

          <button className='btn-gray py-1 px-6'>
            حفظ البحث
          </button>
        </div>
      </div>


      <div className=' relative h-[75%] text-brandBlue font-semibold '>



        <div className='sidebar-filter h-full overflow-y-auto '>
          {filterItems.map((item, index) => (
            <div 
              key={index} 
              onClick={() => filterItemHandler(item.type)}
              className={`flex justify-between px-6 py-3 hover:text-lighBlue hover:bg-bgLightBlue  cursor-pointer
                  ${index !== filterItems.length - 1 ? 'border-b border-gray-300' : 'mb-12' }`}>
              <p>{item.label}</p>
              <MdArrowBackIos/>
            </div>
          ))}
        </div>



        
        
        <div className={`sidebar-filter absolute top-0 w-full h-full bg-white overflow-y-auto
         ${isOpen ? 'translate-x-0 ' : ' translate-x-full '} transition duration-700`}>
          
          <div className='flex items-center gap-1 px-6 py-3 border-b border-gray-300 hover:text-lighBlue hover:bg-bgLightBlue cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}>
            <MdKeyboardArrowRight/>
            <p>العودة إلى جميع الفلاتر</p>
          </div>


            <SidebarPanelMenu filterType={filterType}/>

        </div>
        

      </div>
    </div>
  )
}

export default Sidebar