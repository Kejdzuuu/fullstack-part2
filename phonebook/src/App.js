import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(function(person) {return person.name === newName})) {
      window.alert(`${newName} already exist in phonebook`)
      return
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App