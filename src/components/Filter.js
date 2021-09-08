import React from 'react'
import {Col, Form} from 'react-bootstrap'



const Filter = ({search,eventSearch}) => {
    return(
      <Col className="mt-5 w-50 mx-auto"  xs={11} sm={7} md={6}>
        <Form.Group>
          <h1 className=" text-center mb-3 font-weight-bold alternate-font-h1">
            Búsqueda de países
          </h1>
          <Form.Control type="text" value={search} onChange={eventSearch} placeholder="Ingrese el país en idioma inglés"/>
        </Form.Group>
      </Col>
    )
  }


  export default Filter