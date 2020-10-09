import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notificationMsg, setNotificationMsg ] = useState(null)
  const [ notificationType, setNotificationType ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.some(function(person) {return person.name === newName})) {
      const result = window.confirm('Replace phone number?')

      if (result) {
        const personToReplace = persons.find(n => n.name === newName)

        personService
          .update(personToReplace.id, newPerson)
          .then(createdPerson => {
            setPersons(persons.map(n =>
              n.name === newName ? {...newPerson} : n)
            )
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      personService
        .create(newPerson)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setNotificationType('info')
          setNotificationMsg(`Added ${newName}`)
          setTimeout(() => {
            setNotificationMsg(null)
          }, 3000)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deleteName = (id) => {
    const result = window.confirm('Delete contact?')
    const person = persons.find(n => n.id === id)
    
    if (result) {
      personService
        .remove(id)
        .then(() =>
          setPersons(persons.filter(n => n.id !== id))
        )
        .catch(error => {
          setNotificationType('error')
          setNotificationMsg(`Information on ${person.name} was already deleted from server`)
          setTimeout(() => {
            setNotificationMsg(null)
          }, 3000)
          setPersons(persons.filter(n => n.id !== id))
        })
    }
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
      <Notification message={notificationMsg} type={notificationType} />
      <Filter onChange={handleFilterInput} />
      <PersonForm addName={addName} newName={newName} newNumber={newNumber}
              nameInput={handleNameInput} numberInput={handleNumberInput} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deleteName} />
    </div>
  )
}

export default App