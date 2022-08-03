//import { response } from 'express'
import React, {useState} from 'react'
import './App.css'

function App() {
  const apiKey = '9805a531b1902223ddc26f4159207a98'
  const [weatherData, setWeatherData] = useState([])
  const [city, setCity] = useState("")
  
  const getWeather = (event) => {
    if (event.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          console.log(data)
          setCity("")

        }
      )
    }
  }
  return (
    <div className='container'>
    <input className='input'
     placeholder='Enter City...'
      onChange={e =>setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}

     />
     {typeof weatherData.main === 'undefined'? (
      <div>
       <p className='welcome'>Welcome to weather App! Enter in a City to Get the Weather of</p> 
      </div>
    ):(
      <div className='weather-data'>
        <p className='city'>{weatherData.name}</p>
        <p className='temp'>{Math.round(weatherData.main.temp)}°c</p>
        <p className='weather'>{weatherData.weather[0].main}</p>
      </div>
    )}
    {weatherData.cod === "404" ?(
      <p className='last'>City not found</p>
    ):(
      <>
      </>
    )}
    </div>
  )
}

export default App
