import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { TotalContext } from 'Context/TotalContext';
import { especiesContext } from "Context/EspeciesContext";
import Index from "Pages/Index";
import CalificarEspecie from "Pages/CalificarEspecie";
import AgregarEspecie from "Pages/AgregarEspecie";
import BuscarEspecie from "Pages/BuscarEspecie";
import Detalles from "Pages/Detalles";
import Publico from "Layout/Publico";
import { obtenerEspecies } from "utils/api";

const Router = () => {

    const [total, setTotal] = useState(
        {"Información general": 5, 
        "Plantaciones forestales": 5,
        "Oferta de germoplasma disponible": 10,
        "Requerimientos ecológicos generales": 4,
        "Requerimientos ecológicos óptimos": 8,
        "Propagación": 5,
        "Silvicultura": 24,
        "Crecimiento/Rendimientos": 20,
        "Madera": 10,
        "Plagas y enfermedades": 5,
        "Bibliografía": 4
      }
      )

    const [especies, setEspecies] = useState([])

    useEffect(() => {
        obtenerEspecies(setEspecies);
    }, [setEspecies])

    return(
        <BrowserRouter>
            <Publico>
                <especiesContext.Provider value={{especies, setEspecies}} >
                <TotalContext.Provider value={{ total, setTotal }}>
                    <Routes>
                        <Route path="/" element={<Index />}/>
                        <Route path="/calificar" element={<CalificarEspecie />}/>
                        <Route path="/agregar" element={<AgregarEspecie />}/>
                        <Route path="/buscar" element={<BuscarEspecie />}/>
                        <Route path="/buscar/:id" element={<Detalles />}/>
                    </Routes>
                </TotalContext.Provider>
                </especiesContext.Provider>
            </Publico>
        </BrowserRouter>
    )
}

export default Router;