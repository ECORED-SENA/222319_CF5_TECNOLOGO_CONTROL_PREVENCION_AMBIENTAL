export default {
  global: {
    componenteFormativo:
      'Obtener muestras representativas según protocolos y técnicas de análisis fisicoquímico',
    descripcionCurso:
      'En este componente formativo se caracterizará el estado ambiental de una zona de estudio en sus factores ambientales agua, suelo, olores y ruido, como insumo para realizar un diagnóstico ambiental adecuado, para ello es necesario realizar la toma de muestras que permitirá obtener la información requerida de las condiciones de calidad de un medio.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    //imagenesDecorativasBanner: [
    //  {
    //    clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //    imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
    //  },
    //  {
    //    clases: ['banner-principal-decorativo-2'],
    //    imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
    //  },
    //],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Presentación medición de ruido y olores ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Introducción importancia de la toma de muestra',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Peligros y Riesgos laborales en toma de muestras',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Capacitación Medio ambiente, seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Conceptos básicos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Etapas en la toma de muestras',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'El plan de muestreo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Toma de muestra de olores y ruido',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Parámetros in situ olores y ruido',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Características básicas de rotulado y envasado',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Transporte y recepción de muestras de ruido y olores',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema12',
        icono: 'far fa-file-alt',
        numero: '12',
        titulo: 'Cadena de custodia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema13',
        icono: 'far fa-file-alt',
        numero: '13',
        titulo: 'Estándares e Interpretación de Resultados en Olores y Ruido',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Echeverri Londoño, C. A., & González Fernández, A. E. (1). Protocolo para medir la emisión de ruido generado por fuentes fijas. Revista Ingenierías Universidad De Medellín, 10(18), 51-60. Recuperado a partir de https://revistas.udem.edu.co/index.php/ingenierias/article/view/336',
    },
    {
      referencia:
        'Colombia. Ministerio de ambiente, vivienda y desarrollo Territorial. Resolución 0627 del 7 de abril de 2006',
    },
    {
      referencia:
        'Colombia. Ministerio de ambiente, vivienda y desarrollo Territorial. Resolución 1541 del 12 noviembre de 2013',
    },
    {
      referencia:
        'Colombia. Ministerio de ambiente, vivienda y desarrollo Territorial Protocolo para el monitoreo, control y vigilancia de olores ofensivos Bogotá d.c., 2014',
    },
    {
      referencia:
        'Sánchez JI, Peña AA, Martínez JV, Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos. Murcia: Calidad Ambiental; 2008.',
    },
    {
      referencia:
        'Ministerio de salud y protección social organización panamericana de la salud, convenio cooperación técnica No. 485/10 2012  Lineamiento para la vigilancia sanitaria y ambiental del impacto de los olores ofensivos en la salud y calidad de vida de las comunidades expuestas en áreas urbanas',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/bibliotecadigital/RIDE/VS/PP/SA/impacto-olores-ofensivos-salud.pdf',
    },
    {
      referencia:
        'España, Olores: un factor de calidad y confort en ambientes interiores, NTP 358,1998',
    },
    {
      referencia:
        'ICONTEC GTC45 (2012) Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional',
    },
    {
      referencia:
        'Extraído del documento MINSALUD (2017) Programa de elementos y protección personal, uso y mantenimiento',
      link:
        'Https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      referencia:
        'ICONTEC NTC 3522 (2005) Acústica.  Descripción, medición y evaluación del ruido   ambiental.   Parte   1:   cantidades básicas y procedimientos de evaluación',
    },
    {
      referencia:
        'ICONTEC NTC 6012-1 (2013) Efectos y evaluación de los olores, evaluación sicométrica de las molesticas por olores cuestionarios. ',
    },
    {
      referencia:
        'Corporación autónoma regional de Caldas (2011) Medición de ruido ambiental en el municipio de Villamaría. ',
      link:
        'Http://www.corpocaldas.gov.co/publicaciones/543/Mapa%20ruido%20Villamaria.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2004). NTC-ISO 5667-3-Calidad del Agua. Muestreo. Parte 3: Directrices para la Preservación y Manejo de Muestras.',
    },
    {
      referencia:
        'Echeverri Londoño, C. A., & González Fernández, A. E. (1). Protocolo para medir la emisión de ruido generado por fuentes fijas. Revista Ingenierías Universidad De Medellín, 10(18), 51-60. Recuperado a partir de ',
      link:
        'https://revistas.udem.edu.co/index.php/ingenierias/article/view/336',
    },
    {
      referencia:
        'Colombia. Ministerio de ambiente, vivienda y desarrollo Territorial. Resolución 0627 del 7 de abril de 2006',
    },
    {
      referencia:
        'Colombia. Ministerio de ambiente, vivienda y desarrollo Territorial. Resolución 1541 del 12 noviembre de 2013',
    },
    {
      referencia:
        'Colombia. Ministerio de ambiente, vivienda y desarrollo Territorial Protocolo para el monitoreo, control y vigilancia de olores ofensivos Bogotá d.c., 2014',
    },
    {
      referencia:
        'Sánchez JI, Peña AA, Martínez JV, Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos. Murcia: Calidad Ambiental; 2008.',
    },
    {
      referencia:
        'Ministerio de salud y protección social organización panamericana de la salud, convenio cooperación técnica No. 485/10 2012  Lineamiento para la vigilancia sanitaria y ambiental del impacto de los olores ofensivos en la salud y calidad de vida de las comunidades expuestas en áreas urbanas',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/bibliotecadigital/RIDE/VS/PP/SA/impacto-olores-ofensivos-salud.pdf',
    },
    {
      referencia:
        'España, Olores: un factor de calidad y confort en ambientes interiores, NTP 358,1998',
    },
    {
      referencia:
        'Cecilia Salazar, Santiago del castillo ,2018, FUNDAMENTOS BÁSICOS DE ESTADÍSTICA',
      link:
        'Http://www.dspace.uce.edu.ec/bitstream/25000/13720/3/Fundamentos%20B%C3%a1sicos%20de%20Estad%C3%adstica-Libro.pdf',
    },
    {
      referencia:
        '(instituto de hidrología meteorología y estudios ambientales –IDEAM,2019, Glosario Meteorológico)',
      link:
        'Http://www.ideam.gov.co/documents/11769/72085840/Anexo+10.+Glosario+meteorol%C3%b3gico.pdf/6a90e554-6607-43cf-8845-9eb34eb0af8e',
    },
    {
      referencia:
        'INSTITUTO GEOGRAFICP DE ESPAÑA,2019, Conceptos cartográficos',
      link:
        'Https://www.ign.es/web/resources/cartografiaensenanza/conceptoscarto/descargas/Conceptos_Cartograficos_def.pdf',
    },
    {
      referencia:
        'CORPOCALDAS,2015, mediciones de ruido ambiental y elaboración del plan de descontaminación por ruido en villamaría, caldas. Informe Final',
    },
    {
      referencia: 'Perelmán ,1978, Algebra recreativa, Editorial Mir, Moscú',
      link:
        'Http://ual.dyndns.org/biblioteca/Matematicas_Financieras/Pdf/Unidad_02.pdf',
    },
    {
      referencia: 'Cedex, Conceptos básicos del ruido ambiental',
      link:
        'Http://sicaweb.cedex.es/docs/documentacion/Conceptos-Basicos-del-ruido-ambiental.pdf',
    },
    {
      referencia: 'escuela ing, Conceptos generales del ruido',
      link:
        'Https://www.escuelaing.edu.co/uploads/laboratorios/116_2_ruido.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Decibel (dB)',
      significado:
        'Décima parte del Bel, razón de energía, potencia o intensidad que cumple con la siguiente expresión: Log R = 1dB/10 (Resolución 627 de 2006)',
    },
    {
      termino: 'dB(A)',
      significado:
        'Unidad de medida de nivel sonoro con ponderación frecuencial (A). Donde R= razón de energía, potencia o intensidad. (Resolución 627 de 2006)',
    },
    {
      termino: 'Emisión de Ruido',
      significado:
        'Es la presión sonora que, generada en cualesquiera condiciones, trasciende al medio ambiente o al espacio público. (Resolución 627 de 2006)',
    },
    {
      termino: 'Fuente',
      significado:
        'Elemento que origina la energía mecánica vibratoria, definida como ruido o sonido. Puede considerarse estadísticamente como una familia de generadores de ruido que pueden tener características físicas diferentes, distribuidas en el tiempo y en el espacio. (Resolución 627 de 2006)',
    },
    {
      termino: 'Frecuencia (f)',
      significado:
        'Número de oscilaciones por segundo (Unidad SI: 1/s = Hz, Hertzio). La frecuencia de un sonido y de una onda acústica en general, es una magnitud física muy importante pues: <br>• El oído humano de un adulto normal solo es capaz de detectar ondas acústicas entre 20 y 20000 Hz. <br>• El comportamiento acústico de los materiales y soluciones constructivas depende mucho de la frecuencia. (Resolución 627 de 2006)',
    },
    {
      termino: 'Mapas de ruido',
      significado:
        'Se entiende por mapa de ruido, la representación de los datos sobre una situación acústica existente o pronosticada en función de un indicador de ruido, en la que se indica la superación de un valor límite, el número de personas afectadas en una zona dada y el número de viviendas, centros educativos y hospitales expuestos a determinados valores de ese indicador en dicha zona. (Resolución 627 de 2006)',
    },
    {
      termino: 'Norma de emisión de ruido',
      significado:
        'Es el valor máximo permisible de presión sonora, definido para una fuente, por la autoridad ambiental competente, con el objeto de cumplir la norma de ruido ambiental. (Resolución 627 de 2006)',
    },
    {
      termino: 'Norma de ruido ambiental',
      significado:
        'Es el valor establecido por la autoridad ambiental competente, para mantener un nivel permisible de presión sonora, según las condiciones y características de uso del sector, de manera tal que proteja la salud y el bienestar de la población expuesta, dentro de un margen de seguridad. (Resolución 627 de 2006)',
    },
    {
      termino: 'Onda acústica',
      significado:
        'Es la prop.ación (onda) de una vibración en un determinado medio material. (Resolución 627 de 2006)',
    },
    {
      termino: 'Pistófono',
      significado:
        'Es una pequeña cavidad provista de un pistón con movimiento de vaivén y desplazamiento medible, que permite establecer una presión conocida en el interior de la cavidad. Generalmente utilizado para efectuar calibraciones de sonómetros (Resolución 627 de 2006)        ',
    },
    {
      termino: 'Presión sonora',
      significado:
        'Es la diferencia entre la presión total instantánea en un punto cuando existe una onda sonora y la presión estática en dicho punto.',
    },
    {
      termino: 'Sonido',
      significado:
        'Sensación percibida por el órgano auditivo, debida generalmente a la incidencia de ondas de comprensión (longitudinales) prop.adas en el aire. Por extensión se aplica el calificativo del sonido, a toda perturbación que se prop.a en un medio elástico, produzca sensación audible o no. (Resolución 627 de 2006)',
    },
    {
      termino: 'Sonómetro',
      significado:
        'Es un instrumento de medición de presión sonora, compuesto de micrófono, amplificador, filtros de ponderación e indicador de medida, destinado a la medida de niveles sonoros, siguiendo unas determinadas especificaciones. (Resolución 627 de 2006)',
    },
    {
      termino: 'olor',
      significado:
        'propiedad organoléptica perceptible por el órgano olfativo cuando inspira determinadas sustancias volátiles',
    },
    {
      termino: 'olor ofensivo',
      significado:
        'Es el olor generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana. (Resolución 627 de 2006)',
    },
    {
      termino: 'sustancia de olor ofensivo',
      significado:
        'Es aquella que, por sus propiedades organolépticas, composición y tiempo de exposición puede causar olores desagradables. (Resolución 627 de 2006)',
    },
    {
      termino: 'emisión',
      significado:
        'Transferencia de contaminantes de la atmósfera a un receptor. Se entiende por inmisión la acción opuesta a la emisión. Aire inmiscible es el aire respirable al nivel de la tropósfera. (Resolución 627 de 2006)',
    },
    {
      termino: 'tono hedónico',
      significado:
        'Factor subjetivo que permite definir si un olor es agradable, desagradable, nauseabundo. (Resolucion1541 de 2013)',
    },
    {
      termino: 'umbral',
      significado:
        'Valor mínimo de una magnitud a partir del cual se produce un efecto determinado. (Resolucion1541 de 2013)',
    },
    {
      termino: 'umbral de molestia',
      significado:
        'Es la concentración a la que una pequeña parte de la población (< 5%) manifiesta molestias durante un periodo corto de tiempo. Dado que la sensación de molestia puede estar influenciada por factores sicológicos y socioeconómicos un umbral de molestia no puede definirse solo con base en la concentración. .(Resolucion1541 de 2013)',
    },
    {
      termino: 'umbral de tolerancia',
      significado:
        'El umbral de tolerancia es equivalente al umbral de molestia. (Resolucion1541 de 2013)',
    },
    {
      termino: 'unidad de olor',
      significado:
        'Es la cantidad de (una mezcla de) sustancias olorosas presentes en un metro cúbico de gas oloroso (en condiciones normales 1 atmósfera de presión y 0 °C de temperatura) origina una respuesta fisiológica en el umbral del panel. (Resolucion1541 de 2013)',
    },
    {
      termino: 'unidad de olor europea ',
      significado:
        'Cantidad de sustancia olorosa qué coma cuando se evapora en 1 metro cúbico de gas neutro en condiciones normales, origina una respuesta fisiológica de un panel (umbral de detección) equivalente al que origina una masa de olor de referencia europea more evaporada en 1 metro cúbico de gas neutro en condiciones normales. (Resolucion1541 de 2013)',
    },
    {
      termino: 'Olfatometría',
      significado:
        'Técnica sensorial de medición de olores que se usa para determinar el grado de molestia que pueden ocasionar ciertos olores a la población. (Resolucion1541 de 2013)',
    },
    {
      termino: 'Peligro',
      significado:
        'Fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas, o una combinación de estos (GTC 45)',
    },
    {
      termino: 'Identificación del peligro',
      significado:
        'Proceso para reconocer si existe un peligro y definir sus características. (GTC 45)',
    },
    {
      termino: 'Riesgo',
      significado:
        'Combinación de la probabilidad de que ocurra un(os) evento(s) o exposición(es) peligroso(s), y la severidad de lesión o enfermedad, que puede ser causado por el (los) evento(s) o la(s) exposición(es) (GTC 45)',
    },
    {
      termino: 'Valoración de los riesgos',
      significado:
        'Proceso de evaluar el(los) riesgo(s) que surge(n) de un(os) peligro(s), teniendo en cuenta la suficiencia de los controles existentes, y de decidir si el(los) riesgo(s) es (son) aceptable(s) o no (GTC 45)',
    },
    {
      termino: 'Accidente de trabajo',
      significado:
        'Suceso repentino que sobreviene por causa o con ocasión del trabajo, y que produce en el trabajador una lesión orgánica, una perturbación funcional, una invalidez o la muerte. Es también accidente de trabajo aquel que se produce durante la ejecución de órdenes del empleador, o durante la ejecución de una labor bajo su autoridad, incluso fuera del lugar y horas de trabajo (GTC 45)',
    },
    {
      termino: 'Consecuencia',
      significado:
        'Resultado, en términos de lesión o enfermedad, de la materialización de un riesgo, expresado cualitativa o cuantitativamente (GTC 45)',
    },
    {
      termino: 'Elemento de protección personal (EPP)',
      significado:
        'Dispositivo que sirve como barrera entre un peligro y alguna parte del cuerpo de una persona. (GTC 45)',
    },
    {
      termino: 'Equipo de protección personal',
      significado:
        'Dispositivo que sirve como medio de protección ante un peligro y que para su funcionamiento requiere de la interacción con otros elementos. Ejemplo, sistema de detección contra caídas (GTC 45)',
    },
    {
      termino: 'Pistófono',
      significado:
        'Es una pequeña cavidad provista de un pistón con movimiento de vaivén y desplazamiento medible, que permite establecer una presión conocida en el interior de la cavidad. Generalmente utilizado para efectuar calibraciones de sonómetros. .(Res 627/2006)',
    },
    {
      termino: 'Ruido de fondo',
      significado:
        'Ruido total de todas las fuentes de interferencia en un sistema utilizado para producción, medida o registro de una señal, independiente de la presencia de la señal, incluye ruido eléctrico de los equipos de medida. El ruido de fondo se utiliza algunas veces para expresar el nivel medido cuando la fuente específica no es audible y, a veces, es el valor de un determinado parámetro de ruido, tal como el L90 (nivel excedido durante el 90% del tiempo de medición). (Res 627/2006)',
    },
    {
      termino: 'Ruido residual',
      significado:
        'Ruido total cuando los ruidos específicos en consideración son suspendidos. El ruido residual es el ruido ambiental sin ruido específico. No debe confundirse con el ruido de fondo. Res 627/2006)',
    },
    {
      termino: 'Sonómetro',
      significado:
        'Es un instrumento de medición de presión sonora, compuesto de micrófono, amplificador, filtros de ponderación e indicador de medida, destinado a la medida de niveles sonoros, siguiendo unas determinadas especificaciones. Res 627/2006)',
    },
    {
      termino: 'Nivel percentil 90',
      significado:
        '(nivel de permanencia o de excedencia 90 %): Es el nivel sonoro que se sobrepasa durante el 90 % del tiempo de observación. Se suele utilizar para indicar lo que se conoce como ruido de fondo, que es el nivel de presión sonora mínimo o de base, que está presente casi todo el tiempo. Se denota por L90(Protocolo ruido ambiental UM/MADS)',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
