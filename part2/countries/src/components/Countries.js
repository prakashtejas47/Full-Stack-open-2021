import React, { useState,useEffect} from 'react'

const Countries = (props)=>{
    const handleShow = text =>event=>{
        props.setEnterred(text)
    }
    const ShowCountry = ()=>{
        //event.preventDefault()
        return(
            <div>
                <h2>{filtered[0]['name']['common']}</h2>
                <p>capital {filtered[0].capital}</p>
                <p>population {filtered[0].population}</p>
                <h3>Languages</h3>
                <ul>{Object.values(filtered[0]['languages']).map(lang=><li>{lang}</li>)}</ul>
                <img src={filtered[0]['flags']['png']}/>
            </div>
        )
    }
    const filtered = props.allCountries.filter(
        country=>country['name']['common'].toLowerCase().includes(props.enterred.toLowerCase()))
    const mapped = filtered.map(
        country=>
        <form onSubmit={handleShow(country['name']['common'].toLowerCase())}>
        <li>{country['name']['common']}
        <button type="submit">show</button>
        </li>
        </form>)
    return(
        <div>
        {filtered.length<10 ? (filtered.length===1?
        (<ShowCountry/>):mapped):"Too many matches, specify another filter"}
        </div>
    )
}

export default Countries