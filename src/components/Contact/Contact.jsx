import { useRef } from 'react'
import React from 'react'
import { Form, useSubmit } from 'react-router-dom'
import { FaAddressCard } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e) => {
    e.target.preventDefault()
  }
  let ref = useRef()
  const submit = useSubmit();
  return (
    <div className='max-w-full max-h-fit px-2  my-12 box-border  shadow-lg rounded-2xl border-2  grid grid-flow-row md:grid-cols-2 bg-gradient-to-r from-slate-900 to-stone-500  '>
      <div className='box-border rounded-md grid md:gap-x-10 mx-2   p-2 md:grid-flow-row justify-center'>
        <div className='md:text-6xl inline-flex gap-x-4  items-center '><FaAddressCard /> <h1 className='text-base'>Banki,Cutack,Odisha,754007</h1></div>
        <div className='md:text-6xl inline-flex gap-x-4 items-center '><MdMarkEmailUnread /><h1 className='text-base'>dsdebasis2@gmail.com</h1></div>
        <div className='md:text-6xl inline-flex gap-x-4 items-center '><FaPhoneVolume />
          <h1 className='text-base'>9078266773</h1></div>
      </div>
      <div className='px-2 py-3'>
        <form className='grid  grid-rows-4 grid-cols-2 gap-x-2 
         md:gap-x-3 items-center ' onChange={(e) => submit(e.currentTarget)}>

          <div className=''>
            <input className='w-full h-10 bg-transparent  border-2 border-yellow-500  rounded-md px-3 placeholder:' placeholder='Name' type='text' name="name" onChange={(e) => e.target.value} />
          </div>
          <div>
            <input className='w-full h-10 bg-transparent  border-2 border-yellow-500  rounded-md px-3 placeholder:' placeholder='Mobile' type='number' name="number" onChange={(e) => e.target.value} />
          </div>
          <div>

            <input className='w-full h-10 bg-transparent  border-2 border-yellow-500  rounded-md px-3 placeholder:' placeholder='Email' type='email' name="email" onChange={(e) => e.target.value} />
          </div>
          <div>
            <input type='text ' className='w-full h-10 border-2 border-yellow-500  rounded-md bg-transparent px-2 ' placeholder='purpose' />
          </div>
          <div className='col-span-2'>
            <textarea placeholder='Message' className='w-full p-3 bg-transparent border-2 rounded-md border-yellow-400'></textarea >
          </div>
          <div className='col-span-2'>
            <button className='w-full py-3 rounded-md border-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-900 bg-gradient-to-r from-stone-500 to-stone-700'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
