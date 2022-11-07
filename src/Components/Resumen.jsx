import React from 'react'
import { useTotal } from 'Context/TotalContext'

const Resumen = () => {

    const { total } = useTotal()

    const intro = {
        height: "5vh",
        backgroundColor: "#707272",
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
        width: "30%",
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        right: '14vh'
      }

    return (
        <div style={card}>
            <h4 style={intro}>Resumen</h4>
            <table style={{margin: "2vh"}}>
                <thead>
                <tr style={{borderBottom: "1px solid black"}}>
                    <th>Item</th>
                    <th>Calificación</th>
                </tr>
                </thead>
                <tbody>
                    {Object.entries(total).map((el) => {
                        return (
                        <tr>
                            <td>{el[0]}</td>
                            <td>{el[1]}</td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Resumen