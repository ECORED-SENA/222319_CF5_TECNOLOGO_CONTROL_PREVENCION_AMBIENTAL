<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Cadena de custodia, olores y ruido
    img(src='@/assets/curso/tema12/img1.jpg', alt='Texto que describa la imagen')
    separador
    #t_12_1.titulo-segundo.color-acento-contenido.mt-4
      h2 12.1 Cadena de custodia olores y ruido
    p En la última fase de la recolección de muestras, requiere supervisión y control constante, su importancia radica en organizar las actividades de transporte, preservación, almacenamiento y recepción de las muestras de tal forma que estas no sean alteradas, modificadas o que generen un riesgo que se materialice en resultados no verídicos al procesar las muestras.
    .row.mt-3
      .col-6
        .row.p-4.bgt11
          p De acuerdo con el Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC] (2004) en la guía técnica colombiana [GTC] 100 define a la cadena de custodia como el procedimiento que se da cuando una muestra está bajo custodia (posesión o control físico) de alguien, de modo que se debe evitar la manipulación indebida o alteración de sus características desde la toma de la muestra hasta que se desecha (p.3).
          p Como se puede evidenciar en el esquema, la cadena de custodia es un proceso de control y seguimiento que se inicia antes de la toma de la muestra, ya que debe ser la base para la programación de esta desde el plan de muestreo.
      .col-6
        img(src='@/assets/curso/tema12/img2.jpg', alt='Texto que describa la imagen')
    .row.mt-3.justify-content-center
      .col-lg-10
        img(src='@/assets/curso/tema12/img3.svg', alt='Texto que describa la imagen')
    p.mt-3 A manera general se podría definir que la cadena de custodia involucra de acuerdo con el Instituto nacional de salud [INS] en su manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio, las definiciones de criterios para las siguientes actividades:  
    .row.justify-content-center.mt-4
      .col-lg-10
        .row
          .col-lg-3
            img(src='@/assets/curso/tema12/1.svg', alt='Texto que describa la imagen')

          .col-lg-3
            img(src='@/assets/curso/tema12/2.svg', alt='Texto que describa la imagen')
          .col-lg-6
            .row.colort82222.p-4
              ul.lista-ul--color
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro
                  p.mb-0 La toma de la muestra
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro
                  p.mb-0  El uso del recipiente para la misma
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro
                  p.mb-0  El almacenamiento temporal
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro
                  p.mb-0  El transporte al laboratorio
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro
                  p.mb-0  Almacenamiento en el laboratorio
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro
                  p.mb-0 El desarrollo de los análisis
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro
                  p.mb-0 Desecha la muestra (p.51).
    p.mt-3 Luego la importancia de la cadena de custodia es garantizar el soporte de los datos y conclusiones a los que se llegue con el estudio o ensayo de muestreo de forma adecuada en una situación legal o reglamentaria, busca mantener registros que certifiquen que los procedimientos fueron desarrollados según condiciones técnicas y que los resultados son verídicos y fiables (ICONTEC, (2004), p.3).
    .row.mt-3.justify-content-center
      .col-lg-10
        img(src='@/assets/curso/tema12/img4.svg', alt='Texto que describa la imagen')
    .col-lg-5.colora2.p-2.mt-5
      h4.text-white.mb-0.text-center Formato cadena de custodia OLORES OFENSIVOS
    h5.mt-4 PARA MÁS INFORMACIÓN CONSULTA.
    p.mb-0 ¡Estimado Aprendiz!
    p encontrará el formato que se puede emplear para el registro de las cadenas de custodia para la muestra de olores ofensivos lo invitamos a consultar en MATERIAL DE APOYO / Cadena de custodia.
    .col-lg-5.colora2.p-2.mt-5
      h4.text-white.mb-0.text-center Documentación de custodia en campo de ruido
    .row.mt-3.align-items-center
      .col-lg-4
        img(src='@/assets/curso/tema12/img5.svg', alt='Texto que describa la imagen')
    
      .col-lg-8
        p Para el monitoreo de ruido , como tal no existe muestra, por tanto no existe rotulación y traslado de la misma a laboratorio, se realiza el muestreo in situ y se toma como tal los datos , los cuales requiere ser custodiados y protegidos, ya que esta es la información del muestreo, la custodia radica en los registros realizados en campo y sus medios de soporte sean digitales o medios escritos como libretas de campo, etc; se requiere custodiar los archivos contra robo, cambio de datos, o que se refundan con otros datos o extravíen.




</template>

<script>
export default {
  name: 'Tema12',
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
