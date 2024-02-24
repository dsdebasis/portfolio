import React from 'react'
import Nav from './components/Nav/Nav.jsx'
import Contact from './components/Contact/Contact.jsx'
import Hero from './components/Hero/Hero.jsx'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      
      <section className="grid gap-y-[15vh]  ">
      <Nav/>
      <Outlet/>
      <Hero/>
    
    </section>
    </>
  )
}

export default Layout
