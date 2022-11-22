<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Introducción: importancia de la toma de muestra   
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El objetivo del muestreo es obtener una parte representativa del material bajo estudio (olores y ruido.) para la cual se analizarán las variables fisicoquímicas y acústicas de interés, para esto se requiere identificar la importancia de elaborar el plan de muestreo y protocolos de muestreo específicos según factor ambiental evaluado.

          br
          br
          | En algunos casos, el objetivo del muestreo es demostrar que se cumplen las normas especificadas por la legislación ambiental como actividades de prevención y control ambiental y otros casos como medida de corrección y vigilancia cuando se ha ocasionado un impacto ambiental significativo como la contaminación ambiental en un ecosistema o espacio social de interés.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Contextualización inicial del tema
    p Estimado aprendiz. Lo invitamos a realizar la siguiente lectura con el fin de establecer y aprender cuáles son las nuevas tecnologías en detección de olores y toma de muestras.
    .row.justify-content-center
      .col-lg-10
        .row.mt-5.colorv.p-5
          h4.text-center Crean en Alemania una "Nariz" electrónica para advertir sobre situaciones del peligro
          .col-lg-7.mt-4
            h5 Científicos alemanes crearon un aparato similar a la nariz humana, destinado a agilizar la toma de decisiones ante accidentes o problemas de la vida cotidiana, dieron a conocer hoy los investigadores.
            p.mb-0.mt-2 Como parte del proyecto, llamado <i>smelldect</i>, los investigadores del Instituto Tecnológico de Karlsruhe (KIT por sus siglas en alemán) realizaron esta innovación con capacidades superiores a las de nuestras narices.
            p.mt-2 "Nos propusimos crear un sensor barato de olor para el uso diario que podrá insertarse en diversos dispositivos, incluidos los teléfonos inteligentes, dijo el autor principal", Martin Sommer, en un comunicado.
            p.mb-0.mt-2 La nariz electrónica funciona a través de unas nanofibras especiales que perciben los olores y emite unas señales que son detectadas por el chip del sensor, el cual puede revelar la información en apenas unos segundos.
            p.mt-2 El aparato, además de avisarnos sobre alimentos en mal estado o cables ardiendo, también podrá contribuir a otros campos de la ciencia y convertirse en el órgano olfativo de los robots, consideraron los investigadores del KIT.
          .col-lg-5.mt-4
            img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')
        figcaption.mt-2 http://www.cubadebate.cu/noticias/2018/04/28/crean-en-alemania-una-nariz-electronica-para-advertir-sobre-situaciones-de-peligro/#.XvJ682hKjIU

</template>

<script>
export default {
  name: 'Tema2',
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
