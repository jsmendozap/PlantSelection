import React from 'react'
import {useParams} from "react-router-dom";
          
const Detalles = () => {

  const {id} = useParams();
  console.log(id)

  return (
    <div>prueba</div>
  )
}

export default Detalles