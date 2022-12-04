import React from 'react'
import Input from 'Components/Input'

const Grupo = ({ grupo }) => {

  return (
    <div style={{display: 'grid', gridTemplateColumns: '70vh 70vh', justifyContent: 'space-evenly'}} >
        {
            grupo.map((el) => {
                return <Input etiqueta={el[2]} nombre={el[1]} tipo={el[3]}/>
            })
        }
    </div>
  )
}

export default Grupo