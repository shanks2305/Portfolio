import React from 'react'
import Card from "./Card"
import img1 from "../assets/car-rental-full.c58b37da333d73238fdd.webp"

let data = [
  {
    name: 'Car Rental  🚗',
    desc: 'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
    tech: ['react', 'nodejs', 'mongodb'],
    github: '',
    demo: '',
    img: img1,
    alignLeft: true
  },
  {
    name: 'Car Rental 1 🚗',
    desc: 'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
    tech: ['react', 'nodejs', 'mongodb'],
    github: '',
    demo: '',
    img: img1,
    alignLeft: false
  },
  {
    name: 'Car Rental 2 🚗',
    desc: 'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
    tech: ['react', 'nodejs', 'mongodb'],
    github: '',
    demo: '',
    img: img1,
    alignLeft: true
  },
  {
    name: 'Car Rental 3 🚗',
    desc: 'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
    tech: ['react', 'nodejs', 'mongodb'],
    github: '',
    demo: '',
    img: img1,
    alignLeft: false
  }
]

const CardContainer = () => {
  return (
    <div className='my-8' >
      {data.map(item => (
        <Card data={item} key={item.name} />
      ))}
    </div>
  )
}

export default CardContainer