import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const RadioButton = () => {
  return (
    <FormControl>
        <RadioGroup row>
            <FormControlLabel value="si" control={<Radio />} label="Si"  />
            <FormControlLabel value="no" control={<Radio />} label="No"  />
        </RadioGroup>
    </FormControl>
  )
}

export default RadioButton