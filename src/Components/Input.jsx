import React from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Input = ({ nombre, etiqueta, tipo }) => {

  return (
    <div style={{paddingBottom: '5vh', display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
      <label htmlFor={nombre} style={{paddingBottom: '1vh', fontSize: 18}}>{etiqueta}</label>
      {
        tipo === 'simple' ?
          <input name={nombre} type='text' style={{border: 'solid 1px #BFC0C0', borderRadius: '5px', height: '6vh', width: '45vh'}} className='form-control'/> :
          <TextareaAutosize name={nombre} minRows={3} style={{border: 'solid 1px #BFC0C0', borderRadius: '5px', width: nombre === 'plagas' | nombre === 'bibliografia' ? '120vh' : '45vh'}}/> 
      }
    </div>
  )
}

export default Input