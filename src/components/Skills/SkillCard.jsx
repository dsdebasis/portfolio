import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { GiAtom } from "react-icons/gi";
const SkillCard = () => {
  let title = ["Deeper Skillset", "Creative Work in CSS", "Strong Dedicaton"]
  let about = ["JS Wizard: Beyond the basics, I craft dynamic client-side experiences with advanced  concepts like WebSockets and progressive web apps.", "CSS Alchemist: Transforming pixels into interactive interfaces, I breathe life into designs with creative animations and micro-interactions.", "Puzzle Pro: No challenge fazes me. I dive deep, dissect problems, and code elegant solutions that shine in any MERN stack project."
  ]

  return (
    <div className='  text-xs md:text-xl max-w-full h-screen md:h-[45vh] grid gap-y-10 md:grid-cols-3  md:gap-x-14 '>
      <div className='w-full rounded-2xl shadow-xl bg-gradient-to-r from-slate-500 to-slate-800 px-[3vw] flex flex-col  justify-evenly text-pretty hover:-translate-x-5 hover:scale-105 duration-500 '>
        <IoSettingsOutline className='text-4xl  md:text-7xl mx-[6vw]'/>
        <h1 className='text-2xl'>{title[0]}</h1>
        <p className=' md:text-base'>{about[0]}</p>
      </div> 

      <div className='w-full rounded-2xl shadow-xl  bg-gradient-to-r from-stone-500 to-stone-700 px-[3vw] flex flex-col  justify-evenly text-pretty hover:-translate-x-5 hover:scale-105 duration-500 '>
        <BsStars className='text-4xl  md:text-7xl mx-[6vw]'/>
        <h1 className='text-2xl'>{title[1]}</h1>
        <p className=' md:text-base'>{about[1]}</p>
      </div>

      <div className='w-full rounded-2xl shadow-xl  bg-gradient-to-r from-slate-900 to-slate-700 px-[3vw] flex flex-col  justify-evenly text-pretty hover:-translate-x-5 hover:scale-105 duration-500 '>
        <GiAtom className='text-4xl  md:text-7xl mx-[6vw]'/>
        <h1 className='text-2xl'>{title[2]}</h1>
        <p className=' md:text-base'>{about[2]}</p>
      </div>

    </div>
  )
}

export default SkillCard;
