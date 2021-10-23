import React from 'react'

const Filter = (props) =>{
    return(
    <div>
        Filter shown with
        <input
        value={props.filter_by}
        onChange={props.handleFilterChange}/>
    </div>)
}

export default Filter
