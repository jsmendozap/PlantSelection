import React from 'react'
import Card from 'Components/Card'
import { general, plantaciones } from 'Components/Formulario'

const AgregarEspecie = () => {
  return (
    <div>
        <Card titulo="Información general" informacion={general} />
        <Card titulo="Plantaciones forestales" informacion={plantaciones} />
    </div>
  )
}

export default AgregarEspecie