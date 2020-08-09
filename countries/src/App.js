import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
  const [ filter, setFilter ] = useState('')
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterInput = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h1>Countries</h1>
      <Filter onChange={handleFilterInput} />
      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;
