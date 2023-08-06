import React from 'react'
import {BsFilter} from 'react-icons/bs'
import {MdArrowBackIos} from 'react-icons/md'
import {filterItems} from '../../assets/data/DataItem'



const Sidebar = () => {
  return (
    <div className='  sticky top-0  w-[320px] h-[100vh] border-e border-gray-300'>




      <div className='text-gray-600 shadow-md '>
        <div className='px-4 py-4 flex items-center gap-2 text-lg border-b border-gray-300 '>
          <BsFilter/>
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


      <div className='sidebar-filter h-[75%] overflow-y-auto   text-brandBlue font-semibold py-2'>
        {filterItems.map((item, index) => (
          <div key={index} 
            className={`flex justify-between px-6 py-3 hover:text-lighBlue cursor-pointer
                ${index !== filterItems.length - 1 ? 'border-b border-gray-300' : 'mb-12' }`}>
            <p>{item.label}</p>
            <MdArrowBackIos/>
          </div>
        ))

        }
      </div>






    </div>
  )
}

export default Sidebar