<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    h4 Obtener muestras representativas según protocolos y técnicas de análisis fisicoquímico.
    .row.color1
      .col-lg-8.p-5
        p.mt-5 En este componente formativo se caracterizará el estado ambiental de una zona de estudio en sus factores ambientales agua, suelo, olores y ruido, como insumo para realizar un diagnóstico ambiental adecuado, para ello es necesario realizar la toma de muestras que permitirá obtener la información requerida de las condiciones de calidad de un medio.
      .col-lg-4.p-4
        img(src='@/assets/curso/imgi.svg', alt='Texto que describa la imagen')

    p En este componente formativo se caracterizará el estado ambiental de una zona de estudio en sus factores ambientales agua, suelo, olores y ruido, como insumo para realizar un diagnóstico ambiental adecuado, para ello es necesario realizar la toma de muestras que permitirá obtener la información requerida de las condiciones de calidad de un medio.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
