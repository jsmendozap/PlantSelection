import React from 'react'
import RadioButton from 'Components/RadioButton'

const RowForm = ({ informacion, estilos }) => {

  return (
    <div>
      <table style={estilos}>
        <thead>
          <tr style={{borderBottom: "1px solid black"}}>
              <th style={{width: "55%", paddingBottom: '2vh'}} >Parámetro</th>
              <th style={{width: "35vh", paddingRight: "10%", paddingBottom: '2vh'}}>Información disponible</th>
              <th style={{width: "20%", display: "flex", justifyContent: "center"}}>Valor</th>
          </tr>
        </thead>
        <tbody>
            {
              informacion.map((el) => {
                return (
                  <tr>
                    <td>{el[0]}</td>
                    <td>
                      <RadioButton />
                    </td>
                    <td>{el[1]}</td>
                  </tr>
                )
              })
            }
            <tr style = {{borderTop: "1px solid black"}}>
              <td style={{fontWeight: 'bold', paddingTop: '2vh', paddingBottom: '2vh'}}>
              Subtotal
              </td>
            </tr>
        </tbody>
      </table>
  </div>
  )
}

export default RowForm;
