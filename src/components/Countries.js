import React from 'react'
import {Col, Row, Button, Container} from 'react-bootstrap'
import Weather from './Weather'
import CountryInfo from './CountryInfo'


const Countries = ({list,eventSearch}) => {

    const countriesList = () =>  list.length > 10 ? 
      <p className="font-italic text-white bg-dark mt-5">Nuestra base de datos es muy amplia, por favor realice una búsqueda específica.</p> :
      list.length===1 ?
      <Container className="d-flex flex-column">
        <Row>
          <CountryInfo c={list[0]}/>
        </Row>
        <Row>
          <Weather capital= {list[0].capital}/>
        </Row>
  
      </Container> :
        list.map((x,i) => 
          <Row key={i}>
            <Col className="mx-auto border bg-light rounded m-5 p-2 w-25" xs={8} sm={7} md={4} lg={3}>
              <p className="font-weight-bold"> {x.name.common}</p>
              <Button value={x.name.common} onClick={eventSearch} variant="secondary" className="alternate-font-button">
                Mostrar
              </Button>
            </Col>
          </Row>
                )
    return(
      <Container className="mx-auto text-center">
       {countriesList()}
     </Container>  
    )
  }

  export default Countries 