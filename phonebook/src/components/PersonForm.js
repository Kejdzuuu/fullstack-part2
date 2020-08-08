import React from 'react'

const PersonForm = (props) => {
  return (
    <div>
      <h2>Add a new person</h2>
      <form onSubmit={props.addName}>
        <div>
          name: <input value={props.newName} onChange={props.nameInput} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.numberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm