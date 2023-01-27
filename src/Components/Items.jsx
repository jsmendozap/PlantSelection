import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Items = ({ ruta, nombre, children }) => {

  const [col, setCol] = useState('gray')
    
  return (
    <>
      <NavLink as={Link} to={ruta} style={{color: `${col}`, textDecoration: 'none'}} onMouseEnter={() => setCol('#533E8A')} onMouseLeave={() => setCol('gray')}>
        <i>{children}</i>
        {nombre}
      </NavLink>
    </>
  )
}
