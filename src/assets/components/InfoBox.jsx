import React from 'react'

export default function InfoBox() {

    let info = {
      temp: 25.0,
      tempMin: 67,
      tempMax: 67,
      humidity: 65,
      feelsLike: 56,
      weather: "haze",
    };

  return (
    <div className='flex flex-col'>
          <div><img src=''/></div>
          <div></div>
    </div>
  )
}
