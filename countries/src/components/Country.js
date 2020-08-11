import React, { useState } from 'react'
import CountryDetails from './CountryDetails'

const Country = ({ country }) => {
  const [ showDetails, setDetails ] = useState(false)

  const onClick = () => {
    setDetails(showDetails ? false : true)
    console.log(showDetails)
  }

  return (
    <div>
      {country.name} <button onClick={onClick}>show</button>
      <div id={country.alpha2Code + '_details'} style={{display: showDetails ? 'block' : 'none'}}>
        <CountryDetails country={country} />
      </div>
    </div>
  )
}

export default Country
