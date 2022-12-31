import React from 'react'

const Descripcion = ({titulo, valor}) => {
  return (
    <div>
        <p style={{textAlign: 'justify'}}>
          <b>{titulo}:</b> {valor === '' ? <span style={{fontStyle: 'italic'}}>No registra información</span> : valor}
        </p>
    </div>
  )
}

export default Descripcion