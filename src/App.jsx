import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const Header = ({text}) => <h1>{text}</h1>

const Para = ({text, votes}) => {
  return (
    <div>
      {text} <br />
      has {votes} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const max = Math.max(...votes)
  const index = votes.indexOf(max)

  return (
    <div>
      <Header text = {"Anecdote of the day"}/>
      <Para text = {anecdotes[selected]} votes = {votes[selected]}/>
      <Button onClick = {handleNext} text = {"Next Anecdote"}/>
      <Button onClick = {handleVote} text = {"Vote"}/>
      <Header text = {"Anecdote with most votes"}/>
      <Para text = {anecdotes[index]} votes = {votes[index]}/>
    </div>
  )
}

export default App