const general = [
  [1.1, "Descripción taxonómica", 1, "Información general"],
  [1.2, "Distribución geográfica", 1, "Información general"],
  [1.3, "Fenología", 3, "Información general"],
];

const plantaciones = [
  [2.1, "Regional/Nacional", 2, "Plantaciones forestales"],
  [2.2, "Departamental/Municipal", 3, "Plantaciones forestales"],
];

const germoplasma = [
  [3.1, "Jardín y/o minijardín clonal", 5, "Oferta de germoplasma disponible"],
  [3.2, "Huerto semillero", 2, "Oferta de germoplasma disponible"],
  [3.3, "Rodal semillero", 2, "Oferta de germoplasma disponible"],
  [3.4, "Fuente identificada", 1, "Oferta de germoplasma disponible"],
];

const generales = [
  [4.1, "Precipitación promedio", 0.25, "Requerimientos ecológicos generales"],
  [
    4.2,
    "Distribución de la precipitación",
    0.25,
    "Requerimientos ecológicos generales",
  ],
  [4.3, "Distribución altitudinal", 0.5, "Requerimientos ecológicos generales"],
  [4.4, "Temperatura", 0.5, "Requerimientos ecológicos generales"],
  [4.5, "pH del suelo", 0.5, "Requerimientos ecológicos generales"],
  [4.6, "Profundidad del suelo", 0.5, "Requerimientos ecológicos generales"],
  [4.7, "Fertilidad del suelo", 0.5, "Requerimientos ecológicos generales"],
  [4.8, "Pendiente", 0.5, "Requerimientos ecológicos generales"],
];

const especificos = [
  [5.1, "Precipitación promedio", 1, "Requerimientos ecológicos óptimos"],
  [
    5.2,
    "Distribución de la precipitación",
    1,
    "Requerimientos ecológicos óptimos",
  ],
  [5.3, "Distribución altitudinal", 1, "Requerimientos ecológicos óptimos"],
  [5.4, "Temperatura", 1, "Requerimientos ecológicos óptimos"],
  [5.5, "pH del suelo", 1, "Requerimientos ecológicos óptimos"],
  [5.6, "Profundidad del suelo", 1, "Requerimientos ecológicos óptimos"],
  [5.7, "Fertilidad del suelo", 1, "Requerimientos ecológicos óptimos"],
  [5.8, "Pendiente", 1, "Requerimientos ecológicos óptimos"],
];

const propagacion = [
  [6.1, "Tratamiento pregerminativo", 2, "Propagación"],
  [6.2, "Porcentaje de germinación", 2, "Propagación"],
  [6.3, "Tiempo de producción de plántulas", 1, "Propagación"],
];

const silvicultra = [
  [7.1, "Densidad de plantación", 1, "Silvicultura"],
  [7.2, "Edad de podas", 2, "Silvicultura"],
  [7.3, "Altura de podas", 2, "Silvicultura"],
  [7.4, "Edad del raleo", 2, "Silvicultura"],
  [7.5, "Densidad del raleo", 3, "Silvicultura"],
  [7.6, "Edad de la entresaca", 3, "Silvicultura"],
  [7.7, "Densidad de la entresaca", 4, "Silvicultura"],
  [7.8, "Relación DAP/Ht", 3, "Silvicultura"],
  [7.9, "Edad del turno", 2, "Silvicultura"],
  [7.101, "Volumen del turno", 2, "Silvicultura"],
];

const crecimiento = [
  [8.1, "Incremento medio anual", 5, "Crecimiento/Rendimientos"],
  [8.2, "Incremento corriente anual", 5, "Crecimiento/Rendimientos"],
  [8.3, "Ecuaciones de crecimiento", 10, "Crecimiento/Rendimientos"],
];

const madera = [
  [9.1, "Usos específicos", 2, "Madera"],
  [9.2, "Precio de madera en pie", 3, "Madera"],
  [9.3, "Precio de madera rolliza", 3, "Madera"],
  [9.4, "Precio de madera dimensionada", 2, "Madera"],
];

const plagas = [[10.1, "Plagas y enfermedades", 5, "Plagas y enfermedades"]];

const bibliografia = [[11.1, "Bibliografia", 4, "Bibliografía"]];

export {
  general,
  plantaciones,
  germoplasma,
  generales,
  especificos,
  propagacion,
  silvicultra,
  crecimiento,
  madera,
  plagas,
  bibliografia,
};
