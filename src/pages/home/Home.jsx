import React from 'react'
import AssistanceMessage from './AssistanceMessage'
import Hero from './Hero'
import LocalCars from './LocalCars'
import ShopByBrand from './ShopByBrand'
import ShopByLifeStyle from './ShopByLifeStyle'
import ShopByPrice from './ShopByPrice'
import ShopByType from './ShopByType'
import ShopByYear from './ShopByYear'
import TrendingNow from './TrendingNow'


const Home = () => {
  return (
    <>
        <Hero/>
        <ShopByType/>
        <ShopByBrand/>
        <ShopByPrice/>
        <ShopByLifeStyle/>
        <LocalCars/>
        <TrendingNow/>
        <ShopByYear/>
        <AssistanceMessage/>
    </>
  )
}

export default Home