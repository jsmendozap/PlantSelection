import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { TotalContext } from 'Context/TotalContext';
import Index from "Pages/Index";
import CalificarEspecie from "Pages/CalificarEspecie";
import Header from "Components/Header";
import AgregarEspecie from "Pages/AgregarEspecie";
import BuscarEspecie from "Pages/BuscarEspecie";

const Router = () => {

    const [total, setTotal] = useState(
        {"Información general": 0, 
        "Plantaciones forestales": 0,
        "Oferta de germoplasma disponible": 0,
        "Requerimientos ecológicos generales": 0,
        "Requerimientos ecológicos óptimos": 0,
        "Propagación": 0,
        "Silvicultura": 0,
        "Crecimiento/Rendimientos": 0,
        "Madera": 0,
        "Plagas y enfermedades": 0,
        "Bibliografía": 0
      }
      )

    return(
        <BrowserRouter>
            <Header />
            <TotalContext.Provider value={{ total, setTotal }}>
                <Routes>
                    <Route path="/" element={<Index />}/>
                    <Route path="/calificar" element={<CalificarEspecie />}/>
                    <Route path="/agregar" element={<AgregarEspecie />}/>
                    <Route path="/buscar" element={<BuscarEspecie />}/>
                </Routes>
            </TotalContext.Provider>
        </BrowserRouter>
    )
}

export default Router;