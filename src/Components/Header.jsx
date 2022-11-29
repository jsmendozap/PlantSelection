import React from 'react'
import { GiForest } from "react-icons/gi"
import { MdGrading } from "react-icons/md"
import { BiSearchAlt } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import { HiDocumentAdd } from "react-icons/hi"

const Header = () => {

  const estilos = {
    height: "12vh",
    display: "flex",
    alignItems: "center",
    marginLeft: "5vh",
    marginBottom: "2vh"
  }

  const items = {marginRight: '5vh', fontSize: 16, cursor: 'pointer', color: 'gray'}

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <div style={estilos}>
        <GiForest style={{width: '10vh', height: '8vh', color: 'darkgreen'}}/>
        <h2 style={{font: 'VAG Rounded Light', fontSize: 35}}>
          Selección forestal
        </h2>
      </div>
      <div>
        <ul style={{listStyle: 'none', display: 'flex'}}>
          <li style={items}>
            <AiFillHome style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
            Inicio
          </li>
          <li style={items}>
            <MdGrading style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
            Calificar especie
          </li>
          <li style={items}>
            <HiDocumentAdd style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
            Añadir especie
          </li>
          <li style={items}>
            <BiSearchAlt style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
            Buscar especie
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header