import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { FaMapMarked } from "react-icons/fa"

const Contact = () => {
  return (
    <div className='p-8 mx-auto max-w-6xl' >
      <div className='my-20' >
        <h2 className='text-xl font-bold text-blue-600 uppercase mb-4' >Contact</h2>
        <h3 className='text-3xl font-bold ' >Don't be shy! Hit me up! 👇</h3>
        <div className='my-14 flex gap-24 text-xl' >
          <div className='flex gap-4 items-center' >
            <div className='bg-white shadow-2xl rounded-full p-4 col-span-2' >
              <FaMapMarked size={40} className='text-blue-600' />
            </div>
            <div className='flex flex-col' >
              <span className='font-bold' >Location</span>
              <span className='text-secondary '>Bengaluru, Karnatka</span>
            </div>
          </div>
          <div className='flex gap-4 items-center ' >
            <div className='bg-white shadow-2xl rounded-full p-4 col-span-2' >
              <AiFillMail size={40} className='text-blue-600' />
            </div>
            <a href='mailto:contactshishirbahugna@gmail.com' className='flex flex-col' >
              <span className='font-bold' >Mail</span>
              <span className='text-secondary ' >contactshishirbahuguna@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact