import React from 'react'
import rainy2 from './rainy2.avif'
import hot2 from './hot2.avif'
import cold2 from './cold2.jpg'


export default function InfoBox({ info }) {    

    const imageStyle = {
      backgroundImage: `url(${info.humidity > 80 ? rainy2 : info.temp > 15 ? hot2 : cold2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  return (
    <div className="flex justify-center items-center border border-slate-900 mt-3">
      <div className="w-96 h-96" style={imageStyle}>
        {/*<img src={rainy} alt="" width={500}/>8*/}
      </div>
      <div className='text-center bg-black text-white h-96 flex flex-col items-center justify-center opacity-50'>
        <div className='text-2xl font-bold'>{info.city}</div>
        <div className='text-lg p-3 font-semibold'>Temperature : {info.temp}&deg;C</div>
        <div className='text-lg p-3 font-semibold'>Humidity : {info.humidity}</div>
        <div className='text-lg p-3 font-semibold'>Minimum Temperature = {info.tempMin}&deg;C</div>
        <div className='text-lg p-3 font-semibold'>Maximum Temperature = {info.tempMin}&deg;C</div>
        <div className='text-lg p-3 font-semibold'>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</div>
      </div>
    </div>
  );
}
