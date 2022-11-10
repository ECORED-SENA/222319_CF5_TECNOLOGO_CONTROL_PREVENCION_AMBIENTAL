<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Etapa en la toma de muestras.
    p Estimado aprendiz!  En esta sección de la Unidad Temática 3 continuaremos viendo cuales son las principales etapas que se realizan en la toma de muestras que se hacen en campo, las cuales garantizan la trazabilidad y custodia de la muestra en este proceso.
    h5.text-center Las etapas de toma de muestras en campo son:
    .row
      .col-lg-4
        .row.p-2
          .col-lg-4
            img(src='@/assets/curso/tema5/imgx.svg', alt='Texto que describa la imagen')
          .col-lg-8.colorazx
            p.text-center.mt-4 Identificación del sitio de muestreo 
      .col-lg-4
        .row.p-2
          .col-lg-4
            img(src='@/assets/curso/tema5/imgx2.svg', alt='Texto que describa la imagen')
          .col-lg-8.colorazx
            p.text-center.mt-3 Realizar alistamiento de los equipos, materiales e insumos para la toma
      .col-lg-4
        .row.p-2
          .col-lg-4
            img(src='@/assets/curso/tema5/imgx3.svg', alt='Texto que describa la imagen')
          .col-lg-8.colorazx
            p.text-center.mt-4 Realizar un plan de muestreo.
    .row
      .col-lg-4
        .row.p-2
          .col-lg-4
            img(src='@/assets/curso/tema5/zzz1.svg', alt='Texto que describa la imagen')
          .col-lg-8.colorazx
            p.text-center.mt-4 Toma de la muestra
      .col-lg-4
        .row.p-2
          .col-lg-4
            img(src='@/assets/curso/tema5/zzz2.svg', alt='Texto que describa la imagen')
          .col-lg-8.colorazx
            p.text-center.mt-4 Preservación y almacenamiento temporal
      .col-lg-4
        .row.p-2
          .col-lg-4
            img(src='@/assets/curso/tema5/zzz3.svg', alt='Texto que describa la imagen')
          .col-lg-8.colorazx
            p.text-center.mt-4 Transporte.
    p.mt-4 Se revisarán las Etapas 3, 4, 5 y 6 las cuales se enfocan en la toma de muestras y la cadena de custodia. Para esta metodología de ejecución en la toma de muestras, se tomará como referencia las normativas:
    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Toma de muestras de ruido
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/p1.svg' alt='AvatarTop')

          .tarjeta.color-primario1
            .p-4
              h4.text-center Protocolo
              p.text-center Para la medición de emisión de ruido, ruido ambiental y realización de mapas de ruido
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/p2.svg' alt='AvatarTop')

          .tarjeta.color-primario1
            .p-4
              h4.text-center Normas
              p.text-center NTC 3522
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/p3.svg' alt='AvatarTop')

          .tarjeta.color-primario1
            .p-4
              h4.text-center Resolución:
              p.text-center 626 de 2006
    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Toma de muestras de olores
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/p1.svg' alt='AvatarTop')

          .tarjeta.color-primario1
            .p-4
              h4.text-center Protocolo
              p.text-center Para la medición de emisión de ruido, ruido ambiental y realización de mapas de ruido
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/p2.svg' alt='AvatarTop')

          .tarjeta.color-primario1
            .p-4
              h4.text-center Normas
              p.text-center NTC 3522
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/p3.svg' alt='AvatarTop')

          .tarjeta.color-primario1
            .p-4
              h4.text-center Resolución:
              p.text-center 626 de 2006
</template>

<script>
export default {
  name: 'Tema6',
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
.tarjeta.color-primario1
  background-color: #EDEEDA
  width: 390px
.tarjeta-avatar > img
  width: 105px
.tarjeta-avatar .tarjeta
  padding-top: 30px!important
</style>
