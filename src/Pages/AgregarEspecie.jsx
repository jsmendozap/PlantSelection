import React from 'react'
import Card from 'Components/Card'
import { general, plantaciones } from 'Components/Formulario'
import Resumen from 'Components/Resumen'
import { MdGrading } from "react-icons/md"
import { germoplasma } from 'Components/Formulario'

const AgregarEspecie = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3vh'}}>
        <MdGrading style={{width: '8vh', height: '6vh', color: 'orange'}}/>
        <h1 style={{font: 'VAG Rounded Light'}}>Calificar especie</h1>
      </div>
      <div style={{display: 'flex'}}>
        <div>
          <Card titulo="Información general" informacion={general} />
          <Card titulo="Plantaciones forestales" informacion={plantaciones} />
          <Card titulo="Oferta de germoplasma disponible" informacion={germoplasma} />
        </div>
        <Resumen />
      </div>
    </div>
  )
}

export default AgregarEspecie