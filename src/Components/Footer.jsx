import React from 'react'

const Footer = () => {

  const estilos = {
  position: 'relative',
  left: 0,
  top: 100,
  bottom: 0,
  width: '100%',
  backgroundColor: '#FBF3F7',
  textAlign: 'center',
  paddingTop: '1vh',
  paddingBottom: '1vh'
  }

  return (
    <footer style={estilos}>
      <p style={{marginBottom: 0, fontWeight: 300}}>Selección Forestal</p>
      <p  style={{marginBottom: 0, fontWeight: 300}}>Universidad Nacional de Colombia</p>
    </footer>
  )
}

export default Footer