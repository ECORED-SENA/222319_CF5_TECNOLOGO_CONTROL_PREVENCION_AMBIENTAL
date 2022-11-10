<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Características básicas de rotulado y envasado 
    img(src='@/assets/curso/tema10/img1.png', alt='Texto que describa la imagen')
    separador
    #t_10_1.titulo-segundo.color-acento-contenido.mt-4
      h2 10.1 Rotulado y envasado
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema10/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 En la recolección de las muestras el rotulado y posterior envasado se convierte en una actividad de vital importancia en la caracterización de los monitoreos para este caso vamos a ver cómo es que se rotula y se envasa las muestras de olores y de ruido.
    separador
    #t_10_2.titulo-segundo.color-acento-contenido.mt-4
      h2 10.2 Tratamiento de la muestras de ruido
    .row
      .col-lg-6
        .row.p-4.colort10
          p En monitoreo de ruido a diferencia de otros parámetros, las muestras tomadas en campo leche no se deben caracterizar o generar algún tratamiento especial hablando físico químicamente por esa razón no existe concepto de rotulado ni envasado debido a que la información se establece de manera digital y se retiene en medios magnéticos o memorias internas del equipo en cuestión.
          p Sin embargo, los formatos de campo y material fotográfico registrado se deben cuidar teniendo en cuenta la cadena de custodia de material información requerida en el muestreo y posterior análisis en el laboratorio
      .col-lg-6
        img(src='@/assets/curso/tema10/img3.jpg', alt='Texto que describa la imagen')
    separador
    #t_10_3.titulo-segundo.color-acento-contenido.mt-4
      h2 10.3 Tratamiento de las muestras de olores
    p “Las muestras son contenidas en bolsas de Nalophan, la cuales deben ir rotuladas con la información: día y hora del muestreo, debe tenerse en cuenta que estas muestras deben mantenerse a menos de 25ºC. La temperatura, sin embargo, debe mantenerse por encima del punto de rocío de las muestras para evitar condensación. Las muestras no deben estar expuestas a la luz solar directa, para minimizar las reacciones (foto)químicas y la difusión” 
    .col-lg-5.colora2.p-2.mt-5
      h4.text-white.mb-0.text-center Procedimiento para la medición de emisión de ruido  
    .row.mt-4.align-items-center
      .col-lg-1
      .col-lg-2
        img(src='@/assets/curso/tema10/img4.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        .row.p-5.colort102
          p.mt-5.mb-5 Bolsas para toma de muestras de gas están fabricados de Nalophan® se diseñan específicamente para responder a las exigencias de calidad de la norma EN 13725, especialmente para minimizar el riesgo de contaminación de muestras, su tamaño puede variar 8, 10, 40, o 60 Lts. 
</template>

<script>
export default {
  name: 'Tema10',
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
