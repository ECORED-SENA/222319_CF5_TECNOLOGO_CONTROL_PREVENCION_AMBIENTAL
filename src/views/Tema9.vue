<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Parámetros in situ olores y ruido
    img(src='@/assets/curso/tema9/img1.png', alt='Texto que describa la imagen')
    separador
    #t_9_1.titulo-segundo.color-acento-contenido.mt-4
      h2 9.1 Parámetro de medición in situ para la caracterización del ruido
    p Cuando se realizan las mediciones de ruido en campo se debe tener presente las condiciones meteorológicas, especialmente la velocidad y dirección del viento, este parámetro medido in situ es fundamental para tener presentes posibles variaciones en la medición el viento influye sustancialmente en las mediciones del ruido, por esta razón el protocolo de medición de ruido establece como condición la medición de este parámetro siempre y cuando la velocidad del viento no supere los 3m/s.
    separador
    #t_9_2.titulo-segundo.color-acento-contenido.mt-4
      h2 9.2 Condiciones meteorologicas   
    p Antes de entrar en materia, debemos conocer que es el viento, desde la antigüedad, los marineros utilizaron velas para aprovechar la fuerza del viento y alcanzar la mayor velocidad en sus travesías.
    p Aunque el viento no solo es importante para impulsar las embarcaciones, sino que además está relacionado con otros fenómenos atmosféricos y es el principal generador del oleaje. (fuente http://medclic.es/es/el-viento/)
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 ICTS SOCIB (2019) El viento
                  p.text-small ¿Sabes cómo se produce el viento? En este video ilustraremos como se genera este fenómeno.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=nwLNEZ3B10k&t=404s')" target="_blank")
                    span Ver
                    i.fas.fa-link
    .row.bg9
      .col-lg-1.colora2.p-2.mt-4
        h4.text-white.mb-0.text-center El viento
      .row.mt-3.align-items-center
        .col-lg-6
          p Uno de los parámetros que se mide In situ, es la velocidad con la que el viento circula, por es importante cuantificar este parámetro, antes de ejecutar cualquier tipo de medición de ruido, también se debe tener presente las condiciones meteorológicas relacionadas con la lluvia, lloviznas, truenos, y en algunos casos específicos la caída de granizo pues estas condiciones afectan sustancialmente las mediciones del ruido.
          p La medición del parámetro meteorológico (viento), se debe realizar con un anemómetro o en su defecto con una estación meteorológica que mida lo mida, ¡el parámetro no debe ser superior a 3 metros sobre segundo con el fin tener mediciones óptimas …tenga cuidado!  si durante el desarrollo de la medición esta variable supera la condición anteriormente definida, el muestreo debe ser detenido o reprogramado según el caso.
        .col-lg-6
          img(src="@/assets/curso/tema9/img2.png")
      .col-lg-2.colora2.p-2.mt-5
        h4.text-white.mb-0.text-center El Anemómetro
      p.mt-4 Este instrumento mide la velocidad con la que el viento circula exprésala velocidad en metros por segundo o en nudos entre paréntesis millas náuticas sobre h cierra paréntesis el anemómetro es un instrumento que consiste en 3 o 4 cazoletas montada sobre un eje vertical girando a la velocidad que sopla miento este instrumento detecta la revoluciones a las que gira y de esa manera marca la velocidad (fuente http://medclic.es/es/el-viento/)
      .row.bgblanco.p-4.align-items-center
        .col-1
          img(src="@/assets/curso/tema9/img3.png")

        .col-11
          p.mb-0 Ya teniendo en cuenta lo que establece el protocolo para la medición de ruido la lluvia también es considerado un factor climático que influye en la medición debido a que la lloviznas , lluvias torrenciales, entre otras incrementan los decibeles en las mediciones dependiendo del caso, debido a que los pavimentos deben estar secos la superficie donde se realizan y la interferencia de la lluvia con respecto a estas estructuras aumentan considerablemente los decibeles influyendo directamente en una medición errónea por esta razón cuando se presenten lluvias es importante detener las mediciones o reprogramarlas según el caso.
      .col-lg-2.colora2.p-2.mt-5
        h4.text-white.mb-0.text-center Medición con anemómetro
      .row.bgblanco.p-4.align-items-center.mt-4
        .col-1
          img(src="@/assets/curso/tema9/img4.png")

        .col-11
          p.mb-0 La medición con el anemómetro consiste en unas 3 o 4 copas colocadas sobre un palo vertical, estas copas hacen girar el palo, y cada vez que el anemómetro rota completamente se calcula la velocidad del viento en función de las RPM, es decir las vueltas o revoluciones por minuto. Se van almacenando estas mediciones y se calcula un promedio (Fuente:https://anemometros.pro/blog/como-usar-un-anemometro/)
      .row.mt-4.justify-content-center
        .col-lg-10
          .row.p-4.colorn
            .col-lg-1
              img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
            .col-lg-11
              h5 Dato curioso
              p.mb-0 ¿Sabes qué pasaría si se acabara el viento?
              p.mb-0 Según algunos estudios si el viento desapareciera de la Tierra y de nuestras vidas por alguna causa misteriosa, para devolverle de nuevo su movimiento se necesitarías un poder equivalente al de casi siete millones de bombas atómicas. 
              p ¡Anímate a conocer más!
          figcaption.mt-2 Fuente Dato:https://www.eltiempohoy.es/otono/curiosidades
      p.mt-4 Hay varios tipos de anemómetros disponibles en el mercado, algunos son digitales mientras que otros son mecánicos, pero hay también anemómetros de interferómetro del láser y modelos ultrasónicos.
      p Los anemómetros láser Doppler son los más precisos de todos, y es por eso que se utilizan comúnmente en los laboratorios. 
      p También se encuentran los anemómetros de las estaciones meteorológicas están equipados con sensores que les permiten más parámetros, desde la temperatura, ya sea interior o exterior, hasta el índice de calor, el tiempo, la fase lunar, la humedad, la sensación térmica, la dirección del viento y la velocidad de la ráfaga de viento.
      figcaption.mt-2 (Fuente: https://anemometros.pro/blog/como-usar-un-anemometro/)
      .col-lg-3.colora2.p-2.mt-5
        h4.text-white.mb-0.text-center Medición con anemómetro
      .row.bgblanco.p-4.align-items-center.mt-4
        .col-1
          img(src="@/assets/curso/tema9/img5.png")

        .col-11
          h5.mb-0 Anemómetro de rotación

          p.mb-0 El anemómetro de rotación está formado por varias cazoletas o hélices unidas a un disco cuyo giro es proporcional a la velocidad del viento, El disco alterna tres zonas blancas y tres negras, uniformemente distribuidas sobre su superficie. A escasa distancia de este, un opto acoplador diferenciará dichas zonas produciendo tres pulsos eléctricos o ciclos por cada vuelta o giro del disco. 
          p Tomado de: profesaulosuna.(s,f). El viento.p.3
      separador
    #t_9_3.titulo-segundo.color-acento-contenido.mt-4
      h2 9.3 La veleta
    p La veleta es un dispositivo giratorio que consta de una placa que gira libremente, esta gira en un rango de 360 º y un señalador que indica la dirección del viento.
    p Este dispositivo gira y apunta a la dirección de que sopla el viento normalmente consta de un extremo en forma de flecha o punta El II del otro una placa cuya función es conducir el viento hacia la dirección opuesta para ello es importante tener en cuenta los puntos cardinales en dónde la Rosa de los vientos entre paréntesis gráfico que indica el (Norte, Sur, Oriente y el Occidente) de esta manera se establece directamente la dirección de acuerdo con el sentido.
    .row.mt-3
      .col-lg-5
        img(src="@/assets/curso/tema9/img6.png")

      .col-lg-7
        p El funcionamiento de este instrumento meteorológico es bastante sencillo. Posee un eje pivotante y un señalador de la dirección del viento. Este señalador está colocado sobre el eje y distribuye su peso de forma equilibrada. El diseño, sea cual sea, debe tener un puntero o indicador en la parte que menor resistencia al viento ofrece para que sirva como indicador de la dirección del viento
        p Para interpretar la dirección del viento, cuando el viento sople, la veleta ponga la parte del señalador que menos resistencia pone al aire en la parte predominante de la dirección del viento. Por lo general, la dirección del viento es la misma a la que la veleta esté apuntando. 
        p Una veleta que está mirando hacia el norte estará indicando que el viento tiene dirección norte.
        p Estos son los principales parámetros in situ que se miden IN SITU para la realización de los estudios de ruido, a continuación, te invitamos a realizar la siguiente actividad que fortalecerá los conocimientos adquiridos.
        figcaption.text-center.mt-2  Fuente: https://www.meteorologiaenred.com/veleta.html

</template>

<script>
export default {
  name: 'Tema9',
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
