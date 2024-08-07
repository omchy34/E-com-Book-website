import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart, CiSearch, CiMenuBurger } from "react-icons/ci";
import { GiCrossMark } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [Inpshow, setInpShow] = useState(false);
  const [sideNavVisible, setSideNavVisible] = useState(false);
  const accessToken = useSelector(state => state.AccRefToken.AccRefToken.accessToken);

  function handleClick() {
    setInpShow(!Inpshow);
  }

  function toggleSideNav() {
    setSideNavVisible(!sideNavVisible);
  }

  return (
    <>
      {/* Side Navigation */}
      <div className={`fixed top-0 right-0 h-full bg-black text-white transform ${sideNavVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 w-64 z-40`}>
        <div className="p-4">
          <GiCrossMark className="text-2xl cursor-pointer" onClick={toggleSideNav} />
        </div>
        <ul className="flex flex-col gap-6 p-4">
          <li>
            <NavLink to="/" onClick={toggleSideNav} className={({ isActive }) => `${isActive ? "text-red-500" : "text-white hover:text-orange-500"}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={toggleSideNav} className={({ isActive }) => `${isActive ? "text-red-500" : "text-white hover:text-orange-500"}`}>Shop</NavLink>
          </li>
          <li>
            <NavLink to="/Arrivals" onClick={toggleSideNav} className={({ isActive }) => `${isActive ? "text-red-500" : "text-white hover:text-orange-500"}`}>Arrivals</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={toggleSideNav} className={({ isActive }) => `${isActive ? "text-red-500" : "text-white hover:text-orange-500"}`}>Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className={!Inpshow ? "Input" : ""} id="searchInp">
        <GiCrossMark className="absolute right-32 top-10 cursor-pointer" id="cross" onClick={handleClick} />
        <div className="h-screen pt-32 pl-60" id="searchArea">
          <form action="#">
            <input type="text" placeholder="Search..." id="text" />
            <input type="submit" value="Search" className="bg-white h-10 w-32 cursor-pointer rounded-xl" />
          </form>
        </div>
      </div>
      <nav className="main flex justify-evenly">
        <nav className="logo">
          <a href="/">
            <img src={Logo} alt="Logo" className="h-20 md:w-60" />
          </a>
        </nav>


        {/* navlinks */}
        <nav className="nav-links z-50 hidden md:flex">
          <ul className={`flex gap-10 pt-7 text-xl cursor-pointer m-auto justify-center place-items-center`}>
            <li>
              <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/Arrivals" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`}>Arrivals</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <nav className="anotherAction flex gap-5 pt-7 text-xl cursor-pointer">
          <CiSearch className="hover:text-red-600" onClick={handleClick} />
          <NavLink to="/AddToCart" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`}>
            <CiShoppingCart className="hover:text-red-600" />
          </NavLink>
          <NavLink to="/WishList" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black-50 hover:text-orange-500"}`}>
            <FaRegHeart className="hover:text-red-600" />
          </NavLink>
          <div className="flex gap-8">
            <Popover>
              <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                <VscAccount className="text-2xl text-pink-500" />
              </PopoverButton>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel anchor="bottom" className="divide-y divide-white/5 rounded-xl bg-pink-600/30 text-sm/6 [--anchor-gap:var(--spacing-5)]">
                  <div className="p-3">
                    {accessToken ? (
                      <>
                        <NavLink to="/Logout" className="block rounded-lg py-2 px-3 transition hover:bg-white/50">Logout</NavLink>
                        <NavLink className="block rounded-lg py-2 px-3 transition hover:bg-white/50" to="/Profile">
                          <p className="font-semibold text-black">Profile</p>
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink className="block rounded-lg py-2 px-3 transition hover:bg-white/50" to="/Registration">
                          <p className="font-semibold text-black">Registration</p>
                        </NavLink>
                        <NavLink className="block rounded-lg py-2 px-3 transition hover:bg-white/50" to="/Login">
                          <p className="font-semibold text-black">Login</p>
                        </NavLink>
                      </>
                    )}
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>
          </div>
        {/* Mobile Menu Button */}
        <button className="flex md:hidden" onClick={toggleSideNav}>
          <CiMenuBurger className="text-2xl" />
        </button>

        </nav>
      </nav>
    </>
  );
};

export default Navbar;
