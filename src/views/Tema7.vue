<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 El Plan de Muestreo
    p Cuando se va a realizar cualquier tipo de muestreo, para la medición de olores o ruido previamente se debe elaborar un plan que contenga la información y programación relacionada con los objetivos del muestreo. A continuación, estableceremos las condiciones que se deben establecer para la elaboración del plan de muestreo.
    h5 Consideraciones Generales del Plan de Muestreo RUIDO: 
    p El plan de muestreo debe contener los siguientes aspectos:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Datos generales")
        .row
          .col-lg-8
            h4 Datos generales
            p.mb-0 1.1. Objetivo del muestreo: Definir de manera precisa las metas que se desean cumplir
            p.mb-0 1.2. Sitio de la Medición: Explicitar el acceso geo-referenciado al sitio de interés
            p.mb-0 1.3. Información del proyecto: Identificar información relevante de acciones previas realizadas en el sitio de estudio
            p.mb-0 1.4. Localización geográfica del sitio: Para su respectivo mapeo
            
          .col-lg-4
            img(src='@/assets/curso/tema5/imgz.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Planeación y procedimiento del muestreo")
        .row
          .col-lg-8
            h4 Planeación y procedimiento del muestreo
            p.mb-0 2.1. Tipo de muestreo (Emisión de Ruido / Ruido Ambiental)
            p.mb-0 2.2. Localización en el área de medición, distribución y número de puntos de muestreo
            p.mb-0 2.3. Determinación de tiempo por puntos a monitorear
            p.mb-0 2.4. Estimación del Número total de monitoreo
            p.mb-0 2.5. Parámetros para medir en campo
            p.mb-0 2.7. Equipo de Monitoreo de Ruido (sonómetro) 
            p.mb-0 2.8. Medidas para asegurar la calidad del muestreo
            p.mb-0 2.9. Preservación de los registros tomas en campo (Ruido y Viento)
            p.mb-0 2.10. Plan de salud y seguridad del operario
            p.mb-0 2.11. Cadena de custodia (si aplica)
          .col-lg-4
            img(src='@/assets/curso/tema5/imgz2.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Anexos")
        .row
          .col-lg-8
            h4 Anexos
            p.mb-0 3.1 lista de Verificación de alistamiento de equipos

            p.mb-0 3.1. Planos de ubicación o aérea o satelital del sitio

            p.mb-0 3.2. Plano vial de carreteras, caminos o calles para llegar al sitio y edificaciones

            p.mb-0 3.3. Plano de la zona de estudio e identificación de los puntos de muestreo geo-referenciado en coordenadas UTM.

            p.mb-0 3.4. Copia de la acreditación y de la aprobación del laboratorio vigente, y certificación de calibración de instrumentos de medición

          .col-lg-4
            img(src='@/assets/curso/tema5/imgz3.png', alt='Texto que describa la imagen')
    separador
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Formato de plan de muestreo
    p A continuación, mostraremos el formato de campo para la ejecución del plan de muestreo este documento es muy importante puesto que establece cuál es la caracterización y la forma en la que se va a establecer el estudio antes del monitoreo es importante diligenciar este formato porque es el que me permite tener la logística y distribución del trabajo durante el monitoreo.
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-4.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema5/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 ¡Estimado Aprendiz!
                  p.text-small Para profundizar en el tema lo invitamos a consultar en <strong>MATERIAL DE APOYO /Cárdenas, J (2020) Formato Plan de Muestreo RUIDO.</strong>
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-file    
    p.text-center.ro Ubicar en pdf en los anexos del programa
    separador
    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2 Consideraciones generales del plan de muestreo olores
    p Para la realización de un estudio OLFATOMETRICO para la medición de olores ofensivos.
    .row
      .col-lg-5
        img(src="@/assets/curso/tema7/img1.png")
        .row.p-2.colort71.mt-2
          p.text-center.text-small https://www.amb.gov.co/amb-desarrolla-plan-integral-de-seguimiento-y-control-para-focalizar-y-contrarrestar-los-olores-ofensivos-en-coordinacion-con-entidades-ambientales-competentes/

      .col-lg-7
        .row.colort72.p-3
          p En esta fase supone el conocimiento previo al detalle de todos aquellos aspectos que pueden verse inmersos en la generación de olores de una actividad o instalación. Este conocimiento previo es fundamental para poder establecer un programa de muestreo que responda a los objetivos planteados en el estudio de impacto ambiental por olores. (Fundamentos Básicos C.A.O 2008 p.7)
          p Esta información se puede obtener por medio de:
          .row.justify-content-center.mt-4
            .col-lg-10
              ul.lista-ul--color
                li 
                  i.fas.fa-angle-right
                  |  Mediante la realización de una visita de auditoria previa a la instalación objeto de estudio.
                li 
                  i.fas.fa-angle-right
                  |  Mediante la revisión de la documentación (planos, esquema de procesos, etc.). 
    .col-lg-3.colora2.p-2.mt-4
      h4.text-white.mb-0.text-center Recopilación Información General
    p.mt-2 La información general consiste en caracterizar la geografía, la población y el desarrollo urbano. Se debe hacer una revisión del POT o su equivalente estudiando detalladamente aspectos relacionados con la calidad del aire. (MADS Protocolo Olores p.19) 
    p Se debe terne presente la siguiente información:
    .row.justify-content-center
      .col-lg-8 
        .row.p-3.colort73
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right.colorclaro
              |  Proximidad y el tipo de fuentes de emisiones de fondo o las concentraciones naturales;
            li 
              i.fas.fa-angle-right.colorclaro
              |  Método de seguimiento utilizado;
            li 
              i.fas.fa-angle-right.colorclaro
              |  Meteorología;
            li 
              i.fas.fa-angle-right.colorclaro
              |  Garantía de calidad;
            li 
              i.fas.fa-angle-right.colorclaro
              | Topografía
    p.mt-5 En particular, se deberá incluir una descripción de los siguientes puntos
    .row.justify-content-center
      .col-lg-10
        .row.p-3.colort74.align-items-center
          .col-lg-1
          .col-lg-5.mt-4
            h5 Geografía y clima:
            p.mb-0 Límites geográficos de la fuente de emisión;
            p.mb-0 Condiciones topográficas;
            p Uso de suelos.
          .col-lg-2
          .col-lg-4
            img(src="@/assets/curso/tema7/img2.svg")
        .row.p-3.colort75.align-items-center
          .col-lg-1
          .col-lg-4
            img(src="@/assets/curso/tema7/img3.svg")
          .col-lg-2
          .col-lg-5.mt-4
            h5 Estructura y tendencias del crecimiento demográfico:
            p.mb-0 Desarrollo urbano y sus actividades socioeconómicas;
            p.mb-0 Distribución demográfica y geográfica de los empleos;
            p Ubicación de los servicios de saneamiento básico, como, por ejemplo, (rellenos sanitarios y plantas de tratamiento de aguas residuales).
        .row.p-3.colort74.align-items-center
          .col-lg-1
          .col-lg-5.mt-4
            h5 Otra información de importancia:

            p.mb-0 Cartografía de la zona de estudio;

            p.mb-0 Base de datos de industrias locales.(MADS Protocolo Olores p.19)
          .col-lg-2
          .col-lg-4
            img(src="@/assets/curso/tema7/img4.svg")
    separador
    #t_7_3.titulo-segundo.color-acento-contenido
      h2 7.3 Características del plan de muestreo
    h5 Revisión del esquema de procesos de la instalación objeto de estudio. 
    p “La manera más apropiada para la identificación de los focos emisores a muestrear es mediante un esquema básico de procesos de la instalación en el que estén representados, a ser posible, las unidades de proceso a escala. Este esquema de procesos se debe revisar conjuntamente entre el especialista en olfatometría y el técnico o técnicos de la empresa objeto de estudio ya sea durante la visita a las instalaciones o por conversación telefónica, e-mail, etc” (Calidad Ambiental (2008) Fundamentos Básicos C.A.O, p.8)
    .row.mt-4
      .col-lg-6
        h5 Identificación de los potenciales focos emisores.
        p “Sobre el esquema de procesos se identificarán todos los potenciales focos emisores diferenciando las emisiones de focos puntuales, las emisiones de fuentes difusas y las emisiones fugitivas”. (Calidad Ambiental (2008) Fundamentos Básicos C.A.O, p.8)
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right.colorclaro
            |  En el caso de fuentes puntuales, se recabará información de caudales aproximados de emisión. (Calidad Ambiental (2008) Fundamentos Básicos C.A.O, p.8)
          li 
            i.fas.fa-angle-right.colorclaro
            |  Para las fuentes de emisión de tipo difuso se solicitará el dato de las superficies implicadas (Calidad Ambiental (2008) Fundamentos Básicos C.A.O, p.8)

      .col-lg-6
        img(src="@/assets/curso/tema7/img5.png")
    h5.mt-3 Procesos con emisiones discontinuas o no homogéneas.
    p Es importante definir la selección de las siguientes variables
    .row.p-3.colort76.align-items-center
      p.mb-0 El objetivo último de un estudio olfatométrico es evaluar si las emisiones de una determinada instalación pueden ser responsables o no de quejas en la población vecina. A esta conclusión se llega con la interpretación de los valores de concentración de inmisión, habitualmente denominados mapas de olores.
      p (Calidad Ambiental (2008) Fundamentos Básicos C.A.O, p.8)

      .col-lg-5
        img(src="@/assets/curso/tema7/img6.svg")

      .col-lg-7
        p Es importante definir la selección de las siguientes variables
        p (Calidad Ambiental (2008) Fundamentos Básicos C.A.O, p.8)
        p Es importante tener en cuenta tener identificados los potenciales focos emisores, y establecer la manera en la que se produce la emisión.
    h5.mt-5 Tips para la identificación de las fuentes de emisión de olor
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="En las instalaciones")
        .row.justify-content-center
          .col-lg-11
            h4 En las instalaciones
            p En las Instalaciones: conocer si el proceso productivo es constante a lo largo del año o si por el contrario existen situaciones de mayor producción en las que generalmente estarán implicadas mayores emisiones. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="La fuente")
        .row.justify-content-center
          .col-lg-11
            h4 La fuente
            p La Fuente: es necesario tener en cuenta si se trata de emisiones puntuales en periodos determinados o si se trata de emisiones continuas, pero con concentraciones o caudales de emisión variables. En estas situaciones habrá que considerar las situaciones más desfavorables-
      .tarjeta.color-acento-botones--borde.p-4(titulo="Fuentes superficiales")
        .row.justify-content-center
          .col-lg-11
            h4 Fuentes superficiales
            p En ocasiones que la superficie emisora no es homogénea por lo que hay que considerar la realización de distintas tomas en cada una de las zonas identificadas o la realización de muestreos integrados.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Temperatura")
        .row.justify-content-center
          .col-lg-11
            h4 Temperatura
            p Una cuestión que afecta particularmente a determinadas fuentes de emisión superficiales es la temperatura. El aumento de temperatura provoca un incremento de la presión de vapor de los compuestos volátiles responsables del olor. Esto es muy habitual en las emisiones en láminas de agua. Por este motivo los muestreos en balsas de lixiviados en vertederos o en una PTAR deberían realizarse en fechas de mayores temperaturas como primavera o verano.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Numero de Muestras")
        .row.justify-content-center
          .col-lg-11
            h4 Numero de Muestras
            p.mb-0  Como en cualquier tipo de medida, el aumento de repeticiones permite obtener valores más robustos. Esta cuestión tiene particular interés en aquellos focos de la instalación en los que se espere los valores de emisión más altos. Por tanto, a nivel práctico se deben proponer para el plan de muestreo réplicas en aquellas fuentes puntuales con altos caudales y/o altas concentraciones de olor.
            p (Calidad Ambiental (2008) Fundamentos Básicos C.A.O 2 p.9.)
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-4.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema5/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Calidad Ambiental (2008) Contaminación Ambiental por Olores Fundamentos
                  p.text-small Material de apoyo
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://drive.google.com/drive/folders/10ERwcqxld0mlBoEePxjTXEfurHfys3wR')" target="_blank")
                    span Ver
                    i.fas.fa-file          
    
  
</template>

<script>
export default {
  name: 'Tema7',
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

<style lang="sass">
.tabs-a__tab
  background-color: #E8E8E8
.tarjeta.color-acento-botones--borde
  background-color: #F2F6E8
  border: solid 4px #F2F6E8
.lista-ul--color li > i:first-of-type
  color: #0540B7
</style>
