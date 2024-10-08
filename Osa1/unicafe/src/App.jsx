import { useState } from 'react'

const Statistics = ({good, neutral, bad, all, average}) => {
  if (all === 0) {
    return(    
      <div>
        <h2>No feedback given</h2>
      </div>
      
    )
  }
  
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine name='good' value={good}/>
          <StatisticLine name="neutral" value={neutral}/>
          <StatisticLine name="bad" value={bad}/>
          <StatisticLine name="all" value={all}/> 
          <StatisticLine name="average" value={average}/>
          <StatisticLine name="positive" value={good/all}/>
        </tbody>
      </table>
    </div>
  
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.name}</td><td>{props.value}</td>
    </tr>
  )
}

const Button = ({handleClick, text}) => 
  <button onClick={handleClick}>
    {text}
  </button>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState (0)
  const [average, setAverage] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setAverage(average + 1)
    setAll(all +1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all +1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setAverage(average - 1)
    setAll(all +1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text='good'/>
      <Button handleClick={increaseNeutral} text='Neutral'/>
      <Button handleClick={increaseBad} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}
      all={all}  average={average}/>
    </div>
  )
}

export default App