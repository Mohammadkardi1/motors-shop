import React from 'react'
import Container from './Container'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {

  
  return (
    <div className='mt-auto py-4 text-white bg-gradient-to-br from-blue-900 to-blue-600 '>
      <Container>
        <div className='flex gap-2 items-center text-[2rem] mb-6'>
          <p className=' text-[2rem] me-4 font-bold'>متجر سيارات</p>
            <BiLogoFacebookCircle className='cursor-pointer'/>
            <AiFillTwitterCircle className='cursor-pointer'/>
        </div>
        <p className='text-center mb-8 text-sm'>
          باستخدام موقع كارماكس. كوم، فإنك توافق على مراقبة وتخزين تفاعلاتك مع الموقع، بما في ذلك التفاعل مع بائع كارماكس، للاستخدام في تحسين وتخصيص خدماتنا. يرجى الاطلاع على سياسة الخصوصية لدينا للحصول على التفاصيل.
        </p>
        <p className='text-center text-sm'>
          حقوق النشر © 2023 خدمات شركة معرض السيارات  ذات المسؤولية المحدودة
        </p>
      </Container>
    </div>
  )
}

export default Footer