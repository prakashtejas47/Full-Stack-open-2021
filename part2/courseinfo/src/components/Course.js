import React from 'react'
  

const Header = (props) => {
    return(
      <h1>{props.course}</h1>
    )
  }
  
const Part = (props) => {
    return(
    <p>
      {props.partnum} {props.exercisenum} 
    </p>
    )
}
  
const Content = (props) => {
    return(
      <div>
        {props.parts.map(part => <Part partnum={part.name} exercisenum={part.exercises} />)}
      </div>
    )
}
  
const reducer = (a,b) => a+b

const Total = (props) => {
    return(
    <p>Total of {(props.parts.map(part => part.exercises)).reduce(reducer)} exercises</p>
    )
}

const Course = (props) => {
    return (
      <div>
        <Header course={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
      </div>
    )
}

export default Course