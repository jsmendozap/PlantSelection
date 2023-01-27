import React, { useRef } from 'react'
import { HiDocumentAdd } from "react-icons/hi"
import { general } from 'Components/Campos'
import { plantaciones } from 'Components/Campos'
import { germoplasma } from 'Components/Campos'
import { generales } from 'Components/Campos'
import Acordion from 'Components/Acordion'
import { optima } from 'Components/Campos'
import { propagacion } from 'Components/Campos'
import { silvicultra } from 'Components/Campos'
import { crecimiento } from 'Components/Campos'
import { madera } from 'Components/Campos'
import { plagas } from 'Components/Campos'
import { bibliografia } from 'Components/Campos'
import { ToastContainer } from 'react-toastify';
import { Button } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import calificacion from 'Components/calificacion.json'
import sortKeys from 'sort-keys'
import { crearEspecie } from 'utils/api'
import { Accordion } from 'react-bootstrap'

const AgregarEspecie = () => {

  const form = useRef()
  
  const calificar = (form, valores) => {
    const evaluacion = Object.values(form).map((el) => el !== "");
    const resultado = Object.values(valores).map((el, index) => (evaluacion[index] ? el : 0));
    return resultado.reduce((partialSum, valor) => partialSum + valor, 0);
  }

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const agregar = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const formProps = sortKeys(Object.fromEntries(formData))
    crearEspecie({...formProps, 'calificacion': calificar(formProps, calificacion)})
    form.current.reset()
    sleep(1000).then(r => {
      window.location.reload()
    })
  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3vh'}}>
        <HiDocumentAdd style={{width: '5vh', height: '45px', color: 'orange'}}/>
        <h2>Agregar especie</h2>
      </div>
      <form ref={form} onSubmit={agregar} style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Accordion style={{marginBottom: '5vh', width: '70%'}}>
          <Acordion titulo='Información General' contenido={general} valor="0"/>
          <Acordion titulo='Oferta de germoplasma' contenido={germoplasma} valor="1"/>
          <Acordion titulo='Plantaciones forestales' contenido={plantaciones} valor="2"/>
          <Acordion titulo='Requerimientos ecológicos generales' contenido={generales} valor="3"/>
          <Acordion titulo='Requerimientos ecológicos óptimos' contenido={optima} valor="4"/>
          <Acordion titulo='Propagación' contenido={propagacion} valor="5"/>
          <Acordion titulo='Silvicultura' contenido={silvicultra} valor="6"/>
          <Acordion titulo='Crecimiento - Rendimientos' contenido={crecimiento} valor="7"/>
          <Acordion titulo='Madera' contenido={madera} valor="8"/>
          <Acordion titulo='Plagas y enfermedades' contenido={plagas} valor="9"/>
          <Acordion titulo='Bibliografia' contenido={bibliografia} valor="10"/>
        </Accordion>
        <Button type='submit' variant='contained' startIcon={<SaveOutlinedIcon />}>
          Guardar
        </Button>
      </form>
      <ToastContainer />
    </>
  )
}

export default AgregarEspecie
