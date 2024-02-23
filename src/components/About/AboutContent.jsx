import React from 'react'

const AboutContent = () => {
  let h1 = ["Mongo DB ", "My Sql", "Express.js", "React", "Node.js"]
  return (

    <div className='h-auto md:mx-[10vw] mt-5 rounded-3xl p-5 md:px-[2vw] md:py-[1vw] bg-gradient-to-r from-slate-900 to-slate-600 grid grid-flow-row gap-y-10 '>
      <div >
        <h1 className='m-5 md:text-3xl text-green-600 tracking-[0.2vw]'>{h1[0]}</h1>
        <p className='md:mx-10 border-2 p-4 rounded-xl border-violet-400 hover:scale-105 duration-300 hover:bg-gradient-to-r from-slate-900 to-slate-700 tracking-widest text-green-400'>Hands-on experience: Express your practical expertise by mentioning the types of MERN projects you've built that utilized MongoDB effectively (e.g., real-time chat app, e-commerce store).
          Core capabilities: Demonstrate your understanding of fundamental concepts like CRUD operations, querying (aggregation, joins), schema design, and indexing. Share specific examples if possible.
          Performance optimization: Showcase your ability to improve MongoDB performance through strategies like efficient queries, appropriate indexing, and knowledge of sharding/replication.
        </p>
      </div>
      <div >
        <h1 className='m-5 md:text-3xl tracking-[0.2vw]'>{h1[1]}</h1>
        <p className='md:mx-10 border-2 p-4 rounded-xl border-violet-400 hover:scale-105 duration-300 hover:bg-gradient-to-r from-slate-900 to-slate-700 tracking-widest  text-green-400'>Intermediate MySQL developer adept at database schema design and proficient in CRUD operations. Experience crafting efficient queries for data retrieval, creation, modification, and deletion. Open to expanding skills into performance optimization and advanced techniques.
        </p>
      </div>
      <div >
        <h1 className='m-5 md:text-3xl text-lime-400 tracking-[0.2vw]'>{h1[2]}</h1>
        <p className='md:mx-10 border-2 p-4 rounded-xl border-violet-400 hover:scale-105 duration-300 hover:bg-gradient-to-r from-slate-900 to-slate-700 tracking-widest  text-green-400'>Express.js backend master crafting robust APIs. Deep expertise in routing, middleware, and error handling ensures efficient, secure, and maintainable applications. Leveraged best practices for authentication, authorization, and performance optimization to build scalable solutions. Eager to tackle complex backend challenges!
        </p>
      </div>

      <div >
        <h1 className='m-5 md:text-3xl text-lime-400 tracking-[0.2vw]'>{h1[3]}</h1>
        <p className='md:mx-10 border-2 p-4 rounded-xl border-violet-400 hover:scale-105 duration-300 hover:bg-gradient-to-r from-slate-900 to-slate-700 tracking-widest text-green-400 '>Crafting dynamic React apps with confidence:

          Master of built-in hooks like useState, useRef, useEffect for seamless state management and side effects.
          Navigate user journeys smoothly with react-router-dom.
          Share global state efficiently using Context API or Redux Toolkit, depending on project needs.
          Eager to tackle complex UI and data flow challenges with my passion for React and continuous learning.
        </p>
      </div>
      <div >
        <h1 className='m-5 md:text-3xl text-lime-400 tracking-[0.2vw]'>{h1[4]}</h1>
        <p className='md:mx-10 border-2 p-4 rounded-xl border-violet-400 hover:scale-105 duration-300 hover:bg-gradient-to-r from-slate-900 to-slate-700 tracking-widest text-green-400 '>File System (fs): Enables interacting with the file system, including reading, writing, and manipulating files and directories.
          Path: Offers tools for handling file paths and working with directories across different operating systems.
          HTTP/HTTPS: Provides functionalities for building both HTTP and HTTPS servers, essential for web development.
          Events: Manages event-driven programming, a core aspect of Node.js's non-blocking nature.
          Buffers: Handle binary data efficiently, vital for working with network I/O, images, and other non-text formats.
        </p>
      </div>

    </div>
  )
}

export default AboutContent;
