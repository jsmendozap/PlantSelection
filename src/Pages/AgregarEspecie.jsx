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
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const AgregarEspecie = () => {

  const form = useRef()

  const agregar = (e) => {
    
    e.preventDefault()
    const formData = new FormData(form.current)
    const formProps = Object.fromEntries(formData)
    console.log(formProps)
    toast.success('Especie guardada exitosamente')
  }

  return (
    <div style={{width: '99%'}}>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3vh'}}>
        <HiDocumentAdd style={{width: '5vh', height: '45px', color: 'orange'}}/>
        <h2>Agregar especie</h2>
      </div>
      <form ref={form} onSubmit={agregar} style={{textAlign: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Acordion titulo='Información General' contenido={general}/>
          <Acordion titulo='Oferta de germoplasma' contenido={germoplasma}/>
          <Acordion titulo='Plantaciones forestales' contenido={plantaciones}/>
          <Acordion titulo='Requerimientos ecológicos generales' contenido={generales}/>
          <Acordion titulo='Requerimientos ecológicos óptimos' contenido={optima}/>
          <Acordion titulo='Propagación' contenido={propagacion}/>
          <Acordion titulo='Silvicultura' contenido={silvicultra}/>
          <Acordion titulo='Crecimiento - Rendimientos' contenido={crecimiento}/>
          <Acordion titulo='Madera' contenido={madera}/>
          <Acordion titulo='Plagas y enfermedades' contenido={plagas}/>
          <Acordion titulo='Bibliografia' contenido={bibliografia}/>
        </div>
        <Button type='submit' variant='contained' startIcon={<SaveOutlinedIcon />}>
          Guardar
        </Button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default AgregarEspecie