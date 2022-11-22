<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Presentación medición de ruido y olores 
    .row.mt-5
    .cajon.color-acento-contenido.p-5.pna
      .row
        .col-lg-10
          p <strong>El muestreo de un sitio potencialmente alterado por sustancias inorgánicas y/o orgánicas tiene como objetivo la obtención de información sobre la concentración de tales sustancias en el medio alterado sea agua, suelo o aire,</strong> de manera que pueda establecerse una comparación con los niveles de referencia propuestos para la protección de la salud humana y los ecosistemas. 
          p La importancia del muestreo radica en que la información sobre sustancias que alteran la calidad del medio sea agua, suelo o aire ha de ser significativa y fiable, de manera que la toma de decisiones sobre el sitio potencialmente alterado o contaminado sea adecuada a su particular problemática.  
        .col-lg-2
          img.mbn(src='@/assets/curso/tema1/img1.png', alt='Texto que describa la imagen')
    .row.mt-4
      .col-lg-2
        img(src='@/assets/curso/tema1/img2.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p 
          span.az <strong>Los grados de significación y fiabilidad de la información a obtener en la muestra es de gran prioridad, para evitar alteraciones en los resultados sea por mala toma de la muestra o mala preservación de esta</strong>
          | , por eso es importante que la adecuación del muestreo debe estar a las peculiares características ambientales de cada sitio. 
        p Esto es así porque dependiendo del muestreo, el valor estadístico obtenido para cada contaminante reflejará con mayor o menor precisión el valor real existente en el sitio. Por tanto, la selección del procedimiento de muestreo es crucial, y de él depende en gran medida que las decisiones tomadas sobre un medio sea agua, suelo o aire potencialmente alterado en su calidad sean eficaces para abordar y solucionar su problemática.        
    p.mt-3 <strong>En esta unidad temática</strong> se desarrollará 12 contenidos virtuales para tener bases concretas en el proceso de toma de muestras en olores y ruido, las actividades que se desarrollaran están contenidas en el siguiente temario:
    .row.justify-content-center
      .col-lg-10
        .row.p-4.bg11
          .col-lg-7
            ul.lista-ul--color
              li 
                i.fas.fa-check
                |  Introducción a la importancia de la toma de muestra
              li 
                i.fas.fa-check
                |   Peligros y Riesgos en toma de muestras.
              li 
                i.fas.fa-check
                |  Capacitación Medio ambiente, seguridad y salud en el trabajo.
              li 
                i.fas.fa-check
                |  Conceptos básicos.
              li 
                i.fas.fa-check
                |  Etapas en la toma de muestras.
              li 
                i.fas.fa-check
                |  El plan de muestreo
              li 
                i.fas.fa-check
                |  Toma de muestra de olores y ruido
              li 
                i.fas.fa-check
                |  Parámetros in situ olores y ruido
              li 
                i.fas.fa-check
                |  Características básicas de rotulado y envasado
              li 
                i.fas.fa-check
                |  Transporte y recepción de muestras de ruido y olores
              li 
                i.fas.fa-check
                |  Cadena de custodia.
              li 
                i.fas.fa-check
                |  Estándares e Interpretación de Resultados en Olores y Ruido.












</template>

<script>
export default {
  name: 'Tema1',
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
.lista-ul--color li > i:first-of-type
  color: #0540B7
</style>
