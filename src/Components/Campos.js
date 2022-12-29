const general = [
  [1.1, "cientifico", "Nombre científico", "simple"],
  [1.2, "vulgar", "Nombre común", "simple"],
  [1.3, "familia", "Familia", "simple"],
  [1.4, "taxonomia", "Descripción taxonómica", "compuesto"],
  [1.5, "distribucion", "Distribución geográfica", "compuesto"],
  [1.6, "fenologia", "Fenología", "Compuesto"],
];

const plantaciones = [
  [2.1, "plantaciones_nacionales", "Plantaciones nacionales", "compuesto"],
  [
    2.2,
    "plantaciones_departamentales",
    "Plantaciones departamentales",
    "compuesto",
  ],
];

const germoplasma = [
  [3.1, "jardin", "Jardin/Minijardín clonal", "compuesto"],
  [3.2, "huerto_semillero", "Huerto semillero", "simple"],
  [3.3, "rodal_semillero", "Rodal semillero", "simple"],
  [3.4, "fuente_identificada", "Fuente identificada", "simple"],
];

const generales = [
  [4.1, "precipitacion", "Precipitación promedio", "simple"],
  [4.2, "distribucion_pp", "Distribución de la precipitación", "simple"],
  [4.3, "distribucion_altitudinal", "Distribución altitudinal", "simple"],
  [4.4, "temperatura", "Temperatura", "simple"],
  [4.5, "ph", "pH del suelo", "simple"],
  [4.6, "profundidad", "Profundidad del suelo", "simple"],
  [4.7, "fertilidad", "Fertilidad del suelo", "compuesto"],
  [4.8, "pendiente", "Pendiente", "simple"],
];

const optima = [
  [5.1, "precipitacion_optima", "Precipitación promedio", "simple"],
  [5.2, "distribucion_pp_optima", "Distribución de la precipitación", "simple"],
  [
    5.3,
    "distribucion_altitudinal_optima",
    "Distribución altitudinal",
    "simple",
  ],
  [5.4, "temperatura_optima", "Temperatura", "simple"],
  [5.5, "ph_optima", "pH del suelo", "simple"],
  [5.6, "profundidad_optima", "Profundidad del suelo", "simple"],
  [5.7, "fertilidad_optima", "Fertilidad del suelo", "compuesto"],
  [5.8, "pendiente_optima", "Pendiente", "simple"],
];

const propagacion = [
  [6.1, "p_germinacion", "Porcentaje de germinación", "simple"],
  [6.2, "produccion_plantulas", "Tiempo de producción de plántulas", "simple"],
  [6.3, "t_pregerminativo", "Tratamiento pregerminativo", "compuesto"],
];

const silvicultra = [
  [7.1, "densidad", "Densidad de plantación", "simple"],
  [7.2, "edad_podas", "Edad de podas", "simple"],
  [7.3, "altura_podas", "Altura de podas", "simple"],
  [7.4, "edad_raleo", "Edad del raleo", "simple"],
  [7.5, "densidad_raleo", "Densidad del raleo", "simple"],
  [7.6, "edad_entresaca", "Edad de la entresaca", "simple"],
  [7.7, "densidad_entresaca", "Densidad de la entresaca", "simple"],
  [7.8, "relacion_dap_ht", "Relación DAP/Ht", "simple"],
  [7.9, "turno", "Edad del turno", "simple"],
  [7.101, "volumen_turno", "Volumen del turno", "simple"],
];

const crecimiento = [
  [8.1, "ima", "Incremento medio anual", "simple"],
  [8.2, "ica", "Incremento corriente anual", "simple"],
  [8.3, "ecuacion", "Ecuaciones de crecimiento", "simple"],
];

const madera = [
  [9.1, "uso", "Usos específicos", "compuesto"],
  [9.2, "precio_madera_pie", "Precio de madera en pie", "simple"],
  [9.3, "precio_madera_rolliza", "Precio de madera rolliza", "simple"],
  [
    9.4,
    "precio_madera_dimensionada",
    "Precio de madera dimensionada",
    "simple",
  ],
];

const plagas = [[10.1, "plagas", "Plagas y enfermedades", "compuesto"]];

const bibliografia = [[11.1, "bibliografia", "Bibliografia", "compuesto"]];

export {
  general,
  plantaciones,
  germoplasma,
  generales,
  optima,
  propagacion,
  silvicultra,
  crecimiento,
  madera,
  plagas,
  bibliografia,
};
