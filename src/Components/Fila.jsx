import React, { Fragment } from 'react'
import IconButton from '@mui/material/IconButton';
import { TableRow, TableCell, Collapse, Box, Typography, Table, TableHead, TableBody } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { useState } from 'react';

const Fila = ({ especie }) => {

    const [open, setOpen] = useState(false)

    return(
        <Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                    >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton> 
                </TableCell>    
                <TableCell style={{fontStyle: 'italic'}}>{especie.cientifico}</TableCell>
                <TableCell>{especie.comun}</TableCell>
                <TableCell style={{paddingLeft: '50px'}}>{especie.calificacion}</TableCell>
                <TableCell style={{paddingLeft: '50px', cursor: 'pointer'}}>
                    <AspectRatioIcon />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Resumen
                            </Typography>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell>Calificación</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={especie.resumen.id}>
                                        <TableCell>Información general</TableCell>
                                        <TableCell component="th" scope="row">
                                        {especie.resumen.general}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Plantaciones forestales</TableCell>
                                        <TableCell>{especie.resumen.plantaciones}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Germoplasma</TableCell>
                                        <TableCell>{especie.resumen.germoplasma}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Requerimientos ecológicos generales</TableCell>
                                        <TableCell>{especie.resumen.generales}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Requerimientos ecológicos óptimos</TableCell>
                                        <TableCell>{especie.resumen.optimos}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Propagación</TableCell>
                                        <TableCell>{especie.resumen.propagacion}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Silvicultura</TableCell>
                                        <TableCell>{especie.resumen.silvicultura}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Crecimiento</TableCell>
                                        <TableCell>{especie.resumen.crecimiento}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Madera</TableCell>
                                        <TableCell>{especie.resumen.madera}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Plagas</TableCell>
                                        <TableCell>{especie.resumen.plagas}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Bibliografia</TableCell>
                                        <TableCell>{especie.resumen.bibliografia}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>    
                </TableCell>
            </TableRow>
        </Fragment>
    )

}

export default Fila