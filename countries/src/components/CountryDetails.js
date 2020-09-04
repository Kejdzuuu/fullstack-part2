import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => {
  const [ weather, setWeather ] = useState([])
  const [ apiFetched, setFetched ] = useState(false)
  const api_key = process.env.REACT_APP_API_KEY
  const api_call = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=' + country.capital


  useEffect(() => {
    axios
      .get(api_call)
      .then(response => {
        if(response.data.success === false) {
          setWeather(["Not available"])
        } else {
          setFetched(true)
          setWeather(response.data.current)
        }
      })
  }, [])
  
  return (
    <div>
      <h2>{country.name}</h2>
      capital: {country.capital}<br />
      population: {country.population}<br />
      <h3>languages</h3>
      <ul>
        {country.languages.map((language, i) =>
          <li key={i}>{language.name}</li>
        )}
      </ul>
      <img src={country.flag} height={200} alt={country.demonym + ' flag'} style={{boxShadow: '0 0 6px 0px black'}} />
      {!apiFetched
        ? <h3>Weather unavailable</h3>
        : <div>
            <h3>Weather in {country.capital}</h3>
            temperature: {weather.temperature} C<br />
            {weather.weather_icons !== undefined &&
              <img src={weather.weather_icons[0]} alt={weather.weather_descriptions[0]} />
            }
          </div>
      } <br />
    </div>
  )
}

export default CountryDetails
