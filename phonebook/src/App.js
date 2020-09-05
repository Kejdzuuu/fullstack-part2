import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(function(person) {return person.name === newName})) {
      window.alert(`${newName} already exist in phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService
      .create(newPerson)
      .then(createdPerson => {
        setPersons(persons.concat(createdPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const deleteName = (id) => {
    
    personService
      .remove(id)
      .then(() =>
        setPersons(persons.filter(n => n.id !== id))
      )
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) => {
    setFilter(event.target.value)
  }
  
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterInput} />
      <PersonForm addName={addName} newName={newName} newNumber={newNumber}
              nameInput={handleNameInput} numberInput={handleNumberInput} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deleteName} />
    </div>
  )
}

export default App