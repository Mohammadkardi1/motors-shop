import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import assistanceImg from '../../assets/images/AssistanceMessage.jpg'



const carPageNavbar = [
  {
    label: 'نظرة عامة'
  },
  {
    label: 'المميزات والمساحات'
  },
  {
    label: 'التاريخ والفحص'
  },
  {
    label: 'الموصى به'
  },
]

const overviewItems = [
  {
    type: 'معدل الأميال لكل غالون',
    label: '22 في المدينة / 26 في الطرق السريعة'
  },
  {
    type: 'المحرك',
    label: '4 سلندر، بنزين، 2.5 لتر'
  },
  {
    type: 'نوع الدفع',
    label: 'دفع رباعي'
  },
  {
    type: 'ناقل الحركة',
    label: 'أوتوماتيك'
  },
  {
    type: 'اللون',
    label: 'أحمر / أسود'
  },
]








const MotorDetailPage = () => {

  const [activeSection, setActiveSection] = useState('')



  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div.section')
      const carNavbarTop = document.querySelector('.carPageNavbar').offsetTop
      const carNavbarHeight = document.querySelector('.carPageNavbar').clientHeight
      
      let currentSection = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (carNavbarTop + carNavbarHeight >= sectionTop  && carNavbarTop + carNavbarHeight < sectionTop + sectionHeight) {
          currentSection = section.id
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])




  return (
    <div className='mt-6'>
      <Container>
        
          <div className='flex items-center gap-4 text-lg font-semibold text-blue-800'>
            <Link to={'/cars/moterFilter'} className='flex items-center gap-2 p-2 hover:bg-bgLightBlue'>
              <FaLongArrowAltRight/>
              <p>رجوع</p>
            </Link>
            &bull;
            <a href="#" className='p-2 hover:bg-bgLightBlue'>
              الموصى به
            </a>
          </div>
        

          <div className='flex justify-between items-center '>
            <div className=' text-brandBlue'>
              <h1 className='text-[2.5rem] text-bold text-brandBlue font-bold mb-2'>
                  هونداي 2011
              </h1>
              <p className='text-[#2A343D] font-semibold text-[1.1rem]  '>
                30,000,000 ل.س
                <span className='mx-3 text-neutral-300'>|</span> 
                106 كيلو متر
              </p>
            </div>
            <div className="flex items-center gap-2 text-blue-500 ">
                <div className=' '>123</div>
                <div className=' relative transition cursor-pointer'>
                <AiOutlineHeart
                    size={28}
                    className="absolute -top-[2px] -right-[2px] fill-blue-500 hover:fill-red-500"/>
                <AiFillHeart
                    size={24}
                    className= 'fill-white'/>
                </div>
            </div>
          </div>

      </Container>



        <div className=' mt-6'>
          <img src={assistanceImg} alt="assistance-img" className='w-full' />
        </div>



        <div className='carPageNavbar mt-2 shadow-lg bg-white sticky top-0 z-10'>

          <Container>
            <div className=' flex items-center'>

              {carPageNavbar.map((item, index) => (
                <h1 key={index} 
                  className={`px-4 py-2 border-b-[4px] border-white hover:border-lighBlue 
                    ${activeSection === `section-${index}` ? 'border-lighBlue' : 'border-white' }`}>
                  <a href={`#section-${index}`}
                    className='px-3 py-4 block hover:bg-bgLightBlue cursor-pointer'>
                    {item.label}
                  </a>
                </h1>
              ))}
            </div>
          </Container>
        </div>



        <div id="section-0" className='section pt-[5rem] h-[600px]'>
          <div >نظرة عامة</div>
        </div>

        <div id="section-1" className='section pt-[5rem] h-[600px]'>
          <div >المميزات والمساحات</div>
        </div>

        <div id="section-2" className='section pt-[5rem] h-[600px]'>
          <div >التاريخ والفحص</div>
        </div>

        <div id="section-3" className='section pt-[5rem] h-[600px]'>
          <div >الموصى به</div>
        </div>






    </div>
  )
}

export default MotorDetailPage