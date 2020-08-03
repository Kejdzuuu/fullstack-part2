import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(function(person) {return person.name === newName})) {
      window.alert(`${newName} already exist in phonebook`)
      return
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
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
      filter names <input onChange={handleFilterInput} />
      <h2>Add a new person</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App