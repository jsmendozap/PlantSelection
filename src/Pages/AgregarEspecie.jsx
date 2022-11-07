import React from 'react'
import Card from 'Components/Card'
import { general, plantaciones } from 'Components/Formulario'
import Resumen from 'Components/Resumen'

const AgregarEspecie = () => {
  return (
    <div style={{display: 'flex'}}>
      <div>
        <Card titulo="Información general" informacion={general} />
        <Card titulo="Plantaciones forestales" informacion={plantaciones} />
      </div>
      <Resumen />
    </div>
  )
}

export default AgregarEspecie