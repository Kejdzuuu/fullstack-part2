import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = ({ countries }) => {
  if(countries.length === 1) {
    return (
      <div>
        <CountryDetails country={countries[0]} />
      </div>
    )
  }
  else if(countries.length <= 10) {
    return (
      <div>
        {countries.map( (country, index) =>
          <Country key={index} country={country} />
        )}
      </div>
    )
  }
  else {
    return (
      <div>Too many matches, please specify</div>
    )
  }
}

export default Countries
