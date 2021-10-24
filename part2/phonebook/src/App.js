import React, { useState, useEffect} from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ filter_by,setFilter_by] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter_by(event.target.value)
  } 
  const addName = (event) =>{
    event.preventDefault()
    const found = persons.findIndex(person => person.name === newName)
    if (found!==-1){
      window.alert(newName + ' is already added to the phonebook')
    }
    else{
      setPersons(persons.concat({name: newName,number: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  }

  const [notes, setNotes] = useState([])
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'persons')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter_by={filter_by} handleFilterChange={handleFilterChange}/>
      <h3> Add a new</h3>
      <PersonForm addName={addName} newName={newName} 
      handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filter_by={filter_by}/>
    </div>
  )
}

export default App