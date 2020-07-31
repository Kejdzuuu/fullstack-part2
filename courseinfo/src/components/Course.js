import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}
  
const Part = ({title, size}) => {
  return (
    <p>
      {title} {size}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} title={part.name} size={part.exercises} />
      )}
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((a, b) => a + b.exercises, 0)
  return (
    <b>Total of {total} exercises</b>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course