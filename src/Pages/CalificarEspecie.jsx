import React from 'react'
import Card from 'Components/Card'
import { general, plantaciones } from 'Components/Formulario'
import Resumen from 'Components/Resumen'
import { MdGrading } from "react-icons/md"
import { germoplasma } from 'Components/Formulario'
import { especificos } from 'Components/Formulario'
import { generales } from 'Components/Formulario'
import { propagacion } from 'Components/Formulario'
import { silvicultra } from 'Components/Formulario'
import { crecimiento } from 'Components/Formulario'
import { madera } from 'Components/Formulario'
import { plagas } from 'Components/Formulario'
import { bibliografia } from 'Components/Formulario'

const CalificarEspecie = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3vh'}}>
        <MdGrading style={{width: '8vh', height: '6vh', color: 'orange'}}/>
        <h1 style={{font: 'VAG Rounded Light', fontSize: 36}}>Calificar especie</h1>
      </div>
      <div style={{display: 'flex'}}>
        <div>
          <Card titulo="Información general" informacion={general} />
          <Card titulo="Plantaciones forestales" informacion={plantaciones} />
          <Card titulo="Oferta de germoplasma disponible" informacion={germoplasma} />
          <Card titulo="Requerimientos ecológicos generales" informacion={generales} />
          <Card titulo="Requerimientos ecológicos óptimos" informacion={especificos}/>
          <Card titulo="Propagación" informacion={propagacion} />
          <Card titulo="Silvicultura" informacion={silvicultra} />
          <Card titulo="Crecimiento - Rendimientos" informacion={crecimiento} />
          <Card titulo="Madera" informacion={madera} />
          <Card titulo="Plagas y enfermedades" informacion={plagas} />
          <Card titulo="Bibliografía" informacion={bibliografia} />
        </div>
        <Resumen />
      </div>
    </div>
  )
}

export default CalificarEspecie