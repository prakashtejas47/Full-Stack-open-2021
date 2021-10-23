import React from 'react'

const Persons = (props) =>{
    return(
    <ul>
        {(props.persons.filter(
        person => person.name.toLowerCase().includes(props.filter_by.toLowerCase()))).map(person => 
        <li>{person.name} {person.number}</li>
        )}
    </ul>
    )
}
export default Persons
