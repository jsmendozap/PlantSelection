import Footer from 'Components/Footer'
import Header from 'Components/Header'
import React from 'react'

const Publico = ({ children }) => {
  return (
    <div>
        <Header/>
          <main style={{minHeight: 'calc(100vh - 273px)'}}>{children}</main> 
        <Footer/>
    </div>
  )
}

export default Publico