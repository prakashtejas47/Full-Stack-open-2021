import React, { useState, useEffect} from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import noteService from './services/notes'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  useEffect(() => {
    noteService
      .getAll()
      .then(text => {
        setPersons(text)
      })
  }, [])

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
      if (window.confirm(newName + ' is already added to the phonebook, replace the old number with a new one?')){
        noteService
        .update(persons[found]['id'],{name: newName,number: newNumber})
        .then(response=>response.data)
        setPersons(persons
          .map(person=>person['name']===newName ? {"name":newName, "number":newNumber,"id": person['id']} : person))
      }
    }
    else{
      noteService
      .create({name: newName,number: newNumber})
      .then((added) => {
        setPersons(persons.concat(added))
        setNewName('')
        setNewNumber('')
        console.log(persons)
      })
    }
  }

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