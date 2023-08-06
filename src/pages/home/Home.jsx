import React, { useState } from 'react'
import MotorTypeCard from '../../components/cards/MotorTypeCard'
import Container from '../../components/Container'
import Testimonial from '../../components/Testimonial'
import Hero from './Hero'
import assistanceImg from '../../assets/images/AssistanceMessage.jpg'
import {AiOutlineDown} from 'react-icons/ai'
import MotorBrandCard from '../../components/cards/MotorBrandCard'
import priceCategoriesCard from '../../components/cards/PriceCategoriesCard'
import MotorLifestyleCard from '../../components/cards/MotorLifestyleCard'
import LocalCarsCard from '../../components/cards/LocalCarsCard'
import TrendingNowCard from '../../components/cards/TrendingNowCard'
import yearCategoriesCard from '../../components/cards/yearCategoriesCard'
import { localCars, 
        motorBrands, 
        motorLifestyle, 
        motorTypes, 
        priceCategories, 
        priceRangeOptions, 
        trendingNow, 
        yearCategories } from '../../assets/data/DataItem'

 
const Home = () => {

  // Shop by brand 
  const [motorBrand, setMotorBrand] = useState(null)
  const handleSelectChange = (event) => {
  setMotorBrand(event.target.value)
  }



  // Shop By price 
  const [priceRange, setPriceRange] = useState({minPrice: null, maxPrice: null});
  const [minPriceIndex, setMinPriceIndex] = useState(0);
  const [maxPriceIndex, setMaxPriceIndex] = useState(priceRangeOptions.length -1);
  const handleMinPriceChange = (event) => {
      setPriceRange(prevRange => ({ ...prevRange, minPrice: event.target.value }))
      setMinPriceIndex(priceRangeOptions.findIndex(option => option.label === event.target.value))
  }
  const handleMaxPriceChange = (event) => {
      setPriceRange(prevRange => ({...prevRange, maxPrice: event.target.value}))
      setMaxPriceIndex(priceRangeOptions.findIndex(option => option.label === event.target.value))
  }


  // trending now
  const [hoverdCard, setHoverdCard] = useState(null);


  return (
    <>
      <Hero/>
      <Container>

        {/* Shop By Type */}
        <div className='mt-20'>
          <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
            تسوق حسب النوع
          </h1>
          <Testimonial
            testimonials={motorTypes} 
            cardComponent={MotorTypeCard} 
            testimonialID={'type-carousel'} 
            useShadow={true}
            buttonPadding={'py-4'}
            testimonialPadding={'px-4'}/>
        </div>


        {/* Shop By Brand */}
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


        {/* Shop By Price */}
        <div className='mt-20'>
          <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
            تسوق حسب السعر
          </h1>
          <Testimonial
            testimonials={priceCategories} 
            cardComponent={priceCategoriesCard} 
            testimonialID={'price-category-carousel'} 
            useShadow={false}
            buttonPadding={' h-full'}
            testimonialPadding={' '}/>
          <div className='flex  justify-center  mt-16'>
            <div className='w-[600px] grid grid-cols-2 gap-4'>
              <div className='col-span-2'>
                  <h1 className='text-brandBlue text-[1rem] font-bold'>
                      اختر مجال 
                  </h1>
              </div>
              <div className={`relative rounded-sm shadow-lg border border-brandBlue
                  ${priceRange.minPrice !== null ? "border outline outline-brandBlue" : ""}`}>
                  <select 
                      name="motor-brands" 
                      defaultValue='default'
                      onChange={handleMinPriceChange}
                      className='h-full px-2 bg-transparent py-2 z-20 custom-select w-full outline-none ring-transparent '>
                      <option value="default" disabled>السعر الأدنى</option>
                          {priceRangeOptions.map((item, index) => (
                              index < maxPriceIndex &&
                              <option key={index} value={item.label}>
                                  {item.label}
                              </option>
                          ))}
                  </select>
                  <div className='absolute z-10 top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 '>
                      <AiOutlineDown/>
                  </div>
              </div>
              <div className={`relative border border-brandBlue rounded-sm shadow-lg 
                  ${priceRange.maxPrice !== null ? "border outline outline-brandBlue" : ""}`}>
                  <select 
                      name="motor-brands" 
                      defaultValue='default'
                      onChange={handleMaxPriceChange}
                      className='h-full px-2 bg-transparent py-2 z-20 custom-select w-full outline-none ring-transparent '>
                      <option value="default" disabled>السعر الأقصى</option>
                          {priceRangeOptions.map((item, index) => (
                              index > minPriceIndex &&
                              <option key={index} value={item.label}>
                                  {item.label}
                              </option>
                          ))}
                  </select>
                  <div className='absolute z-10 top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 '>
                      <AiOutlineDown/>
                  </div>
              </div>
              <div className='col-span-2 flex justify-center'>
                  <button 
                  // 
                      className={`py-1 px-6 
                      ${priceRange.minPrice === null || priceRange.maxPrice === null ? 'btn-gray' : 'btn-yellow'}`}
                      disabled={priceRange.minPrice === null || priceRange.maxPrice === null} >
                      بحث
                  </button>
              </div>
            </div>
          </div>
        </div>


        {/* Shop By Price */}
        <div className='mt-20'>
          <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
              التسوق حسب نمط الحياة
          </h1> 
          <Testimonial
            testimonials={motorLifestyle} 
            cardComponent={MotorLifestyleCard} 
            testimonialID={'lifestyle-carousel'} 
            useShadow={false}
            buttonPadding={' py-12'}
            testimonialPadding={' '}/>
        </div>


        {/* Local Cars */}
        <div className='mt-20 space-y-10'>
          <h1 className='text-center text-brandBlue text-[2rem] font-bold'>
              سيارات بالقرب منك
          </h1>
          <Testimonial
            testimonials={localCars} 
            cardComponent={LocalCarsCard} 
            testimonialID={'local-car-carousel'} 
            useShadow={false}
            buttonPadding={' py-12'}
            testimonialPadding={' '}/>
          <div className='flex justify-center'>
              <button 
                  className='btn-yellow py-1  px-6'>
                  تسوق سيارات محلية
              </button>
          </div>
        </div>


        {/* Trending Now */}
        <div className='mt-20 space-y-10'>
          <h1 className='text-center text-brandBlue text-[2rem] font-bold'>
              الرائج الأن
          </h1>
          <Testimonial
            testimonials={trendingNow} 
            cardComponent={TrendingNowCard} 
            testimonialID={'trending-now-carousel'} 
            useShadow={false}
            buttonPadding={' py-12'}
            testimonialPadding={''}
            hoverdCard={hoverdCard}
            setHoverdCard={setHoverdCard}/>
        </div>


        {/* Shop By Year */}
        <div className='mt-20'>
          <h1 className=' text-brandBlue text-[2rem] font-bold mb-10'>
              تسوق حسب السنة
          </h1>
          <Testimonial
            testimonials={yearCategories} 
            cardComponent={yearCategoriesCard} 
            testimonialID={'year-carousel'} 
            useShadow={false}
            buttonPadding={'h-full'}
            testimonialPadding={''}/>
        </div>

    </Container>


    {/* Assistance Message */}
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
    </>
  )
}

export default Home