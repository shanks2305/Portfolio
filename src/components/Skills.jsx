import React from 'react'
import js from "../assets/javascript-39410.png"
import ts from "../assets/ts.png"

let skills = [
  {
    key: 'Javascript',
    img: js
  },
  {
    key: 'Typescript',
    img: ts
  }
]

const Skills = () => {
  return (
    <section className='p-10 my-10 bg-tertiary flex gap-6 items-center' >
      {
        skills.map(item => (
          <div className='flex gap-1 items-center' key={item.key} >
            <img src={item.img} alt='javascript' className='h-[40px]' />
            <h3 className='text-2xl font-bold text-primary' >{item.key}</h3>
          </div>
        ))
      }

    </section>
  )
}

export default Skills