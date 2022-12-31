import React from 'react'

const Descripcion = ({titulo, valor}) => {
  return (
    <div>
        <p style={{textAlign: 'justify', whiteSpace: 'pre-line'}}>
          {
            titulo !== '' ?
              <><b>{titulo}:</b> {valor === '' ? <span style={{fontStyle: 'italic'}}>No registra información</span> : valor}</> :
              <><b>{titulo}</b> {valor === '' ? <span style={{fontStyle: 'italic'}}>No registra información</span> : valor}</>
          }
        </p>
    </div>
  )
}

export default Descripcion