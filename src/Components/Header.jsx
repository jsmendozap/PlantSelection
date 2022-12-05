import React from 'react'
import ForestIcon from '@mui/icons-material/Forest'
import { MdGrading } from "react-icons/md"
import { BiSearchAlt } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import { HiDocumentAdd } from "react-icons/hi"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

  const estilos = {
    height: "75px",
    display: "flex",
    alignItems: "center",
    marginLeft: "5vh"
  }

  const [inicio, setInicio] = useState('gray')
  const [calificar, setCalificar] = useState('gray')
  const [agregar, setAgregar] = useState('gray')
  const [buscar, setBuscar] = useState('gray')

  const items = {marginRight: '5vh', fontSize: 15, cursor: 'pointer'}

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4vh', borderBottom: '2px solid #D1D7D8'}}>
      <div style={estilos}>
        <ForestIcon style={{width: '34px', height: '34px', marginRight: '5px', color: '#59704F'}}/>
        <h2 style={{fontFamily: 'VAG Rounded Light', fontWeight: 'bold', fontSize: 30, margin: '0px'}}>
          Selección forestal
        </h2>
      </div>
      <div>
        <ul style={{listStyle: 'none', display: 'flex', margin: '0'}}>
          <li style={items}>
            <Link to="/" style={{color: `${inicio}`, textDecoration: 'none'}} onMouseEnter={() => setInicio('#533E8A')} onMouseLeave={() => setInicio('gray')}>
              <AiFillHome style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
              Inicio
            </Link>
          </li>
          <li style={items}>
            <Link to="/calificar" style={{color: `${calificar}`, textDecoration: 'none'}} onMouseEnter={() => setCalificar('#533E8A')} onMouseLeave={() => setCalificar('gray')}>
              <MdGrading style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
              Calificar especie
            </Link> 
          </li>
          <li style={items}>
            <Link to="/agregar" style={{color: `${agregar}`, textDecoration: 'none'}} onMouseEnter={() => setAgregar('#533E8A')} onMouseLeave={() => setAgregar('gray')}>
              <HiDocumentAdd style={{width: '5vh', height: '3vh', color: 'darkblue'}}/>
              Añadir especie
            </Link>
          </li>
          <li style={items}>
            <Link to="/buscar" style={{color: `${buscar}`, textDecoration: 'none'}} onMouseEnter={() => setBuscar('#533E8A')} onMouseLeave={() => setBuscar('gray')}>
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