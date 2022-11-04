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
  }

  const card = {
    borderRadius: "10px",
    borderColor: "gray",
    borderWidth: "2px",
    borderStyle: "solid",
    width: "50%",
    marginLeft: "15vh",
    marginBottom: "3vh" 
  }

  return (
    <div style = {card}>
      <h4 style = {intro}>{titulo}</h4>
      <RowForm informacion={informacion} estilos={{marginLeft: "15px"}}/>
    </div>
  )
}

export default Card