import React, { useState } from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Input = ({ nombre, etiqueta, tipo }) => {

  const [bib, setBib] = useState([''])
  
  const bibliografia = (e) => {
    setBib(['a', ''])
    console.log(e)
  }

  return (
    <div style={{paddingBottom: '5vh', display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
        <label htmlFor={nombre} style={{paddingBottom: '1vh', fontSize: 18}}>{etiqueta}</label>
        {
            tipo === 'simple' ?
              <input name={nombre} type='text' style={{border: 'solid 1px #BFC0C0', borderRadius: '5px', height: '6vh', width: '60vh'}} className='form-control'/> :
              nombre !== 'bibliografia' ?
                <TextareaAutosize name={nombre} minRows={3} style={{border: 'solid 1px #BFC0C0', borderRadius: '5px', width: etiqueta === 'Plagas y enfermedades' ? '100vh' : '60vh'}}/> :
                bib.map(el => {
                  return (
                    <div style={{display: 'flex', alignItems: 'center', paddingBottom: '2vh'}}>
                      <TextareaAutosize name={nombre} minRows={3} style={{border: 'solid 1px #BFC0C0', borderRadius: '5px', width: '100vh'}}/>
                      <Tooltip title="Agregar fuente bibliográfica">
                        <IconButton name={nombre} color='success' onClick={(e) => {bibliografia(e)}}>
                          <AddCircleIcon name={nombre} style={{height: '6vh', width: '6vh', paddingLeft: '10px'}} />
                        </IconButton>
                      </Tooltip>
                    </div>
                  )
                })
        }
    </div>
  )
}

export default Input