import React, { useState } from 'react'

const Button = (props) =>(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) =>{
  return(
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) =>{
  if (props.good+props.neutral+props.bad>0){
    return(
      <div>
        <h1> Statistics</h1>
        <StatisticLine text="Good" value ={props.good} />
        <StatisticLine text="Neutral" value ={props.neutral} />
        <StatisticLine text="Bad" value ={props.bad} />
        <StatisticLine text="All" value={props.good+props.neutral+props.bad}/>
        <StatisticLine text="Average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)}/>
        <StatisticLine text="Positive" value={props.good/(props.good+props.neutral+props.bad)}/>
      </div>)
  }
  return(
    <div>
      <p>No Feedback Given</p>
    </div>
  )
  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text="Good"/>
      <Button handleClick={()=>setNeutral(neutral+1)} text="Neutral"/>
      <Button handleClick={()=>setBad(bad+1)} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App