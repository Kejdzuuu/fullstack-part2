import React from 'react'

const Filter = (props) => {
  return (
    <div>
      find countries <input onChange={props.onChange} />
    </div>
  )
}

export default Filter
