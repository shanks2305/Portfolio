import React from 'react'
import img from "../assets/nubelson-fernandes-sdg7M9KwoLM-unsplash.jpg"

const About = () => {
  return (
    <>
      <div className=' mx-auto p-8 max-w-6xl' >
        <div className='grid lg:grid-cols-12 my-24 gap-8' >
          <div className='lg:col-span-6' >
            <div className='w-full lg:w-[450px] h-[350px] rounded-xl shadow relative' >
              <img src={img} className='w-full h-full object-cover' alt='work' />
              {/* <div className='hidden lg:block z-50 absolute p-4 w-52 h-52 bg-white -bottom-14 -right-14 rounded-full' >

              </div> */}
            </div>
          </div>
          <div className='lg:col-span-6' >
            <h3 className='font-bold uppercase text-blue-600 text-lg' >About me</h3>
            <h4 className='mt-4 text-2xl font-bold' >A dedicated Full-stack Developer based in  Bengaluru, Karnataka. 📍</h4>
            <p className='mt-4 text-secondary' >
              As a skilled Software Engineer, I have had the pleasure of working on a variety of challenging projects that have allowed me to hone my skills and expertise.In terms of my technical skills, I have expertise in HTML, CSS, JavaScript, TypeScript, MySQL, ReactJs, NextJS, Redux, NodeJs, Sass/Scss, Bootstrap, Tailwind, Git, Docker, Graphql, and AWS.I pursued my higher education from Uttaranchal University, Dehradun. I completed my Masters of Computer Applications with a CGPA of 9.2 from August 2019 to June 2021. I also completed my Bachelors of Computer Applications with a CGPA of 8.8 from August 2016 to June 2019 from the same university.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About