import React from 'react'
import Container from '../../components/Container'
import Navbar from '../../components/navbar/Navbar'


const Hero = () => {
  return (
    <div className='hero w-full h-[70vh] flex flex-col gap-16'>
    <Navbar/>

    <Container>
      <div className='flex justify-center relative z-10'>
      <div className='py-8 space-y-8 text-center gap-6 w-[500px] '>
          <p className='text-white text-[2rem]'>
              مع أكثر من 55,000 سيارة، سيارتك التالية على بعد عدد قليل من النقرات
          </p>

          <button className='btn-yellow px-4 py-2'>
              تسوق جميع السيارات
          </button>
      </div>
      </div>
    </Container>
    

    </div>
  )
}

export default Hero