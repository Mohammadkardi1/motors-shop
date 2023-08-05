import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container'
import  Footer  from './Footer'
import Navbar from './navbar/Navbar'
import Hero from '../pages/home/Hero'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      {/* <Navbar/> */}
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout