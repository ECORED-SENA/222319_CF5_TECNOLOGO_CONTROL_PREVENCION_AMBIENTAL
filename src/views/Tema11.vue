<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Transporte y recepción de muestras de ruido y olores
    img(src='@/assets/curso/tema11/img1.jpg', alt='Texto que describa la imagen')
    separador
    #t_11_1.titulo-segundo.color-acento-contenido.mt-4
      h2 11.1 Transporte y recepción de datos (Medición de Ruido)
    .row
      .col-6
        p En cuanto al transporte y el manejo de los datos cuando se realizan las mediciones de ruido, La información se tratar teniendo en cuenta los registros diligenciados en campo y Adicionalmente ser muy cuidadosos con los datos de la grabación en el equipo de medición.
        p “Si el sonómetro dispone de memoria, almacene los resultados para una comprobación posterior. Anote el número de memoria o registro y el lugar de medida. Es importante que siempre conserve todos los datos y una ficha de campo bien documentada. Si las medidas fueron almacenadas en el sonómetro, imprima los resultados directamente o almacene los datos en su ordenador personal mediante programas informáticos que aseguren que los datos no puedan ser manipulados de forma accidental o voluntaria.” (GUIAS DE BUENAS PRÁCTICAS p.17)

      .col-6
        img(src='@/assets/curso/tema11/img2.jpg', alt='Texto que describa la imagen')
    .col-lg-4.colora2.p-2.mt-5
      h4.text-white.mb-0.text-center Entrega de documentación del muestreo.
    p.mt-3 Cuando se realizan los estudios o mediciones de ruido el personal técnico encargado de efectuar las mediciones deberá recabar del cliente toda la información que le sea necesaria la cual es significativa antes, durante y después de la medición.
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Protocolo de mediciones: ")
        .row.justify-content-center
          .col-lg-11
            h4 Protocolo de mediciones: 
            p En este debe venir recogida toda la información acerca del ensayo acústico que se quiere realizar. Por ejemplo: Tipo de estudio que se requiere realizar, objetivos del ensayo, métodos utilizados, número de medidas, periodo de medición…etc.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Plano de situación de los puntos de medida: ")
        .row.justify-content-center
          .col-lg-11
            h4 Plano de situación de los puntos de medida: 
            p todos los puntos en los que se vayan a efectuar mediciones de ruidos deben quedar perfectamente señalados en el protocolo de mediciones y en el plano de situación.
            p En aquellos casos, en los que, por requerimiento del cliente, se efectuarán mediciones fuera de los lugares inicialmente señalados, éstas se anotarán como incidencia en la ficha de campo y así constará en el informe.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Niveles máximos de presión aplicables: ")
        .row.justify-content-center
          .col-lg-11
            h4 Niveles máximos de presión aplicables: 
            p Estos niveles los encontraremos en la legislación. Siempre debemos aplicar aquellos niveles que se adecuen a la normativa que regula la actividad estudiada.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Condición de actividad de la zona a estudio: ")
        .row.justify-content-center
          .col-lg-11
            h4 Condición de actividad de la zona a estudio: 
            p el técnico debe asegurar que las condiciones de operatividad se mantienen durante el tiempo que transcurre en la realización del ensayo en las condiciones apropiadas. Si dichas condiciones variaran, se interrumpirá el ensayo hasta tener la garantía de que las condiciones son las que indica el protocolo. En cualquier caso, todas estas incidencias deben quedar reflejadas en la ficha de campo.
   
            p Además, el técnico deberá recabar del cliente información adicional, como el tipo de actividad que se quiere estudiar y el horario de esta o el tipo de zonificación en la que se encuentra la actividad.
      .tarjeta.color-acento-botones--borde.p-4(titulo="El laboratorio debe ser el garante: ")
        .row.justify-content-center
          .col-lg-11
            h4 El laboratorio debe ser el garante:
            p  Que tanto el protocolo de medida, como las medidas incorporadas con posterioridad, se adecuen a la norma. Además, se ha de velar porque el conjunto y la localización de las medidas realizadas sea la correcta.
            p (GUIAS DE BUENAS PRÁCTICAS p.17)
    separador
    #t_11_2.titulo-segundo.color-acento-contenido.mt-4
      h2 11.2 Transporte y almacenamiento de muestras
    .row.align-items-center
      .col-lg-6
        .row.p-4.bgt11
          p las muestras deberían analizarse tan pronto como sea posible después del muestreo. El intervalo entre el muestreo y la medida no debe exceder de 30 horas. Además, «durante el transporte y almacenamiento, las muestras deben mantenerse a menos de 25ºC. La temperatura, sin embargo, debe mantenerse por encima del punto de rocío de las muestras para evitar condensación. Las muestras no deben estar expuestas a la luz solar directa, para minimizar las reacciones (foto)químicas y la difusión». 
          p Para cumplir con este criterio, lo más adecuado es el transporte de las bolsas de muestreo en contenedores isotermos, rígidos y ligeros.
      .col-lg-6
        img(src='@/assets/curso/tema11/img3.jpg', alt='Texto que describa la imagen')
        figcaption.mt-2 Recipiente térmico para el transporte de la muestra de olor en bolsa de Muestreo.
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Sabias que!
            p.mb-0 La Bolsas en donde se capturan las muestras de olores son fabricados en un material de base polímero de Nalophan® las bolsas están diseñadas específicamente para responder a las exigencias de calidad de la norma EN 13725, especialmente para minimizar el riesgo de contaminación de muestras, su tamaño puede variar 8, 10, 40, o 60 Lt.
      .col-lg-10.mt-4
        .row.p-4.colort112
          .col-10
            h5.colortextoazul.mb-0 Para más información consulta
            p.mb-0 ¡Estimado Aprendiz!
            p.mb-0 Para profundizar en el tema lo invitamos a consultar en MATERIAL DE APOYO/  
            p Calidad Ambiental (2008) Contaminación Ambiental por Olores Fundamentos Básicos   
            a.anexo.mb-4.mb-lg-0.mt-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Contaminación Ambiental por Olores Fundamentos Básicos
          .col-1
            img(src='@/assets/curso/tema11/img4.svg', alt='Texto que describa la imagen')

          

</template>

<script>
export default {
  name: 'Tema11',
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
.tarjeta.color-acento-botones--borde
  background-color: #D3EDE5
  border: solid 4px #D3EDE5
.tabs-a__tab
  background-color: #E8E8E8
</style>
