import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import './Navbar.css'
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { GiCrossMark } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";


import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [Inpshow, setInpShow] = useState(false);

  function handdleToggle() {
    setShow(!show);
  }
  function handdleClick() {
    setInpShow(!Inpshow);
  }

  function WishList() {
    <WishList />
    console.log("WishList Clicked");
  }

  return (
    <>
      <div className={!Inpshow ? 'Input' : ''} id='searchInp'>
        <GiCrossMark className='absolute right-32 top-10 cursor-pointer' id='cross' onClick={handdleClick} />
        <div className="h-screen pt-32 pl-60" id='searchArea'>
          <form action="#">
            <input type="text" placeholder="Search..." /> &nbsp; &nbsp;&nbsp;
            <input type="submit" value='Search' className='bg-white h-10 w-32 cursor-pointer rounded-xl' />
          </form>
        </div>
      </div>
      <nav className="main flex justify-evenly">
        <nav className="logo "><a href="/"><img src={Logo} alt="Logo" className='h-20 w-60' /></a></nav>
        <nav className="nav-links">
          <ul className='flex gap-10 pt-7 text-xl cursor-pointer' id={show ? 'flex' : 'hidden'} >

            <li><NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`} >Home</NavLink></li>
            <li><NavLink to="/shop" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`} >Shop</NavLink></li>
            <li><NavLink to="/Arrivals" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`} >Arrivals</NavLink></li>
            <li><NavLink to="/Contact" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`} >Contact</NavLink></li>
          </ul>
        </nav>
        <nav className="anotherAction flex gap-5 pt-7 text-xl cursor-pointer">
          <CiSearch className='hover:text-red-600' onClick={handdleClick} />
          <NavLink to="/AddToCart" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`}><CiShoppingCart className='hover:text-red-600' /></NavLink>
          <NavLink to="/WishList" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`}><FaRegHeart className='hover:text-red-600' onClick={WishList} /> </NavLink>
          <VscAccount className='hover:text-red-600' />
          <p onClick={handdleToggle}>{show ? (<GiCrossMark />) : (<CiMenuBurger className='nav-btn' onClick={handdleToggle} />)}</p>
        </nav>
      </nav>
    </>
  )
}

export default Navbar