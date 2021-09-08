import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Col} from 'react-bootstrap'


const Weather = ({capital}) => {
  const [weather,setWeather] = useState(null)
    useEffect(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=576e1dbb40f5ee9d6d7a920a9d7f4678&units=metric`)
        .then(response => {
          setWeather(response.data);
        });
    }, [capital]
    )
    return(
      <Col className="border mx-auto bg-light mt-3 mb-3 w-25" xs={8} sm={7} md={6} lg={5}>
        {
          weather===null ? 
            <h4 className="alternate-font-h4">Cargando...</h4>: 
          <>
          <h2 className="mb-3 alternate-font-h2">El clima en {capital}</h2>
          <h4 className="alternate-font-h4">Temperatura</h4>
          <h5 className="alternate-font-h5 font-weight-bold"> {weather.main.temp}° C</h5> 
          <img style={{width:"7em", height:"7em"}} src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon"/>
          <h4 className="mb-3 alternate-font-h4">Viento</h4>
          <h5 className="alternate-font-h5 font-weight-bold">{weather.wind.speed} mts/seg </h5>
          <h5 className="alternate-font-h5 font-weight-bold">Dirección: {weather.wind.deg}°</h5>
          </>
        }
      </Col>
    )
  }

  export default Weather;