import React, { useContext,useState } from 'react'
import Profesora from '../components/Profesora'
import Lugar from '../components/Lugar'
import Contexto from '../context/context'

function Cuerpo() {
  const {alumno}=useContext(Contexto)
  const idioma = alumno[3].idioma
  
  const [ocultar1,setOcultar1] = useState(false);
  const [ocultar2,setOcultar2] = useState(false);
  
  const mostrar1 = () =>{
    setOcultar1(!ocultar1)
    setOcultar2(false)
  }
  const mostrar2 = () =>{
    setOcultar2(!ocultar2)
    setOcultar1(false)
  }

  return (
    <div>
      <h2>{alumno[idioma].titulo}</h2>
      <h3>{alumno[idioma].texto}</h3>
      <div className='botones'>
        <button className='boton' onClick={mostrar1}>{alumno[idioma].boton1}</button>
        <button className='boton' onClick={mostrar2}>{alumno[idioma].boton2}</button>
      </div>
      {
        ocultar1
        ? <Profesora/>
        : null
      }

      {ocultar2
        ? <Lugar/>
        : null
      }
    </div>
  )
}

export default Cuerpo
