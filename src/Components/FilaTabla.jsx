import React from 'react'
import {TableRow, TableCell } from '@mui/material';

const FilaTabla = ({ calificaciones }) => {
  return (
    <div>
        {
            calificaciones.map((calificacion) => {
                return(
                    <TableRow>
                        <TableCell>{Object.keys(calificacion)}</TableCell>
                        <TableCell>{calificacion}</TableCell>
                    </TableRow>
                )
            })
        }
    </div>
  )
}

export default FilaTabla