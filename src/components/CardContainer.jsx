import React from 'react'
import Card from "./Card"
import img1 from "../assets/weather-React-App.png"
import img2 from "../assets/CoinKing.png"


let data = [
  {
    name: 'Weather App',
    desc: 'A weather app is a online platform that allow user to track the weather report. The web app provide interface for searching, Auto location and detailed view for weather of a particular place',
    tech: ['react', 'OpenWeatherMap API '],
    github: 'https://github.com/shanks2305/weather-app',
    demo: 'https://shanks-weather-app.netlify.app/',
    img: img1,
    alignLeft: true
  },
  {
    name: 'CoinKing',
    desc: 'Just a better way to manage your coins and get rich obviously. It provide you with all the information to be a billionaire.',
    tech: ['react', 'typescript', "coingecko-api"],
    github: 'https://github.com/shanks2305/weather-app',
    demo: 'https://shankey-coinking.netlify.app',
    img: img2,
    alignLeft: false
  },
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