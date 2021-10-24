import React, { useState,useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [enterred,setEnterred] = useState('')
  const [allCountries,setAllCountries] = useState([])
  const handleEnterredChange = (event) => {
    setEnterred(event.target.value)
  }
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }, [])

  console.log('render', allCountries.length, 'countries')
  return (
    <div>
     <form >
        <div>
          find countries
          <input 
          value={enterred}
          onChange={handleEnterredChange}
          />
        </div>
     </form>
    <ul>
      <Countries allCountries={allCountries} enterred={enterred} setEnterred={setEnterred}/>
    </ul>
    </div>
  )
}
export default App
