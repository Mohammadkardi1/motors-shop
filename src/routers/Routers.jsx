import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import Layout from '../components/Layout'
import MotorFilterPage from '../pages/motorFilterPage/MotorFilterPage'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Navigate to='cars'/>}/>
            <Route path='cars' element={<Home/>}/>
            <Route path='cars/:car' element={<MotorFilterPage/>}/>

        </Route>
    </Routes>
  )
}

export default Routers