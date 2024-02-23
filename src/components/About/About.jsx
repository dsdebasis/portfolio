import React from 'react'
import AboutContent from './AboutContent.jsx'

const About = () => {
  return (
    <div className='mt-[5vh]  h-auto  grid grid-flow-row   md:gap-y-10 '>
      <div className='text-center rounded-xl grid md:grid-flow-col  place-items-center bg-gradient-to-r from-slate-900 to-slate-700 p-4 text-sm '>
        <h1 className='md:text-3xl text-cyan-400 font-bold '>About Me</h1>
        <h1 className='md:text-2xl mt-3  font-bold '>A passionate Developer Who Adapts <br /> New Tech and Apply it.</h1>
      </div>
      <AboutContent />

    </div>
  )
}

export default About
