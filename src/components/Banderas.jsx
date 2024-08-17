import React, { useContext } from 'react'
import spain from '../img/spain.jpg'
import uk from '../img/uk.png'
import france from '../img/francia.png'
import Contexto from '../context/context'
import Provider from '../context/provider'

function Banderas() {
  const {alumno} = useContext(Contexto)
  const {setAlumno} = useContext(Contexto)
  const cambio1 = () =>{
    setAlumno(
      alumno.map((dato,indice)=>
        indice===3
        ? {...dato,idioma:0}
        : {...dato}
      )
    )
  }

  const cambio2 = () =>{
    setAlumno(
      alumno.map((dato,indice)=>
        indice===3
        ? {...dato,idioma:1}
        : {...dato}
      )
    )
  }

  const cambio3 = () =>{
    setAlumno(
      alumno.map((dato,indice)=>
        indice===3
        ? {...dato,idioma:2}
        : {...dato}
      )
    )
  }

  return (
    <>
        <div className='bandera' ><img  onClick={cambio1} src={spain}></img></div>
        <div className='bandera' ><img  onClick={cambio2} src={uk}></img></div>
        <div className='bandera' ><img  onClick={cambio3} src={france}></img></div>
    </>
  )
}

export default Banderas
