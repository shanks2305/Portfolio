import React from 'react'
import { AiOutlineMail } from "react-icons/ai"

let socials = [
  {
    key: 'Linkedin',
    link: 'https://www.linkedin.com/in/shishir-bahuguna-b367321a9/',
  }, {
    key: 'Github',
    link: 'https://github.com/shanks2305',

  },
]

const Navbar = () => {
  return (
    <nav className='px-2 lg:px-10 py-6 shadow flex items-center justify-between bg-white z-50'  >
      <div className='flex w-full justify-between' >
        <h1 className='text-2xl lg:ml-8 font-bold capitalize text-text' >shishir.dev</h1>
        <ul className='flex gap-4 uppercase font-bold items-center' >
          <li>
            <a href='https://github.com/shanks2305' className='hover:text-blue-600' target='_blank' >
              Github
            </a>
          </li>
          <li>
            <a className='hover:text-blue-600' href='https://www.linkedin.com/in/shishir-bahuguna-b367321a9/' target='_blank'>
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar