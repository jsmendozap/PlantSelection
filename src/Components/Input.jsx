import React from 'react'

const Input = ({ nombre, etiqueta, tipo }) => {
  return (
    <div style={{paddingBottom: '5vh', display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
        <label htmlFor={nombre} style={{paddingBottom: '1vh', fontSize: 20}}>{etiqueta}</label>
        {
            tipo === 'simple' ?
            <input name={nombre} type='text' style={{border: 'solid 1px #BFC0C0', borderRadius: '5px', height: '6vh', width: '60vh'}} className='form-control'/> :
            <textarea name={nombre} style={{border: 'solid 1px #BFC0C0', borderRadius: '5px', height: '15vh', width: '60vh'}}/>
        }
    </div>
  )
}

export default Input