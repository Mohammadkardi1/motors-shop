import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import Layout from '../components/Layout'
import MotorFilterPage from '../pages/motorFilterPage/MotorFilterPage'
import MotorDetailPage from '../pages/motorDetailPage/MotorDetailPage'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Navigate to='cars'/>}/>
            <Route path='cars' element={<Home/>}/>
            <Route path='cars/:car' element={<MotorDetailPage/>}/>
            <Route path='cars/moterFilter' element={<MotorFilterPage/>}/>


        </Route>
    </Routes>
  )
}

export default Routers