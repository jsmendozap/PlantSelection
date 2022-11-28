import React from 'react'
import RowForm from 'Components/RowForm'

const Card = ({ titulo, informacion }) => {

  const intro = {
    height: "5vh",
    backgroundColor: "#2c3e50",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 23
  }

  const card = {
    borderRadius: "10px",
    width: "100%",
    marginLeft: "15vh",
    marginBottom: "3vh",
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s'
  }

  return (
    <div style = {card}>
      <h4 style = {intro}>{titulo}</h4>
      <RowForm informacion={informacion} estilos={{marginLeft: "15px"}}/>
    </div>
  )
}

export default Card