import React from 'react';
import ReactDOM from 'react-dom';

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
      {parts.map((part, i) => 
        <Part key={i} title={part.name} size={part.exercises} />
      )}
    </div>
  )
}

const Total = ({parts}) => {
  let sum = 0
  parts.map(part => sum += part.exercises)
  return (
    <b>Total of {sum} exercises</b>
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

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))