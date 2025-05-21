import { useState } from 'react'

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const StatisticLine = ({value, text}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  if(all === 0)
    return (
      <div>
        <Header text = "give feedback"/>
        <Button onClick = {handleGood} text = "good"/>
        <Button onClick = {handleNeutral} text = "Neutral"/>
        <Button onClick = {handleBad} text = "Bad"/>
        <Header text = "statistics"/>
        No feedback given
      </div>
    )
  return (
    <div>
      <Header text = "give feedback"/>
      <Button onClick = {handleGood} text = "good"/>
      <Button onClick = {handleNeutral} text = "Neutral"/>
      <Button onClick = {handleBad} text = "Bad"/>
      <Header text = "statistics"/>
      <table><tbody>
      <StatisticLine text = "good" value = {good}/>
      <StatisticLine text = "neutral" value = {neutral}/> 
      <StatisticLine text = "bad" value = {bad}/>
      <StatisticLine text = "all" value = {all}/>
      <StatisticLine text = "average" value = {(good * 1 + bad * -1) / all}/>
      <StatisticLine text = "positive" value = {`${good/all * 100} %`}/>
      </tbody></table>
    </div>
  )
}

export default App