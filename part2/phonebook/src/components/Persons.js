import React from 'react'
import axios from 'axios'

const Persons = (props) =>{
    const baseUrl = 'http://localhost:3001/persons/'
    const handleDelete = text =>event=>{
        if (window.confirm("Delete " + text["name"] + "?")) {
            axios
            .delete(baseUrl+text['id'])
            .then(response=>response.data)
          }
        
        //event.preventDefault()
        //props.setPersons(props.persons.filter(person=>person!==text))
        //console.log(props.persons)
    }
    const filtered = (props.persons.filter(
        person => person.name.toLowerCase().includes(props.filter_by.toLowerCase())))
    const mapped = filtered.map(
        person => 
        <form onSubmit={handleDelete(person)}>
        <li>{person.name} {person.number}
        <button type="submit">delete</button>
        </li>
        </form>
        )
    return(
    <ul>
        {mapped}
    </ul>
    )
}
export default Persons
