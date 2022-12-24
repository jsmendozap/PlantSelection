import React from 'react'
import ForestIcon from '@mui/icons-material/Forest'
import { MdGrading } from "react-icons/md"
import { BiSearchAlt } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import { HiDocumentAdd } from "react-icons/hi"
import { Items } from 'Components/Items'

const Header = () => {

  const estilos = {
    height: "75px",
    display: "flex",
    alignItems: "center",
    marginLeft: "5vh"
  }

  const iconos = {width: '5vh', height: '3vh', color: 'darkblue'}

  const items = [
    {id: 1, nombre: "Inicio", ruta: '/', icono: (<AiFillHome style={iconos}/>)},
    {id: 2, nombre: "Calificar especie", ruta: '/calificar', icono: (<MdGrading style={iconos}/>)},
    {id: 3, nombre: "Añadir especie", ruta: '/agregar', icono: (<HiDocumentAdd  style={iconos}/>)},
    {id: 4, nombre: "Buscar especie", ruta: '/buscar', icono: (<BiSearchAlt  style={iconos}/>)},
  ]

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
          {
            items.map((item) => {
              return(
                <Items key={item.id} ruta={item.ruta} nombre={item.nombre}>
                  {item.icono}
                </Items>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Header