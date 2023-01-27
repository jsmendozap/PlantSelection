import React from 'react'
import ForestIcon from '@mui/icons-material/Forest'
import { MdGrading } from "react-icons/md"
import { BiSearchAlt } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import { HiDocumentAdd } from "react-icons/hi"
import { Items } from 'Components/Items'
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { Link } from 'react-router-dom'

const Header = () => {

  const iconos = {width: '5vh', height: '3vh', color: 'darkblue'}

  const items = [
    {id: 1, nombre: "Inicio", ruta: '/', icono: (<AiFillHome style={iconos}/>)},
    {id: 2, nombre: "Calificar especie", ruta: '/calificar', icono: (<MdGrading style={iconos}/>)},
    {id: 3, nombre: "Añadir especie", ruta: '/agregar', icono: (<HiDocumentAdd  style={iconos}/>)},
    {id: 4, nombre: "Buscar especie", ruta: '/buscar', icono: (<BiSearchAlt  style={iconos}/>)},
  ]

  return (
    <Navbar expand='lg' style={{borderBottom: '2px solid #D1D7D8', marginBottom: '5vh', display: 'flex', justifyContent: 'space-between'}}>
      <Container>
        <NavbarBrand as={Link} to='/' style={{fontFamily: 'VAG Rounded Light', fontWeight: 'bold', fontSize: 30}}>
          <ForestIcon style={{width: '34px', height: '34px', marginRight: '5px', color: '#59704F'}}/>
          Seleccion Forestal
        </NavbarBrand>
        <NavbarToggle aria-controls='basic-navbar-nav'/>
        <NavbarCollapse id="basic-navbar-nav" >
          <Nav className='me-auto'>
            {
              items.map((item) => {
                return(
                  <Items key={item.id} ruta={item.ruta} nombre={item.nombre}>
                    {item.icono}
                  </Items>
                )
              })
            }
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default Header