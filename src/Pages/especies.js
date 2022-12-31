const especies = [
  {
    id: 1,
    altura_podas:
      "Se inicia dejando un fuste libre de ramas de 3 m y se busca llegar a los 6 m libres de ramas",
    bibliografia:
      "Catálogo virtual de flora del Valle del Aburrá. (2022). Ceiba Tolúa (Bombacopsis quinata). Universidad EIA. https://catalogofloravalleaburra.eia.edu.co/species/57\n\nCárdenas, E. P. (2010). Comportamiento y manejo de Bombacopsis quinata (Jacq.) Dugand en Zamorano, Honduras.\n\nCordero, J. (2003). Árboles de Centroamérica: un manual para extensionistas. Bib. Orton IICA/CATIE.\n\nCordero, J., & Boshier, D. H. (Eds.). (2003). Bombacopsis Quinata: Un Arbol Maderable Para Reforestar. Oxford Forestry Institute.\n\nDuque, A. 2020. Directrices para la selección de ecuaciones, parámetros y datos para calcular las remociones de GEI deactividades MADERA forestales.\nVersión 1 (6 de abril). PROCLIMA. Bogotá, Colombia.\n\nEspitia-Camacho, M., Cardona-Ayala, C., & Araméndiz-Tatis, H 2017). Morfología y viabilidad de semillas de Bombacopsis quinata y Anacardium excelsum. Cultivos tropicales, 38 (4), hongos.75–83.\n\nFuentes, R. L. A., & Arango, A. L. (2005). Manual para la\nidentificación de maderas que se comercializan en el departamento del Tolima. Ibagué Colombia. Corporación Autónoma Regional del Tolima CORTOLIMA y Facultad de Ingenieria Forestal de la Universidad del Tolima.\n\nMinAgricultura. (2022). Boletín estadístico forestal, marzo 2022.\n\nMorales, R., & Witmore, J. L. (1978). Apuntes ecológicos y silviculturales sobre Bombacopsis quinata (Jacq.) Dugan. Revision Bibliográfica. Centro Agronómico Tropical de & Ramírez, 2005). Investigación y Enseñanza. Turrialba, Costa Rica.\n\nONF ANDINA–ONFA, (2018). Plan de Negocio 1–Zona Caribe. Colombia\n\nPiedad, C. M. E. (2010). Comportamiento y manejo de Bombacopsis quinata (Jacq.) Dugand en Zamorano,\nHonduras. \n\nUSAID. (2004). Colombia forestry development program. U.S. Agency for International Development/Colombia.\n\nVásquez, Á. M., & Ramírez, A. M. (2005). Maderas comerciales del Valle del Aburrá. Área Metropolitana del Valle de Aburrá.",
    calificacion: 69.25,
    cientifico: "Bombacopsis quinata",
    densidad: "1.111 árboles/ha bajo un esquema de siembre de 3 x 3 m",
    densidad_entresaca: "",
    densidad_raleo:
      "En el primer raleos se deja una densidad de 866 árboles/ha, al segundo raleo la densidad disminuye a 466 árboles/ha y al final del tercer raleo se dejan 216 árboles/ha",
    distribucion:
      "Se distribuye desde el sur de Honduras hasta Colombia. En el país se encuentra en los departamentos de Atlántico, Bolivar, Casanare, Cesar, Chocó, Magdalena, Meta, Norte de Antioquia y Sucre. En zonas de vida de bosque seco tropical (bs-T) hasta bosque húmedo tropical (bh-T)",
    distribucion_altitudinal: "0 - 1.000 m.s.n.m",
    distribucion_altitudinal_optima: "0 - 600 m.s.n.m",
    distribucion_pp: "",
    distribucion_pp_optima: "",
    ecuacion:
      "𝐷𝐴𝑃 = −41,587 + 101,676 ∗ 𝐿𝑛(|𝑒𝑑𝑎𝑑|) ; 𝑉𝑜𝑙𝑢𝑚𝑒𝑛 = −0,2587 + 0,1892 ∗ 𝐿𝑛|𝑒𝑑𝑎𝑑|",
    edad_entresaca: "",
    edad_podas:
      "La primera poda se realiza durante el primer o segundo año, luego se deben realizar dos o tres podas más cuando el árbol alcance 5 - 6 m, 8 - 9 m, 11 - 12 m.",
    edad_raleo: "Los raleos se realizan en los años 6, 14 y 22.",
    familia: "Malvaceae",
    fenologia:
      "La floración inicia cada año después de la senescencia de las hojas que ocurre entre diciembre y febrero, poco después del inicio de la temporada seca. ",
    fertilidad: "",
    fertilidad_optima:
      "Textura arcillo-arenosa. Crece bien en suelos bien drenados, con altos contenidos de arena en el horizonte superficial y con nivel freático alto.",
    fuente_identificada:
      "Maicao, La Guajira; Ovejas, Sucre y Pivijai, Magdalena (Refocosta S.A)",
    huerto_semillero: "Zambrano, Bolivar (Monterrey Forestal)",
    ica: "",
    ima: "8,8 - 11,3 m³/ha/año",
    jardin:
      "Desde 1983 la empresa Monterrey Forestal ha realizado trabajos de mejoramiento genético de la especie, lo que se derivó en un huerto semillero clonal de tercera generación y en un jardín de estacas",
    p_germinacion:
      "Las semillas permanecen viables alrededor de un año cuando se almacenan en condiciones de 6 - 8 % de humedad y 5 - 6 °C. Su periodo de germinación es de 8 - 35 días. Además, las semillas presentan entre un 70 - 90% de germinación en 30 días bajo condiciones ambientales.",
    pendiente: "0 - 13 %",
    pendiente_optima: "0 - 13 %",
    ph: "6 - 8",
    ph_optima: "6 - 7",
    plagas:
      "En época de vivero la planta es susceptible al ataque por hongos de los géneros Rhizoctonia y Fusarium. En estado adulto, el estado larval de Arsenura armida actúa como defoliador del árbol. Otros insectos como Dirphia linchyi y Haemonides cronis también suelen causar problemas. ",
    plantaciones_departamentales: "",
    plantaciones_nacionales:
      "Según el boletín forestal nacional de marzo de 2022, la región caribe es la zona del país que más plantaciones posee con alrededor de 9.176 ha, seguido por el eje cafectero con 610 ha y orinoquía con 200 ha. ",
    precio_madera_dimensionada:
      "El valor de la madera dimensionada seca es apróximadamente $1.500.000 por metro cúbico, mientras que dimensionada verde se encuentra entre $700.000 y $1.000.000 el metro cúbico.",
    precio_madera_pie: "",
    precio_madera_rolliza: "",
    precipitacion: "800 - 2.000 mm",
    precipitacion_optima: "1.000 mm",
    produccion_plantulas:
      "El tiempo de producción de plántulas de 15 - 30 cm de alto son alrededor de 6 meses.",
    profundidad: "",
    profundidad_optima: "",
    relacion_dap_ht: "",
    rodal_semillero: "",
    t_pregerminativo:
      "Sumergir las semillas en agua 24 horas antes de la siembre. ",
    taxonomia:
      "Árbol heliófito, caducifolio, nativo de Colombia. Alcanza alturas de hasta 30 m y diametro al pecho de 100 cm, generalmente de copa amplia y densidad media de follaje. Hojas alternas, pecioladas, compuestas, digitadas, con 3 a 7 foliolos. Tallo recto y la corteza está cubierta por espinas.",
    temperatura: "20 - 27 °C",
    temperatura_optima: "24 - 27 °C",
    turno: "25 - 35 años según la calidad del sitio",
    uso: "La madera se utiliza en la fabricación de marcos de puertas y ventanas y construcciones livianas. ",
    volumen_turno: "350 - 375 m3/ha",
    vulgar: "Ceiba tolúa, Cedro espinoso, Cedro rojo, Pochote",
  },
  {
    id: 2,
    cientifico: "Tectona grandis",
    vulgar: "Teca",
    calificacion: 83,
  },
];

export default especies;
