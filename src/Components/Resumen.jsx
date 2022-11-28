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
        width: "30%",
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        right: '14vh',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s'
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
                        console.log(el);
                        return (
                        <tr>
                            <td>{el[0]}</td>
                            <td style={{textAlign: "center"}}>
                                {el[1]}
                            </td>
                        </tr>
                        )
                    })
                    }
                    <tr style={{borderTop: "1px solid black"}}>
                        <td style={{fontWeight: 'bold'}}>Total</td>
                        <td style={{textAlign: 'center'}}>
                            {
                                Object.values(total).reduce((sum, value) => sum + value)
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Resumen