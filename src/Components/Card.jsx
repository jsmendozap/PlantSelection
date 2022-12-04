import React from 'react'
import RowForm from 'Components/RowForm'
import Grupo from 'Components/Grupo'

const Card = ({ titulo, informacion, tipo, grupo, estilos }) => {

  return (
    <div style = {estilos.card}>
      <h4 style = {estilos.intro}>{titulo}</h4>
      {
        tipo === 'agregar' ?
        <Grupo grupo={grupo}/> :
        <RowForm informacion={informacion} estilos={{marginLeft: "15px"}}/> 
      }
    </div>
  )
}

export default Card