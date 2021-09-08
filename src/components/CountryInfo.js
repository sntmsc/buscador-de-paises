import React from 'react'
import {Col} from 'react-bootstrap'



const CountryInfo = ({c}) => {
    return(
      <Col className="mx-auto bg-light border w-50" key={c.numericCode} xs={11} sm={9} md={8} lg={7}>
        <h2 className="alternate-font-h2">{c.name}</h2>
        <img src={c.flag} alt="national flag" style={{width:"16em", height:"10em"}} className="mb-3"></img>
        <h5 className="alternate-font-h5 font-weight-bold">Capital: {c.capital}</h5>
        <h5 className="alternate-font-h5 font-weight-bold">Población: {c.population}</h5>
        <h4 className="alternate-font-h4">Idiomas</h4>
        {c.languages.map((x,i) => <h5 className="alternate-font-h5 font-weight-bold" key={i}>{x.name}</h5>)}
      </Col>
    )
  }

  export default CountryInfo