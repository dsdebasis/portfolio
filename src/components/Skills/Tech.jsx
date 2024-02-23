import React from 'react'

const Tech = () => {
  const content = ["Tailwind Css", "Verson Controoling : Git", "React Verson 6.4", "Node.js", "Express Routing and Error Handeling", "Excellent Crud Operation In Mondgo DB", "Data Modeling with Mongoose",
    "API Handeling in Fetch,axios", "Oraganizing code", "MVC Model"];

  // console.log(randomNum)



  return (

    <div className=' rounded-2xl border-2 border-white   p-6 grid  grid-cols-2 gap-x-[10vw] gap-y-4 bg-gradient-to-t  '>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around items-center '> <h1 className='text-xs md:text-xl'>{content[0]}</h1> <h1 className='text-amber-500 '>95%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600  mr-[1vw]  `}></div>
        </div>
      </div>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around  items-center'> <h1 className='text-xs md:text-xl'>{content[1]}</h1> <h1 className='text-amber-500'>60%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600  mr-[4vw]  `}></div>
        </div>
      </div>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around items-center '> <h1 className='text-xs md:text-xl'>{content[2]}</h1> <h1 className='text-amber-500'>80%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600  mr-[2vw]  `}></div>
        </div>
      </div>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around  items-center'> <h1 className='text-xs md:text-xl'>{content[3]}</h1> <h1 className='text-amber-500 '>65%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600  mr-[7vw]  `}></div>
        </div>
      </div>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around items-center '> <h1 className='text-xs md:text-xl'>{content[4]}</h1> <h1 className='text-amber-500'>75%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600  mr-[5vw]  `}></div>
        </div>
      </div>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around items-center'> <h1 className='text-xs md:text-xl'>{content[5]}</h1> <h1 className='text-amber-500'>97%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600  mr-[0.4vw]  `}></div>
        </div>
      </div>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around items-center'> <h1 className='text-xs md:text-xl'>{content[6]}</h1> <h1 className='text-amber-500'>60%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600  mr-[10vw]  `}></div>
        </div>
      </div>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around items-center'> <h1 className='text-xs md:text-xl'>{content[7]}</h1> <h1 className='text-amber-500'>85%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600  mr-[2vw]  `}></div>
        </div>
      </div>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around items-center '> <h1 className='text-xs md:text-xl'>{content[8]}</h1> <h1 className='text-amber-500'>100%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600  mr-[3vw]  `}></div>
        </div>
      </div>


      <div className='flex flex-col justify-around gap-y-6' >
        <div className='flex justify-around '> <h1 className='text-xs md:text-xl'>{content[9]}</h1> <h1 className='text-amber-500'>100%</h1></div>
        <div className='h-3 rounded-xl bg-white ' >

          <div className={`h-3  rounded-xl duration-300  bg-gradient-to-r from-black to-amber-600    `}></div>
        </div>
      </div>

    </div>

  )
}

export default Tech
