import React from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

const Card = ({ data }) => {
  return (
    <div className='my-8 p-4 shadow-lg bg-white rounded-2xl' >

      <div className='grid lg:grid-cols-12 gap-4' >
        <div className='lg:col-span-7 rounded-lg shadow-md h-96 overflow-hidden relative screen cursor-pointer' >
          <img
            alt={data.name}
            src={data.img}
          />
        </div>
        <div className='lg:col-span-5 ' >
          <Info info={data} />
        </div>
      </div>
    </div >
  )
}

const Info = ({ info }) => (
  <>
    <h3 className='text-center text-xl font-bold uppercase mb-6' >
      {info.name}
    </h3>
    <p className='text-lg' >
      {info.desc}
    </p>
    <div className='my-8 flex flex-wrap gap-6'  >
      {
        info.tech.map(i => (
          <div className='py-2 px-6 rounded-lg shadow-lg capitalize' key={i} >{i}</div>
        ))
      }
    </div>
    <div className='flex my-6 gap-8 items-center px-8' >
      <a href={info.github} target='_blank' className='hover:text-blue-600 flex gap-1 items-center text-lg font-bold' >
        Code
        <AiFillGithub size={30} />
      </a>
      <a href={info.github} target='_blank' className='hover:text-blue-600 flex gap-1 items-center text-lg font-bold' >
        Demo
        <AiOutlineLink size={30} />
      </a>
    </div>
  </>
)

export default Card