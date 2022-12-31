import React from 'react'

const Requerimientos = ({titulo, general, optimo}) => {
  return (
    <div style={{display: 'grid',
                 gridTemplateColumns: '33% 33% 33%',
                 textAlign: 'center',
                 paddingBottom: '2vh',
                 alignItems: 'center'}}>
        <span>{titulo}</span>
        <span>{general === '' ? '--' : general}</span>
        <span>{optimo === '' ? '--' : optimo}</span>
    </div>
  )
}

export default Requerimientos