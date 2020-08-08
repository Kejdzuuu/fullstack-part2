import React from 'react'
import Person from './Person'

const Filter = ({ persons }) => {

  return (
    <ul>
      {persons.map(person =>
        <Person key={person.id} person={person} />
      )}
    </ul>
  )
}

export default Filter