import React from 'react'
import  ds from '../.././assets/ds.jpg'
const Hero = () => {
  return (
    <div className='h-screen md:h-[60vh] max-w-full box-border mt-[10vh]  grid  md:grid-cols-2 md:gap-6'>
      <div className='  pl-[10vw] flex flex-col gap-y-5'>
        <h1 className='text-3xl md:text-6xl font-semibold'>Debasis <span className='text-cyan-500'>Sahoo</span></h1>
        <p className=' md:text-[1.2rem] font-extralight tracking-wide opacity-90 hover:opacity-100 hover:text-violet-400   duration-300 -translate-y-2'>
          I'm a passionate Front-End Developer ready to craft stunning, interactive
          experiences for your users. My toolbox brims with the essentials: HTML, CSS
          (including Tailwind CSS like a pro!), and JavaScript to bring it all to life. Version
          control with Git and Github is second nature, ensuring seamless collaboration and
          clean code.

        </p>
        <button className='md:w-[15vw] md:h-[3.5vw] mt-[2vw]  border-2 border-orange-700 rounded-lg  px-4 py-2 md:text-xl '>Get In Tocuh</button>
      </div>
      <div className=' self-center mx-[10vw] '>
       <img src={ds} className='md:max-w-[25vw] shadow-2xl rounded-3xl md:hover:scale-110 delay-100 ease-out duration-1000' ></img>
      </div>
    </div>
  )
}

export default Hero
