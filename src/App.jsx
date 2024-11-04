import React from 'react'
import WeatherApp from './components/WeatherApp'
import bg from './components/bg.jpg'

export default function App() {
  const imgstyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className='h-screen' style={imgstyle}>
      <WeatherApp/>
    </div>
  )
}
