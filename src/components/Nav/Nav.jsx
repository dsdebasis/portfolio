import React from 'react'
import { Link, } from 'react-router-dom';
import { HiAcademicCap } from "react-icons/hi";

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsMenuButtonWideFill } from "react-icons/bs";

import { useState } from 'react';
const Nav = () => {
  const title = ["Home", "About", "Service", "Portfollio", "Blog", "Contact"];
  const [showNav, setShowNav] = useState("");

  function showNavbar(){
    setShowNav('border-2 ')
  }
  return (
    <>
      <nav className={`h-[10vh] mt-[4vh] rounded-2xl   md:h-[10vh]  max-w-full  md:rounded-lg   text-white grid grid-flow-col col-span-1  items-center justify-between px-5 md:justify-evenly shadow-xl  sticky top-1  bg-slate-800  `} >
        <div ><HiAcademicCap className='text-4xl md:text-5xl ' onClick={showNavbar}/></div>
        <div className={` hidden col-span-3  md:flex justify-between ${showNav} `}>
          {title.map((title, id) => (<Link to="contact" key={id} className='hover:text-cyan-300 duration-300  '>{title}</Link>))}
        </div>
        <div className='  hidden md:col-span-2 md:flex text-xl  md:flex-row   justify-evenly'>
        <span className='md:border-l-2'></span>
          <Link to={"/"} ><FaLinkedin /></Link>
          <Link to={"/"} ><FaInstagram /></Link>
          <Link to={"/"} ><FaFacebook /></Link>
        </div>
        <div className='md:hidden text-3xl' ><BsMenuButtonWideFill/></div>
      </nav>
    </>
  )
}

export default Nav;
