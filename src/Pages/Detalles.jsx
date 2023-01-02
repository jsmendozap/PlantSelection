import React from 'react'
import {useParams} from "react-router-dom";
import Requerimientos from 'Components/Requerimientos';
import Descripcion from 'Components/Descripcion';
import { useEspecies } from 'Context/EspeciesContext';

const Detalles = () => {

  const {id} = useParams();
  const {especies} = useEspecies()
  
  const especie = especies.filter((especie) => {return especie._id === id})
  
  return (
    <div>
      <h1 style={{display: 'flex', justifyContent: 'center', fontStyle: 'italic'}}>
        {especie[0].cientifico}
      </h1>
      <div style={{marginLeft: '30vh', marginRight: '30vh', marginTop: '8vh', fontSize: 18}}>
        <h3 style={{paddingBottom: '3vh'}}>Información general</h3>
        <Descripcion titulo='Nombre común' valor={especie[0].vulgar}/>
        <Descripcion titulo='Familia' valor={especie[0].familia}/>
        <Descripcion titulo='Taxonomía' valor={especie[0].taxonomia}/>
        <Descripcion titulo='Distribución geográfica' valor={especie[0].distribucion}/>
        <Descripcion titulo='Fenologia' valor={especie[0].fenologia}/>
        <Descripcion titulo='Plantaciones nacionales' valor={especie[0].plantaciones_nacionales}/>
        <Descripcion titulo='Plantaciones departamentales' valor={especie[0].plantaciones_departamentales}/>
        <Descripcion titulo='Calificacion' valor={especie[0].calificacion}/>
        <h3 style={{paddingBottom: '3vh'}}>Requerimientos ecológicos</h3>
        <div style={{display: 'grid',
                      gridTemplateColumns: '33% 33% 33%',
                      textAlign: 'center'}}>
          <h5>Parámetro</h5>
          <h5>Generales</h5>
          <h5>Óptimos</h5>
        </div>
        <Requerimientos titulo='Altitud'
                        general={especie[0].distribucion_altitudinal}
                        optimo={especie[0].distribucion_altitudinal_optima}/>
        <Requerimientos titulo='Temperatura'
                        general={especie[0].temperatura}
                        optimo={especie[0].temperatura_optima}/>
        <Requerimientos titulo='Precipitación'
                        general={especie[0].precipitacion}
                        optimo={especie[0].precipitacion_optima}/>
        <Requerimientos titulo='Distribución de la precipitación'
                        general={especie[0].distribucion_pp}
                        optimo={especie[0].distribucion_pp_optima}/>
        <Requerimientos titulo='pH del suelo'
                        general={especie[0].ph}
                        optimo={especie[0].ph_optima}/>
        <Requerimientos titulo='Profundidad del suelo'
                        general={especie[0].profundidad}
                        optimo={especie[0].profundidad_optima}/>
        <Requerimientos titulo='Pendiente'
                        general={especie[0].pendiente}
                        optimo={especie[0].pendiente}/>                
        <Requerimientos titulo='Fertilidad del suelo'
                        general={especie[0].fertilidad}
                        optimo={especie[0].fertilidad_optima}/>
        <h3 style={{paddingBottom: '3vh'}}>Vivero</h3>
        <Descripcion titulo='Jardín y/o minijardín clonal' valor={especie[0].jardin}/>
        <Descripcion titulo='Huerto semillero' valor={especie[0].huerto_semillero}/>
        <Descripcion titulo='Fuente identificada' valor={especie[0].fuente_identificada}/>
        <Descripcion titulo='Rodal semillero' valor={especie[0].rodal_semillero}/>
        <Descripcion titulo='Tratamiento pregerminativo' valor={especie[0].t_pregerminativo}/>
        <Descripcion titulo='Tiempo de producción de plántulas' valor={especie[0].produccion_plantulas}/>  
        <h3 style={{paddingBottom: '3vh'}}>Plantación y silvicultura</h3>
        <Descripcion titulo='Densidad de plantación' valor={especie[0].densidad}/>  
        <Descripcion titulo='Edad de podas' valor={especie[0].edad_podas}/>  
        <Descripcion titulo='Altura de podas' valor={especie[0].altura_podas}/>  
        <Descripcion titulo='Edad del raleo' valor={especie[0].edad_raleo}/>  
        <Descripcion titulo='Densidad del raleo' valor={especie[0].densidad_raleo}/>  
        <Descripcion titulo='Edad de la entresaca' valor={especie[0].edad_entresaca}/>  
        <Descripcion titulo='Densidad de la entresaca' valor={especie[0].densidad_entresaca}/>  
        <Descripcion titulo='Relación DAP/Ht' valor={especie[0].relacion_dap_ht}/>  
        <Descripcion titulo='Turno de cosecha' valor={especie[0].turno}/>  
        <Descripcion titulo='Volumen del turno' valor={especie[0].volumen_turno}/>  
        <Descripcion titulo='Incremento medio anual (IMA)' valor={especie[0].ima}/>
        <Descripcion titulo='Incremento corriente anual (ICA)' valor={especie[0].ica}/>  
        <Descripcion titulo='Ecuaciones de crecimiento' valor={especie[0].ecuacion}/> 
        <h3 style={{paddingBottom: '3vh'}}>Madera</h3>
        <Descripcion titulo='Usos específicos' valor={especie[0].uso}/> 
        <Descripcion titulo='Precio madera en pie' valor={especie[0].precio_madera_pie}/> 
        <Descripcion titulo='Precio madera rolliza' valor={especie[0].precio_madera_rolliza}/>
        <Descripcion titulo='Precio madera dimensionada' valor={especie[0].precio_madera_dimensionada}/> 
        <Descripcion titulo='Plagas y enfermedades' valor={especie[0].plagas}/> 
        <h3 style={{paddingBottom: '3vh'}}>Bibliografía</h3>
        <Descripcion titulo='' valor={especie[0].bibliografia}/> 
      </div>
    </div>
  )
}

export default Detalles