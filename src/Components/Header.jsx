import React from 'react'
import { GiForest } from "react-icons/gi"
import { MdGrading } from "react-icons/md"
import { BiSearchAlt } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import { HiDocumentAdd } from "react-icons/hi"
import { Link } from 'react-router-dom'

const Header = () => {

  const estilos = {
    height: "12vh",
    display: "flex",
    alignItems: "center",
    marginLeft: "5vh",
    marginBottom: "2vh"
  }

  const items = {marginRight: '5vh', fontSize: 16, cursor: 'pointer'}

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
            <Link to="/" style={{color: 'gray', textDecoration: 'none'}}>
              <AiFillHome style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
              Inicio
            </Link>
          </li>
          <li style={items}>
            <Link to="/calificar" style={{color: 'gray', textDecoration: 'none'}}>
              <MdGrading style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
              Calificar especie
            </Link> 
          </li>
          <li style={items}>
            <Link to="/agregar" style={{color: 'gray', textDecoration: 'none'}}>
              <HiDocumentAdd style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
              Añadir especie
            </Link>
          </li>
          <li style={items}>
            <Link to="/buscar" style={{color: 'gray', textDecoration: 'none'}}>
              <BiSearchAlt style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
              Buscar especie
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header