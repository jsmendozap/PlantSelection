import React from 'react'
import Grupo from 'Components/Grupo'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'

const Acordion = ({ titulo, contenido, valor}) => {

  return (
    <>
      <AccordionItem eventKey={valor}>
        <AccordionHeader>{titulo}</AccordionHeader>
        <AccordionBody>
          <Grupo grupo={contenido}/>
        </AccordionBody>
      </AccordionItem>
    </> 
  )
}

export default Acordion