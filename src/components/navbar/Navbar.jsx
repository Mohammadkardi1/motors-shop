import React from 'react'
import Container from '../Container'
import {HiHeart, HiUser} from 'react-icons/hi'
import {BiSolidDownArrow} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'

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
  return (
    <div className='z-10'>
    <Container>
      <div className='flex justify-between items-center py-3 space-x-2  text-white'>
        
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



      <div className='flex items-center p-2 bg-white rounded-lg text-[1.4rem]'>
        <input type="text" className='bg-transparent w-full border-0 hover:outline-none outline-none'/>
        <AiOutlineSearch/>
      </div>






    </Container>
    </div>
  )
}

export default Navbar