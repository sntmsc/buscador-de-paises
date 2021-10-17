import React, { useState, useEffect } from 'react'  
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from 'react-bootstrap'
import './style.css'
import Filter from './components/Filter'
import Countries from './components/Countries'



const App = () => {
const [countries,setCountries] = useState([])
const [search, setSearch] = useState('')

const eventSearch = (event) =>{
  setSearch(event.target.value);
  }

const filtering= (event) => {
  const text= event.toLowerCase();
  const f= countries.filter(x => x.name.common.toLowerCase().indexOf(text)!==-1)
  return f
}

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <Container className="App mx-auto">
      <Row>
        <Filter eventSearch={eventSearch} search={search}/>
      </Row>
      <Row>
        <Countries eventSearch={eventSearch} list={filtering(search)}/>
      </Row>
    </Container>
  );
} 
 
export default App;

