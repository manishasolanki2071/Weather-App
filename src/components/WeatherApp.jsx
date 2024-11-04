import React, { useState } from 'react'
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
      city: "Delhi",
      feelsLike: 24,
      temp: 13,
      tempMin: 66,
      tempMax: 78,
      humidity: 78,
      weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }


  return (
    <div className='text-center'>
      <h2 className='text-4xl p-4 font-bold text-teal-950'>Weather App By Manisha</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
