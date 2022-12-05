import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material'
import React from 'react'
import { BiSearchAlt } from "react-icons/bi"
import Paper from '@mui/material/Paper';
import especies from 'Pages/especies'
import Fila from 'Components/Fila';

const BuscarEspecie = () => {

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3vh'}}>
        <BiSearchAlt style={{width: '8vh', height: '45px', color: 'orange'}}/>
        <h2>Buscar especie</h2>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <TableContainer component={Paper} style={{width: '70%'}}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell style={{fontSize: 18}}>Nombre científico</TableCell>
                <TableCell style={{fontSize: 18}}>Nombre común</TableCell>
                <TableCell style={{fontSize: 18}}>Calificación</TableCell>
                <TableCell style={{fontSize: 18}}>Más información</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
                especies.map((especie) => {
                    return(
                        <Fila key={especie.id}  especie={especie} />
                    )
                })
            }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default BuscarEspecie