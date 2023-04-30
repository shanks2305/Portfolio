import React from 'react'
import hi from "../assets/hi.png"
import JS from "../assets/javascript.de4c2594613e34b15666206bbede7327.svg"
import react from "../assets/react.afac9c43724070bf6674f2692b7356a9.svg"
import node from "../assets/node.png"
import ts from "../assets/ts.png"
import aws from "../assets/aws-icon.webp"

const Hero = () => {
  return (
    <header className='max-w-6xl mx-auto min-h-screen flex justify-center items-center p-8 lg:text-left text-center'>
      <section className='grid  lg:grid-cols-12 gap-2' >
        <section className='col-span-6 lg:hidden flex justify-center' >
          <div className={`hero-img bg-user-img`} />
        </section>
        <section className='col-span-6 flex flex-col justify-center ' >
          <h2 className='text-center text-3xl lg:text-6xl font-bold text-text' >Full-Stack Javascript</h2>
          <h2 className='text-3xl lg:text-6xl font-bold text-text flex gap-4 justify-center items-center' >Developer
            <img src={hi} alt='hi' className='w-14 h-14' /></h2>
          <p className='mt-4 text-secondary text-lg' >
            Hi, I'm Shishir Bahuguna. A passionate Full-Stack Javascript Developer based in  Bengaluru, Karnataka. 📍
          </p>
          <div className='mt-8 grid lg:grid-cols-12 items-center gap-4' >
            <h3 className='text-lg uppercase font-bold col-span-3 lg:text-start text-center' >Tech Stack </h3>
            <div className='lg:col-span-9 flex gap-4 items-center flex-wrap' >
              <span className='p-4 bg-white rounded-full shadow' >
                <img src={JS} alt='img-js' className='w-8 h-8' />
              </span>
              <span className='p-4 bg-white rounded-full shadow' >
                <img src={ts} alt='img-react' className='w-8 h-8' />
              </span>
              <span className='p-4 bg-white rounded-full shadow' >
                <img src={react} alt='img-react' className='w-8 h-8' />
              </span>
              <span className='p-4 bg-white rounded-full shadow' >
                <img src={node} alt='img-react' className='w-8 h-8' />
              </span>
              <span className='p-4 bg-white rounded-full shadow' >
                <img src={aws} alt='img-react' className='w-8 h-8' />
              </span>
            </div>
          </div>
        </section>
        <section className='col-span-6 hidden lg:flex justify-center' >
          <div className={`hero-img bg-user-img`} />
        </section>
      </section>
    </header>
  )
}

export default Hero