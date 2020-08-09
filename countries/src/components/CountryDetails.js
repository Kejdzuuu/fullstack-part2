import React from 'react'

const CountryDetails = ({ country }) => {
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
      <img src={country.flag} height={200} alt={country.demonym + ' flag'} />
    </div>
  )
}

export default CountryDetails
