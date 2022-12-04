import React from 'react'
import Card from 'Components/Card'
import { general, plantaciones } from 'Components/Formulario'
import Resumen from 'Components/Resumen'
import { MdGrading } from "react-icons/md"
import { germoplasma } from 'Components/Formulario'
import { especificos } from 'Components/Formulario'
import { generales } from 'Components/Formulario'
import { propagacion } from 'Components/Formulario'
import { silvicultra } from 'Components/Formulario'
import { crecimiento } from 'Components/Formulario'
import { madera } from 'Components/Formulario'
import { plagas } from 'Components/Formulario'
import { bibliografia } from 'Components/Formulario'

const CalificarEspecie = () => {

  const estilos = {
    intro: {
      height: "5vh",
      backgroundColor: "#2c3e50",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 23
    },
    card: {
    borderRadius: "10px",
    width: "100%",
    marginLeft: "15vh",
    marginBottom: "3vh",
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s'
    }
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3vh'}}>
        <MdGrading style={{width: '8vh', height: '6vh', color: 'orange'}}/>
        <h1 style={{font: 'VAG Rounded Light', fontSize: 36}}>Calificar especie</h1>
      </div>
      <div style={{display: 'flex'}}>
        <div>
          <Card titulo="Información general" informacion={general} estilos={estilos}/>
          <Card titulo="Plantaciones forestales" informacion={plantaciones} estilos={estilos}/>
          <Card titulo="Oferta de germoplasma disponible" informacion={germoplasma} estilos={estilos}/>
          <Card titulo="Requerimientos ecológicos generales" informacion={generales} estilos={estilos}/>
          <Card titulo="Requerimientos ecológicos óptimos" informacion={especificos} estilos={estilos}/>
          <Card titulo="Propagación" informacion={propagacion} estilos={estilos}/>
          <Card titulo="Silvicultura" informacion={silvicultra} estilos={estilos}/>
          <Card titulo="Crecimiento - Rendimientos" informacion={crecimiento} estilos={estilos}/>
          <Card titulo="Madera" informacion={madera} estilos={estilos}/>
          <Card titulo="Plagas y enfermedades" informacion={plagas} estilos={estilos}/>
          <Card titulo="Bibliografía" informacion={bibliografia} estilos={estilos}/>
        </div>
        <Resumen />
      </div>
    </div>
  )
}

export default CalificarEspecie