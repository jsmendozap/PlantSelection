import React from 'react'
import { GiForest } from "react-icons/gi"
import { MdGrading } from "react-icons/md"
import { BiSearchAlt } from "react-icons/bi"
import { BsFillQuestionCircleFill } from "react-icons/bs"

const Header = () => {

  const estilos = {
    height: "12vh",
    display: "flex",
    alignItems: "center",
    marginBottom: "2vh",
    marginLeft: "5vh"
  }

  const items = {marginRight: '5vh', fontSize: 16, cursor: 'pointer', color: 'gray'}

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <div style={estilos}>
        <GiForest style={{width: '10vh', height: '7vh', color: 'darkgreen'}}/>
        <h4 style={{font: 'VAG Rounded Light'}}>Selección de especies para plantaciones forestales</h4>
      </div>
      <div>
        <ul style={{listStyle: 'none', display: 'flex'}}>
          <li style={items}>
            <MdGrading style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
            Calificar especie
          </li>
          <li style={items}>
            <BiSearchAlt style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
            Buscar especie
          </li>
          <li style={items}>
            <BsFillQuestionCircleFill style={{width: '4vh', height: '2.5vh', color: 'darkblue'}}/>
            Acerca
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header