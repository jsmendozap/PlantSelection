import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grupo from 'Components/Grupo'

const Acordion = ({ titulo, contenido }) => {
  return (
    <div>
        <Accordion style={{marginBottom: '2vh'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontWeight: 'bold', fontSize: 18}}>{titulo}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'span'} style={{paddingLeft: '5vh'}}>
                <Grupo grupo={contenido} />
            </Typography>
          </AccordionDetails>
        </Accordion>
    </div> )
}

export default Acordion