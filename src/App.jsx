import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <section className='bg-white' >
          <About />
        </section>
        <section  >
          <Portfolio />
        </section>
        <section className='bg-white'  >
          <Contact />
        </section>
      </main>
      <footer className='bg-text' >
        <div className='max-w-6xl mx-auto p-8 flex justify-between py-20' >
          <span className='text-primary text-lg text-bold' >Copyright © 2023. All rights are reserved</span>
          <span className='flex gap-4 text-2xl' >
            <a href='https://github.com/shanks2305' target='_blank' >
              <FaGithub className='text-primary' />
            </a>
            <a href='https://www.linkedin.com/in/shishir-bahuguna-b367321a9/' target='_blank'>
              <FaLinkedinIn className='text-primary' />
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default App
