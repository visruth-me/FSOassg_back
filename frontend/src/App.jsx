import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  const [acceptMessage, setAcceptMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const addDetails = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)
    const personObject = { name: newName, number: newNum }

    if(nameExists) {
      const id = persons.find(person => person.name === newName).id
      personService
        .update(id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === id ? returnedPerson : person))
          setAcceptMessage(`Updated ${personObject.name}`)
          setTimeout(() => {
            setAcceptMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(`Information of ${personObject.name} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNum('')
          setAcceptMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            setAcceptMessage(null)
          }, 5000)
        })
    }



  }
  
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this person?")

    if(confirm) {
        console.log(id)
        personService
            .remove(id)
            .then(() => setPersons(persons.filter(person => person.id !== id)))
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
      <Notification errorMessage = {errorMessage} acceptMessage = {acceptMessage}/>
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
      <Persons persons = {filteredPersons} onDelete = {handleDelete}/>
    </div>
  )
}

export default App