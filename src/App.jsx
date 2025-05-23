import { useState } from 'react'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '12345678'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const addDetails = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)

    if(nameExists) {
      alert(`${newName} is already added to the phonebook`)
    }
    else {
      const personObject = { name: newName, number: newNum}
      setPersons(persons.concat(personObject))
    }
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNum = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input 
            value = {filter}
            onChange = {handleFilter}
          />
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit = {addDetails}>
        <div>
          name: <input 
            value = {newName}
            onChange = {handleNewName}
          /> <br />
          number: <input 
            value = {newNum}
            onChange = {handleNewNum}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons = {filteredPersons}/>
    </div>
  )
}

export default App