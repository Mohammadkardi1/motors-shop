import React from 'react'
import Container from '../Container'
import {HiHeart, HiUser} from 'react-icons/hi'
import {BiSolidDownArrow} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import { useLocation } from 'react-router-dom'


const navbar_items = [
  {
    label: "متجر",
    path: '#'
  },
  {
    label: "بيع / تجارة",
    path: '#'
  },
  {
    label: "تمويل",
    path: '#'
  },
  {
    label: "المزيد",
    path: '#'
  },
]


const Navbar = () => {

  const location = useLocation()


  console.log(location.pathname)


  return (
    <div className={`${location.pathname.replace(/\/$/, '') === '/cars' ? '' : 'pb-4 border border-b shadow-md '}`}>
    <Container>
      <div className={`h-[18vh] flex flex-col justify-between  
        ${location.pathname.replace(/\/$/, '') === '/cars' ? 'text-white' : 'text-brandBlue '}`}>

        <div className='flex justify-between items-center py-3 space-x-2 '>
          
          <div className='flex items-center gap-4'>
            <p className=' text-[2rem] font-bold'>متجر سيارات</p>
            <div className='flex gap-4'>
              {navbar_items.map((item, index) => (
                <a href={item.path} key={index} className='flex items-center gap-2'>
                  <p>{item.label}</p>
                  {
                    index === navbar_items.length -1 && 
                    <BiSolidDownArrow className=' text-[0.6rem]'/>
                  }
                </a>
              ))}
            </div>
          </div>


          <div className='flex gap-4 text-[1.4rem]'>
                <HiHeart className=''/>
                <HiUser/> 
          </div>

        </div>

        <div className={`flex items-center px-2 py-3  rounded-lg text-[1.1rem]
            ${location.pathname === '/cars' ? "bg-white text-brandBlue" : "text-gray-600 bg-gray-100 border border-gray-200 shadow-sm" }`}>
          <input 
            type="text" 
            placeholder='ابحث حسب الماركة، الطراز أو الكلمة المفتاحية' 
            className='bg-transparent w-full border-0 hover:outline-none outline-none'/>
          <AiOutlineSearch className='text-[1.4rem]'/>
        </div>

      </div>

    </Container>
    </div>
  )
}

export default Navbar