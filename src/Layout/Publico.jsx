import Footer from 'Components/Footer'
import Header from 'Components/Header'
import React from 'react'

const Publico = ({ children }) => {
  return (
    <div>
        <Header/>
          <main style={{minHeight: '56.2vh'}}>{children}</main> 
        <Footer/>
    </div>
  )
}

export default Publico