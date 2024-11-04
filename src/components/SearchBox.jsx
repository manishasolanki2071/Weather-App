import React, { useState } from 'react'


export default function SearchBox({ updateInfo }) {
  
  let [city, setCity] = useState("");
  let[error,setError]=useState(false)

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7b28b47cd8bf3cac00a6f716a2a852e9";

  let getWeatherInfo = async () => {
    
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();
      //console.log(jsonResponse)

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw(err)
    }
    
  }

  let handleChange = (e) => {
    setCity(e.target.value)
  }

  let handleSubmit = async (e) => {
    
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      error&&setError(false)
      updateInfo(newInfo);
    } catch (err) {
      setError(true)
    }
    
  }

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center items-center'>
          <input
            onChange={handleChange}
            value={city}
            id="city"
            placeholder="City Name"
            type="text"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          />
          <br />
          <button className="p-2 m-3 rounded-md bg-blue-800 text-white">
            Search
          </button>
        </div>
        {error && (
          <p style={{ color: "red", padding: "10px", fontWeight: "bold" }}>
            No such place exists in the API being used
          </p>
        )}
      </form>
    </div>
  );
}
