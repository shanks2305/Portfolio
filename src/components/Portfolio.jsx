import React from 'react'
import CardContainer from './CardContainer'

const Portfolio = () => {
  return (
    <div className='p-8 mx-auto max-w-6xl' >
      <div className='py-16' >
        <h2 className='uppercase text-blue-600 text-lg font-bold' >
          portfolio
        </h2>
        <h3 className='text-2xl font-bold ' >
          Each project is a unique piece of development 🧩
        </h3>
        <CardContainer />
      </div>
    </div>
  )
}

export default Portfolio