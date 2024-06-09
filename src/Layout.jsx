import React from 'react'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   
   </>
  )
}

export default Layout