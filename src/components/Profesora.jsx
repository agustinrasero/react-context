import React, { useContext } from 'react'
import Contexto from '../context/context'


function Profesora() {
  const {alumno} = useContext(Contexto)
  const idioma = alumno[3].idioma


  return (
    <div className='profesora'>
      <h1>{alumno[idioma].boton1}</h1>
      <div className='foto' >
        <img className="imagen" src={`../img/${alumno[idioma].foto}`}></img>
      </div>
      <div className='nombre'>
      {alumno[idioma].nombre}
      </div>
    </div>
  )
}

export default Profesora
