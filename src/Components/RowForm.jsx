import React from 'react'
import general from './Formulario.js'

const RowForm = () => {
  return (
    <div>
      <table className="table table-hover" style={{paddingLeft: '50px'}}>
        <thead>
          <tr>
              <th>Parámetro</th>
              <th>Si</th>
              <th>No</th>
              <th>Valor</th>
          </tr>
        </thead>
        <tbody>
            {
              general.map((el) => {
                return (
                  <tr>
                    <td>{el}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
  </div>
  )
}

export default RowForm;
