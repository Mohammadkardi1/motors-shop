import React from 'react'
import Container from '../../components/Container'
import {motorBrands} from '../../assets/data/DataItem'
import {AiOutlineDown} from 'react-icons/ai'
import { useState } from 'react'
import Testimonial from '../../components/Testimonial'
import MotorBrandCard from '../../components/cards/MotorBrandCard'


const ShopByBrand = () => {

    const [motorBrand, setMotorBrand] = useState(null)

    const handleSelectChange = (event) => {
    setMotorBrand(event.target.value)
    }


  return (
    <Container>
        <div className='mt-20'>
            <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
                تسوق حسب الماركة
            </h1>
            <Testimonial
              testimonials={motorBrands} 
              cardComponent={MotorBrandCard} 
              testimonialID={'brand-carousel'} 
              useShadow={false}
              buttonPadding={'py-12'}
              testimonialPadding={''}/>
            <div className='flex justify-center mt-20'>
                <div className='w-[600px]'>
                    <h1 className='mb-1'>الماركة</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className={`relative border border-brandBlue rounded-sm shadow-lg
                            ${motorBrand !== null ? " outline outline-brandBlue" : ""}`}>
                            <select 
                                name="motor-brands" 
                                defaultValue='default'
                                onChange={handleSelectChange}
                                className='h-full px-2 bg-transparent  z-20 custom-select w-full outline-none ring-transparent '>
                                <option value="default" disabled>اختر ماركة</option>
                                {motorBrands.map((item, index) => (
                                    <option key={index} value={item.label}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                            <div className='absolute z-10 top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 '>
                                <AiOutlineDown/>
                            </div>
                        </div>
                        <button
                            className={`w-full py-2 ${!motorBrand ? 'btn-gray' : 'btn-yellow'}`}
                            disabled={!motorBrand }>
                            تسوق هذه الماركة
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ShopByBrand