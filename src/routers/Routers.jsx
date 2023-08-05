import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import Layout from '../components/Layout'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Navigate to='home'/>}/>
            <Route path='home' element={<Home/>}/>

        </Route>
    </Routes>
  )
}

export default Routers