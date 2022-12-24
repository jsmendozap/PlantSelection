import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Items = ({ ruta, nombre, children }) => {

    const [col, setCol] = useState('gray')
    const items = {marginRight: '5vh', fontSize: 15, cursor: 'pointer'}
    
  return (
    <div>
        <li style={items}>
            <Link to={ruta} style={{color: `${col}`, textDecoration: 'none'}} onMouseEnter={() => setCol('#533E8A')} onMouseLeave={() => setCol('gray')}>
              <i>{children}</i>
              {nombre}
            </Link>
          </li>
    </div>
  )
}
