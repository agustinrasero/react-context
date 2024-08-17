import React, { useContext } from 'react'
import Contexto from '../context/context'

function Lugar() {
  const {alumno} = useContext(Contexto)
  const idioma = alumno[3].idioma
  return (
    <div className='lugar'>
      <h1>{alumno[idioma].boton2}</h1>
      <div className='texto'>
      {alumno[idioma].direccion}
      </div>
    </div>
  )
}

export default Lugar
