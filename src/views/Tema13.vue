<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Estándares e interpretación de resultados en Emisión de ruido
    img(src='@/assets/curso/tema13/img1.jpg', alt='Texto que describa la imagen')
    separador
    #t_13_1.titulo-segundo.color-acento-contenido.mt-4
      h2 13.1 Calculo de la emisión o aporte de ruido. 
    .row
      .col-lg-8
        p Una vez obtenido Los resultados obtenidos en las medidas de la emisión de ruido, son utilizados para la verificación de los niveles de emisión de ruido por parte de las fuentes. Las mediciones de la emisión de ruido se efectúan en un intervalo unitario de tiempo de medida de acuerdo con lo establecido en el artículo 5 y con el procedimiento descrito en el Capítulo I del Anexo 3 de la resolución 627 de 2006.
        p La emisión o aporte de ruido de cualquier fuente se obtiene al restar logarítmicamente, el ruido residual corregido, del valor del nivel de presión sonora corregido continuo equivalente ponderado A, - LRAeq,T -, como se expresa a continuación:
        .row.bg13.p-4.justify-content-center
          .col-lg-10
            img(src='@/assets/curso/tema13/f1.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Leq emisión:</strong> Nivel de emisión de presión sonora, o aporte de la(s) fuente(s) sonora(s), ponderado A,
          p.mb-0 <strong>LRAeq,1 h:</strong>  Nivel corregido de presión sonora continúo equivalente ponderado A, medido en una hora,
          p.mb-0 <strong>LRAeq,1 h, Residual:</strong>   Nivel corregido de presión sonora continuo equivalente ponderado A, Residual, medido en una hora.


      .col-lg-4
        img(src='@/assets/curso/tema13/img2.jpg', alt='Texto que describa la imagen')
    p.mt-3 Para tener en cuenta: En caso de no poderse evaluar el ruido residual, se toma el nivel percentil L90 corregido y se utiliza a cambio del valor del ruido residual corregido.
    .row.p-4.colort112.align-items-center
      .col-5
        img(src='@/assets/curso/tema13/1.svg', alt='Texto que describa la imagen')

      .col-7
        h5.mb-0 Estimados aprendices
        p A continuación, veremos este material audiovisual que nos ilustra como se realizan las mediciones de EMISION de RUIDO y como se comparan los resultados con la normatividad ambiental vigente en RUIDO.
        a.anexo.mb-4.mb-lg-0.mt-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Control a Niveles de Ruido y Contaminación      
    separador
    #t_13_1.titulo-segundo.color-acento-contenido.mt-4
      h2 13.2 Estándares máximos permisibles de emisión de ruido
    p En la Tabla 1 de la resolución 627 de 2006 se establece los estándares máximos permisibles de niveles de emisión de ruido expresados en decibeles ponderados A (dB(A)):
    .row.justify-content-center.mt-3
      .col-lg-10
        .row.p-2.color13
          img(src='@/assets/curso/tema13/img3.svg', alt='Texto que describa la imagen')
    .row.mt-4
      .col-lg-5
        img(src='@/assets/curso/tema13/12.jpg', alt='Texto que describa la imagen')

      .col-lg-7
        .row.p-5.colort112.align-items-center
          h4.text-center Aspectos para tener en cuenta:
          ul.lista-ul--color.mt-4
            li
              i.fas.fa-angle-right.colorclaro
              p.mb-0 “Cuando la emisión de ruido en un sector o subsector trascienda a sectores o subsectores vecinos o inmersos en él, los estándares máximos permisibles de emisión de ruido son aquellos que corresponden al sector o subsector más restrictivo. (Res 627/ 06 Parágrafo Primero)
            li
              i.fas.fa-angle-right.colorclaro
              p.mb-0 Las vías troncales, autopistas, vías arterias, vías principales, en general las vías, son objeto de medición de ruido ambiental, más no de emisión de ruido por fuentes móviles. (Res 627/ 06 Parágrafo Segundo)
            li
              i.fas.fa-angle-right.colorclaro
              p.mb-0 Las vías troncales, autopistas, vías arterias y vías principales, en áreas urbanas o cercanas a poblados o asentamientos humanos, no se consideran como subsectores inmersos en otras zonas subsectores. (Res 627/ 06 Parágrafo Tercero)
            li
              i.fas.fa-angle-right.colorclaro
              p.mb-0 En los sectores y/o subsectores en que los estándares máximos permisibles de emisión de ruido de la Tabla 1, son superados a causa de fuentes de emisión naturales, sin que exista intervención del hombre, estos valores son considerados como los estándares máximos permisibles, como es el caso de cascadas, sonidos de animales en zonas o parques naturales.”  (Res 627/ 06 Parágrafo Cuarto)
    .col-lg-6.colora2.p-2.mt-5
      h4.text-white.mb-0.text-center Determinación del ruido ambiental: Aplicabilidad Del Ruido Ambiental.    
    .row.p-3.colort112.align-items-center.mt-4
      .col-1
        img(src='@/assets/curso/tema13/img4.svg', alt='Texto que describa la imagen')

      .col-11
        p “Los resultados obtenidos en las mediciones de ruido ambiental deben ser utilizados para realizar el diagnóstico de los niveles de presión sonora en el ambiente. Los resultados podrán ser llevados a mapas de ruido con el fin de identificar zonas críticas y posibles fuentes de emisión de ruido, entre otros 2. Las mediciones de ruido ambiental deben hacerse de forma que los resultados obtenidos permitan su incorporación a mapas de ruido”. 
    figcaption.mt-2 (Fuente.  “Protocolo para la medición de emisión de ruido, ruido ambiental y realización de mapas de ruido” P..36)
    .col-lg-2.colora2.p-2.mt-5
      h4.text-white.mb-0.text-center Objetivos del estudio.     
    p.mt-3 “La autoridad ambiental correspondiente debe especificar claramente los objetivos que motivan la realización del estudio a ejecutar 2. Los objetivos deben definirse de una forma concisa y clara, asimismo deben ser congruentes con las posibilidades técnicas y la realidad económica de la entidad, ciudad, zona o área de estudio”. (Fuente.  “Protocolo para la medición de emisión de ruido, ruido ambiental y realización de mapas de ruido” P..36)
    p Es importante definir el tipo de estudio que se valla a realizar, si es de EMISION o de RUIDO AMBIENTAL, si quieres profundizar en esta medición (ruido ambiental), lo invitamos a consultar la bibliografía relacionada.        
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5.mb-0 Para más información consulta
            p.mb-0 ¡Estimado Aprendiz!
            p Para profundizar en la metodología de comparación de los valores de concentración para EMISION DE RUIDO y RUIDO AMBIENTAL, lo invitamos a consultar en MATERIAL DE APOYO /Resolución y protocolos RUIDO
            p 1. Miniterio de Ambiente, Vivienda y Desarrollo Territorial (2006) Resolución 627 Por la cual se establece la norma nacional de emisión de ruido y ruido ambiental.
            p 2. Secretaria Distrital de Ambiente (2010) Resolución 6918 Por la cual se establece la metodología de medición y se fijan los nivele de ruido al interior de las edificaciones (inmisión) generados por la incidencia de fuentes fijas de ruido.
            p 3. Universidad de Medellín (2011) Protocolo para medir la emisión de ruido generado por fuentes fijas.
            .row.justify-content-center
              .col-lg-6
                a.anexo.mb-4(:href="('https://drive.google.com/drive/folders/13OUMYUvtMFlZsN15BEtJwEiPto7AL-Pa')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Resolución y protocolos RUIDO.
    separador
    #t_13_3.titulo-segundo.color-acento-contenido.mt-4
      h2 13.3 Estándares e interpretación de Resultados en OLORES OFENSIVOS.                
    .col-lg-3.colora2.p-2.mt-5
      h4.text-white.mb-0.text-center Cálculo de la emisión olores         
    p.mt-3 En esta sección veremos cuales son los estándares de emisión de olor en la normatividad colombiana.
    p Una vez se ha tomado la muestra, transportada y preservada se procede al análisis y la interpretación de los resultados, para ello se tiene en cuenta que la muestra tiene que ser valorada por panelistas para la posterior comparación con la norma.
    p En este grafico resume el proceso que se lleva a cabo en la interpretación final del resultado.
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.p-2.color13
          h4.text-center.mt-3 REF. NTC-5880. Calidad del aire. Determinación de la concentración de olor por olfatometría dinámica
          img(src='@/assets/curso/tema13/img5.svg', alt='Texto que describa la imagen')
    separador
    #t_13_4.titulo-segundo.color-acento-contenido.mt-4
      h2 13.4 ANÁLISIS DE LA CONCENTRACIÓN DE OLOR 
    p Para el análisis de todas las muestras tomadas se analizan mediante olfatometría dinámica dentro de las primeras 30 horas luego del muestreo de acuerdo con lo establecido en la NTC 5880. 
    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-lg-5
            img(src='@/assets/curso/tema13/img6.jpg', alt='Texto que describa la imagen')

          .col-lg-7

            .row.p-5.bgh1.mt-2
              p <strong>Para este análisis se emplea un olfatómetro dinámico</strong> el cual se encarga de presentar las muestras en una serie de dilución a un grupo de panelistas seleccionados, uno a la vez, mediante el método SI / NO. 
            figcaption.mt-2 (Fuente: http://www.alapre.org/Downloads/Congresos/Sexto/Medicion_de_olores_en_plantas_de_rendering.pdf)
        p.mt-3 Cuando la muestra ya está diluida, se le presenta a un grupo de panelistas que por medio de una prueba define la intensidad de olor.

        .row.mt-4
          .col-lg-5
            img(src='@/assets/curso/tema13/img7.jpg', alt='Texto que describa la imagen')

          .col-lg-7

            .row.p-5.bgh1.mt-2
              p <strong>La norma UNE-EN-13725 define la unidad de concentración de olor</strong> como uoE/m3 (unidad de olor europea por metro cúbico) como aquella sustancia o mezcla de sustancias que diluida en 1 m3 de gas neutro en condiciones normales, es distinguida de aire exento de olor por el 50% de los panelistas Fuente: Sánchez JI, Peña AA, Martínez JV, Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos. Murcia: Calidad Ambiental; 2008. (P. 11)
    .col-lg-2.colora2.p-2.mt-5
      h4.text-white.mb-0.text-center Principio de medida. 
    .row.bgtt
      p.mt-2 La concentración de olor de una muestra gaseosa de sustancias olorosas viene determinada por el número de diluciones que hemos tenido que hacer a la muestra con aire puro inodoro, para que los panelistas la perciban.
      .col-lg-6
        h5 Por ejemplo:
        p (1) una muestra que diluida 500 veces empieza a ser distinguida por los panelistas, diremos que tiene una concentración de olor de 500 uoE/m3 estas diluciones a las que hacemos referencia, son necesarias para cuantificar las muestras, se llevan a cabo en un equipo denominado olfatómetro. 
        p El olfatómetro mezcla aire puro con la muestra de aire contaminado por malos olores en diferentes proporciones y lo ofrece a los panelistas a través de unas boquillas. El panelista debe distinguir por cuál de ellas sale el aire contaminado y las respuestas de cada uno de ellos son recogidas y procesadas por un sistema informático el cual calcula la concentración de olor de la muestra. 
        p La secuencia de ofrecimientos comienza por diluciones muy elevadas y por tanto inodoras a los panelistas hasta diluciones menores hasta que el panelista empieza a distinguir el olor. Para evitar que los panelistas den resultados al azar, el olfatómetro ofrece junto con las muestras, muestras de aire puro inodoro. La norma exige que los panelistas identifiquen mas del 80% de las muestras de aire puro. 
      .col-lg-6
        img(src='@/assets/curso/tema13/img8.jpg', alt='Texto que describa la imagen')
      figcaption.mt-2 Fuente: Sánchez JI, Peña AA, Martínez JV, Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos. Murcia: Calidad Ambiental; 2008. (P. 11)
      p.mt-2 Todo este procedimiento de medición (olfatometría dinámica) está continuamente sometido a una calibración de manera que los resultados de cualquier estudio sean comparables y confiables.
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¿Sabias que? 

            p.mb-0 Sabias que ICONTEC ha desarrollado múltiples normas técnicas para la medición, caracterización y valoración de los OLORES OFENSIVOS, en la siguiente tabla le compartimos el listado de las normas colombianas.
    .row.justify-content-center.mt-3
      .col-lg-10
        .row.p-2.color13.justify-content-center
          .col-lg-10
            img(src='@/assets/curso/tema13/img9.svg', alt='Texto que describa la imagen')
    separador
    #t_13_5.titulo-segundo.color-acento-contenido.mt-4
      h2 13.5. CALIBRACIÓN DE LOS PANELISTAS.
    p Para asegurar la calidad de la medición de olor se deberán calibrar los dos elementos que intervienen en la medición: 
    .row.mt-3
      .col-lg-6
        .row.color13.p-3.justify-content-center.align-items-center
          .col-lg-2
            img(src='@/assets/curso/tema13/2.svg', alt='Texto que describa la imagen')

          .col-lg-8.mt-5
            ul.lista-ul--color.mt-4
              li
                i.fas.fa-angle-right.colorclaro
                p.mb-0 Las diluciones que realiza el olfatómetro 
              li
                i.fas.fa-angle-right.colorclaro
                p.mb-0 La sensibilidad olfativa de los panelistas.

      .col-lg-6
        .row.color13.p-3
          p Una de las más importantes seria entonces, la calibración o estado olfativo de los panelistas, para ello se toma como referencia la NTC 4503 o en su defecto la norma UNE-EN-13725 define todas las condiciones, calibraciones y, en definitiva, el protocolo analítico para la determinación de la concentración de olor.
    p.mt-3 Como es evidente el umbral de olor es muy diferente entre los distintos individuos. Esta selección de individuos se realiza utilizando un gas de referencia, el n-butanol en nitrógeno (con una incertidumbre expandida inferior al 5%), para seleccionar candidatos con umbrales de percepción para el n-butanol entre 20 a 80 ppb y con una baja desviación estándar entre sus percepciones. 
    .row.mt-3
      .col-lg-6
        .row.p-4.color13ts
          h5.mt-4 Selección de individuos (Panelistas)
          p De acuerdo a la norma se determinarán, al menos, 10 estimaciones del umbral individual de cada panelista para el gas de referencia recogidos en, al menos, 3 sesiones en días no consecutivos de esta manera se aseguran los criterios de sensibilidad y repetibilidad del detector: el olfato humano. 
          p La uoE/m3 será aquella mezcla que provoca una respuesta en el umbral de olor de estos individuos calibrados, denominados panelistas.
          p Tomado de: Sánchez JI, Peña AA, Martínez JV, Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos. Murcia: Calidad Ambiental; 2008. (p. 11-12)
      .col-lg-6    
        img(src='@/assets/curso/tema13/img10.png', alt='Texto que describa la imagen')
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Para tener en cuenta!


            p.mb-0 Es muy importante también realizar la Calibración del olfatómetro o equipo de dilución, este equipo debe realizar regularmente (al menos una vez al año) la calibración se realiza empleando un material trazador adecuado como por ejemplo monóxido de carbono y una incertidumbre expandida inferior al 3%.  
        figcaption.mt-2 Fuente Dato: Sánchez JI, Peña AA, Martínez JV, Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos. Murcia: Calidad Ambiental; 2008. (P. 12)
    separador
    #t_13_6.titulo-segundo.color-acento-contenido.mt-4
      h2 13.6 ESTÁNDARES MÁXIMOS PERMISIBLES DE INMISIÓN DE OLORES OFENSIVOS.
    p Los estándares de Inmisión o niveles permisibles de inmisión de sustancias o mezclas de sustancias de olores ofensivos están contenidos en el capítulo 3 de la resolución 1541 de 2013.
    p A continuación, se presentan los estándares de inmisión para la respectiva comparación de los resultados obtenidos por la metodología OLFATOMETRIA DINAMICA.
    h5.text-center.mt-3 En la Tabla 3 de la resolución 1541 de 2013 se establece los estándares máximos permisibles
    .row.justify-content-center
      .col-lg-8
        .row.p-2.color13
          h5.text-center.mt-3 Capítulo III
          h5.text-center Niveles permisibles de calidad del aire o de inmisión de sustancias y mezclas de sustancias de olores ofensivos.
          p Tabla 3. Niveles permisibles de calidad del aire o de inmisión de mezcla de sustancias de olores ofensivos.
          img(src='@/assets/curso/tema13/img11.svg', alt='Texto que describa la imagen')      
    p.mt-4 El análisis se proyectan en un modelo de dispersión para luego la comparación de los resultados se hacen directamente con los estándares de concentración presentes en  la tabla 3 , teniendo en cuenta el sector o proceso en el cual se hizo la medición de los olores ofensivos, en este caso la unidad de concentración está definida como OUE/m3  ( Unidad de Olor Europea)
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema13/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La modelación de la información es importante, ya que los datos de entrada se convierten en insumo para hallar las concentraciones para finalmente comparar los valores umbrales con la normatividad.
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5.mb-0 ¡Recuerda
            p.mb-0 Sabias que la unidad con la que se establece la concentración de olores se le conoce como
            p OUE /m3 Unidad de Olor Europea, la cual se divide por una unidad de volumen (m3) esta unidad es considerada una concentración de olor, con la cual se establecen los estándares o niveles de inmisión de sustancias de olores ofensivos en Colombia.
    p.mt-3 Por otro lado, si las muestras son obtenidas por otras técnicas cómo las analíticas, o muestreadores pasivos para medir sustancias de olores ofensivos resultados son comparados se deben relacionar los estándares de la tabla 2 contenida en el capítulo III.
    .row.justify-content-center
      .col-lg-8
        .row.p-2.color13
          h5.text-center.mt-3 Capítulo III
          h5.text-center Niveles permisibles de calidad del aire o de inmisión para sustancias de olores ofensivos a condiciones de referencia (25° C Y 760 mm Hg)
          p Tabla 2. Niveles permisibles de calidad del aire o de inmisión para sustancias de olores ofensivos a condiviones de referencia (25°C Y 760 mm Hg)
          img(src='@/assets/curso/tema13/img13.svg', alt='Texto que describa la imagen')      
          p Cuando se utilicen muestreadores pasivos para la medición de las sustancias de la Tabla 2, el tiempo de exposición podrá estar entre 2 y 4 semanas
    p.mt-3 El procedimiento para la comparación de los valores de concentración con la norma está contenido en el PROTOCOLO DE OLORES ofensivos numeral 2.5.1 Los niveles permisibles o de inmisión para sustancias generadoras de olores ofensivos se establecen a condiciones de referencia (25ºC y 760 mmHg), por lo tanto, es necesario expresar las concentraciones obtenidas en tales condiciones.
    .row.p-4.colort112.align-items-center
      .col-5
        img(src='@/assets/curso/tema13/1.svg', alt='Texto que describa la imagen')

      .col-7
        h5.mb-0 Para reforzar los conocimientos adquiridos

        p Lo invitamos a ver este documento audiovisual que resume los visto hasta esta sección.
        a.anexo.mb-4.mb-lg-0.mt-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p  CORANTIOQUIAOFICIAL (2015, mayo 21) Control y Manejo de Olores en Empresas        
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5.mb-0 PARA MÁS INFORMACIÓN CONSULTA.

            p.mb-0  ¡Estimado Aprendiz!
            p Para profundizar en la metodología de comparación de los valores de concentración para SUSTANCIAS GENERADORAS DE OLORES OFENSIVOS lo invitamos a consultar en MATERIAL DE APOYO /Resolución y protocolos OLORES

            p.mb-0 1. Ministerio de Ambiente y Desarrollo Sostenible (2013) Resolución 1541 
            p.mb-0 2. Ministerio de Ambiente (2014) Protocolo para el monitoreo, control y vigilancia de olores ofensivos.
            p.mb-0 3. Ministerio de trabajo y asunto s sociales España (s,f) NTP 358 Olores un factor de calidad y confort en ambientes interiore.

      
</template>

<script>
export default {
  name: 'Tema13',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
