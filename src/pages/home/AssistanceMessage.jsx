import React from 'react'
import assistanceImg from '../../assets/images/AssistanceMessage.jpg'
import Container from '../../components/Container'


const AssistanceMessage = () => {

  return (
    <div className='mt-20'>
        <img src={assistanceImg} alt="assistance-img" className='w-full' />
        <div className=' bg-[#FFE133] py-4'>
            <Container>
                <div className='flex justify-between'>
                    <h1 className=' text-3xl font-bold text-brandBlue'>هل تحتاج إلى مساعدة للبدء؟</h1>
                    <button className=' btn-yellow px-4 py-2 border border-brandBlue'>البحث في جميع السيارات</button>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default AssistanceMessage