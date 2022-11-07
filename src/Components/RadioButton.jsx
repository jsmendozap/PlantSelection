import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useTotal } from 'Context/TotalContext'
import React from 'react'
import { useEffect } from 'react'

const RadioButton = ({ name }) => {

  const { total, setTotal } = useTotal()

  useEffect(() => {
    console.log(total)
  }, [total])
  
  const actualizar = (seleccion, array, valor) => {
    const subtotal = seleccion === "si" ?
     parseInt(valor) + parseInt(total[array]) :
     parseInt(total[array]) - parseInt(valor)
    subtotal > 0 ?
     setTotal(prev => ({...prev, [array]: subtotal})) :
     setTotal(prev => ({...prev, [array]: 0}))
  }

  const sub = (seleccion, puntaje) => {
    const valor = puntaje.split(',')[2]
    actualizar(seleccion, name[3], valor)
  }

  return (
    <FormControl>
        <RadioGroup row name={name.toString()} onChange={(e, value) => {sub(value, e.target.name)}}>
          <FormControlLabel value="si" control={<Radio />} label="Si" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
  )
}

export default RadioButton