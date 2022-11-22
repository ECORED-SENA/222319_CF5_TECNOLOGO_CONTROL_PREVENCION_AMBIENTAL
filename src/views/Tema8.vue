<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Toma de muestra de olores y ruido
    img(src='@/assets/curso/tema8/img1.jpg', alt='Texto que describa la imagen')
    Audio.color-secundario.mx-3(:audio="require('@/assets/componentes/audios/audio-ej.mp3')")

    #t_8_1.titulo-segundo.color-acento-contenido.mt-4
      h2 8.1 Partes del oído humano
    p El oído Humano es el encargado de recibir las ondas de presión sonora, en este se encuentra dividido en tres partes oído interno, oído medio y oído externo.
    .row 
      .col-lg-6
        .row.mb-5
          .col-md-12.mb-5.mb-md-0

            LineaTiempoD.color-secundario
              p(numero="1" titulo="Oído interno") “Es una compleja estructura interna del oído que comunica directamente con el nervio acústico. Transmite las vibraciones sonoras desde el oído medio a través del líquido de los conductos semicirculares (órgano del equilibrio), que se unen al vestíbulo, conectado con la cóclea (órgano de la audición). Consta de dos partes: el laberinto óseo y el laberinto membranoso.“<br><br>Tomado de: CORPOCALDAS.(2015)  Mediciones de ruido ambiental y elaboración del plan de descontaminación por ruido en villamaría, caldas.(p.22)
              p(numero="2" titulo="Oído medio") “Está formado por la Cavidad timpánica y por el yunque, martillo y estribo, se articulan entre sí y con la membrana timpánica. Las ondas sonoras se transmiten a través de ellos cuando vibra el tímpano”
              p(numero="3" titulo="Oído externo")  “Es la estructura externa constituida por la oreja y el conducto auditivo externo. Las ondas sonoras son conducidas a través del oído externo hasta el oído medio”.
      .col-lg-6
        img(src='@/assets/curso/tema8/img2.svg', alt='Texto que describa la imagen')
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Sabias que!

            p.mb-0 El hueso del cuerpo humano más pequeño se denomina estribo o estapedio y es un hueso perteneciente a la cadena de huesecillos del oído medio con una longitud entre 2,5 y 3mm.
            p Fuente del dato: https://www.optica2000.com/blog/2018/10/23/5-curiosidades.
    separador
    #t_8_2.titulo-segundo.color-acento-contenido
      h2 8.2 Aspectos legales  
    p Tal es la importancia que El Ruido tiene en la actualidad, que en Colombia la Resolución No. 627/06 implementada por el Ministerio de Ambiente y Desarrollo Sostenible en la cual adopta la norma nacional de emisión de ruido y ruido ambiental en la que establece:
    .row.justify-content-center
      .col-lg-10
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right.colorclaro
            |  Los parámetros permisibles

          li 
            i.fas.fa-angle-right.colorclaro
            |  Procedimientos técnicos para la medición de ruido,
          li 
            i.fas.fa-angle-right.colorclaro
            |  Presentación de informes y otras disposiciones.
    p En esta sección, vamos a profundizar en la toma de muestra de ruido, pero antes veremos porque es importante realizar esta medición y su impacto en el hombre.
    separador
    #t_8_3.titulo-segundo.color-acento-contenido
      h2 8.3 Fuentes generadoras de ruido
    .row
      .col-lg-5
        img(src='@/assets/curso/tema8/img3.png', alt='Texto que describa la imagen')

      .col-lg-7
        h5 Según European acústica (2017) los efectos del ruido refieren que:  
        p “El ruido generado en los grandes centros urbanos se convierte en un factor que impacta directamente en la comunidad Influye en gran importancia el tráfico, la actividad industrial, comercial, entre otros quienes aportan grandes cantidades de decibeles en un sector determinado.
        p La medición de los decibeles se convierte en un factor fundamental para determinar las estrategias que se deben implementar en la reducción del mismo, es importante conocer cuáles son las fuentes generadoras de este ruido debido que las actividades industriales y comerciales establecen una serie de aportes en decibeles que afectan directamente a la salud de las personas en la comunidad. Algunas fuentes generadoras se podrían clasificar de la siguiente manera”
    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.color-primario.p-5.bgt81
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema8/img4.png', alt='Texto que describa la imagen')
          
        h2.text-center Fuentes de ruido externas
        p.text-center Como, por ejemplo: el ruido debido al tráfico rodado, al paso de trenes, al tráfico aéreo, al tráfico marítimo, a las obras públicas, a las actividades industriales, a las actividades urbanas comunitarias y a los agentes atmosféricos. 

      .col-md.tarjeta.color-acento-contenido.p-5.bgt82
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema8/img5.png', alt='Texto que describa la imagen')
          
        h2.text-center Fuentes de ruido internas
        p.text-center Como, por ejemplo: el ruido debido a las personas, a los impactos, a los aparatos de radio y televisión, a los aparatos electrodomésticos, a las instalaciones de fontanería y calefacción, a los ascensores, a las instalaciones de ventilación y climatización, a las instalaciones eléctricas y a otras fuentes (como animales). 
    separador
    #t_8_4.titulo-segundo.color-acento-contenido
      h2 8.4 Efectos del ruido en la salud humana
    p Los efectos del ruido en la salud dependen específicamente de la exposición prolongada al ruido ya sea en el día a día o en el puesto de trabajo este puede causar algunos problemas como la hipertensión, enfermedades cardiacas también puede afectar, aunque no lo creamos, la lectura, la atención y la memoria.  
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-b.color-acento-botones.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 “Los fallos en el desempeño de la actividad laboral pueden producir accidentes el ruido con decibeles por encima de los 80 db y aumentar el comportamiento agresivo y establecer ciertos problemas mentales debido a la demanda de tranquilizantes y somníferos por la ansiedad y angustia que este puede provocar.” 
            i.fas.fa-quote-right  
    p El ruido puede causar otros muchos problemas, pero la principal consecuencia social es el deterioro de la audición, que produce incapacidad de entender una conversación en condiciones normales y que está considerado una desventaja social severa. Los efectos más significativos están los siguientes 
    .row
      .col-lg-7
        .row.p-4.colort81
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              |  Cefalea
            li 
              i.fas.fa-angle-right
              |  Dificultad para la comunicación oral
            li 
              i.fas.fa-angle-right
              |  Disminución de la capacidad auditiva

            li 
              i.fas.fa-angle-right
              |  Perturbación del sueño y descanso

            li 
              i.fas.fa-angle-right
              |  Estrés
            li 
              i.fas.fa-angle-right
              |  Fatiga, neurosis, depresión

            li 
              i.fas.fa-angle-right
              |  Molestias o sensaciones desagradables que el ruido provoca, como zumbidos y tinnitus, en forma continua intermitente

            li 
              i.fas.fa-angle-right
              |  Efectos sobre el rendimiento

            li 
              i.fas.fa-angle-right
              |  Alteración del sistema circulatorio

            li 
              i.fas.fa-angle-right
              |  Alteración del sistema digestivo

            li 
              i.fas.fa-angle-right
              |  Aumento de secreciones hormonales (tiroides y suprarrenales)

            li 
              i.fas.fa-angle-right
              |  Trastornos en el sistema neurosensorial.


            
      .col-lg-5  
        img(src='@/assets/curso/tema8/img6.png', alt='Texto que describa la imagen')
    p.mt-4 “Sin embargo, el ruido tiene un componente subjetivo, puesto que cualquier sonido puede ser considerado molesto para algunas personas y para otras de pronto no, esto Incide directamente en el receptor del ruido en donde también influye el horario en el que se produce, el tiempo exposición y los antecedentes socioculturales del sector con respecto a una determinada actividad que produzca el ruido”.
    .row.mt-4.justify-content-center
      .col-lg-12
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Reflexionemos!

            p.mb-0 ¡El ruido molesto!  aunque no lo veamos es considerado un contaminante que afecta de manera importante nuestra salud. ¡Lo invito a que observe este video en el que nos resume lo visto en este espacio! 
            a.anexo.mb-4.mb-lg-0.mt-3(href="https://www.youtube.com/watch?time_continue=75&v=IM4DZDB9ZQo&feature=emb_logo" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Día Internacional de la Conciencia sobre el Ruido
    separador
    #t_8_5.titulo-segundo.color-acento-contenido
      h2 8.5 Medición de ruido                  
    img(src='@/assets/curso/tema8/img7.jpg', alt='Texto que describa la imagen')
    p.mt-4 Es importante diferenciar que la medición del ruido que se va a realizar debe establecer un alcance, puesto que el Ruido Ambiental se mide teniendo en cuenta un área determinada por su impacto (Parques, Zonas Residenciales, Hospitales, entre otros), en cambio la medición por Emisión de Ruido se mide siempre y cuando está relacionada con la generación de ruido que puede generar una empresa o proyecto.
    .col-lg-5.colora2.p-2.mt-4
      h4.text-white.mb-0.text-center Procedimiento para la medición de emisión de ruido
    .row.mt-4
      .col-lg-6
        img(src='@/assets/curso/tema8/img9.png', alt='Texto que describa la imagen')

      .col-lg-6
        h5 Emisión de Ruido.
        .row.mt-3.colort82.p-3
          p Para este caso la medición por emisión de ruido se aplica directamente a las fuentes industriales dicha medición se debe establecer una distancia de 1.5 metros a partir de la fachada o perímetro específico del área a medir en este caso vamos a ver como es el procedimiento para hacer la medición por emisión de ruido.
          p La medición de la emisión de ruido se realiza a 1.5 m de la fachada de una edificación y a 1.20 m a partir del nivel mínimo donde se encuentre instalada la fuente de emisión de ruido
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Recuerda!
            p.mb-0 Es importante que las mediciones de Emisión de Ruido siempre deben hacerse en el espacio público, a 1.50 m del límite de la propiedad en que está instalada la fuente. 
    .col-lg-2.colora2.p-2.mt-4
      h4.text-white.mb-0.text-center Antes del muestreo
    p.mt-3 Se debe tener en cuenta qué antes del muestreo se deben realizar algunas actividades previas con el fin de verificar el equipo de medición (Sonómetro) y revisar tanto el plan de muestreo como las actividades a realizar.
    .row 
      .col-lg-6
        .row.mb-5
          .col-md-12.mb-5.mb-md-0

            LineaTiempoD.color-primario
              p(numero="1" titulo="Se debe verificar") Se debe verificar tanto el funcionamiento como el correcto estado de los equipos de medición con sus respectivas partes verificando que los parámetros de medición estén incorrecto estado y las calibraciones requeridas.
              p(numero="2" titulo="En caso del sonómetro") En caso del sonómetro se debe realizar una calibración con su respectivo calibrador para verificar que esté funcionando respectivamente en caso de no cumplir será realizar un mantenimiento preventivo incluso uno correctivo
              p(numero="3" titulo="Adicionalmente se verifica ")  Adicionalmente se verifica el instrumento que mide las condiciones meteorológicas y de velocidad del viento especialmente el anemómetro con el fin de permitir que sus valores sean representativos y específicos al momento hacia la medición del viento parámetro importante para la medición del ruido.  (recordemos que la velocidad del viento no debe ser mayor a 3 m/s)
              p(numero="4" titulo="Es importante realizar ")  Es importante realizar una identificación del espacio u área de medición mediante instrumentos de interpretación geográfica que permitan verificar el tipo de sector o subsector en donde se va a realizar la medición.
                           
      .col-lg-6
        img(src='@/assets/curso/tema8/img10.png', alt='Texto que describa la imagen')
    .row.mt-4
      .col-lg-6
        img(src='@/assets/curso/tema8/img11.png', alt='Texto que describa la imagen')

      .col-lg-6
        .row.mb-5
          .col-md-12.mb-5.mb-md-0

            LineaTiempoD.color-primario
              p(numero="5" titulo="Otro instrumento que también es importante ") Otro instrumento que también es importante verificar es el GPS el cual determina por coordenadas la ubicación del sitio a medir es importante que no haya desviaciones en el equipo de más de 3 metros dependiendo de la recepción de los satélites que tenga incluido dentro de sus configuraciones.
              p(numero="6" titulo="Al momento de descargar") Al momento de descargar los datos que recibe el sonómetro es importante verificar tanto el software cómo la interface que se emplea para descargar los datos ya que es importante almacenar esta información una vez terminado en muestreo. 
              p(numero="7" titulo="El transporte y la manipulación") El transporte y la manipulación de los equipos durante el proceso de carga es importante verificar que el embalaje sea seguro y específico para los equipos que se van a llevar a cabo a campo. (incluye maletines, cajas, embalajes, etc)
              p(numero="8" titulo="También es importante verificar ")  También es importante verificar los elementos de protección personal qué debe tener presente el personal encargado de la medición debido a que los riesgos y peligros presentes en los diversos sitios se deben tener en cuenta para evitar accidentes.
    separador
    #t_8_7.titulo-segundo.color-acento-contenido
      h2 8.7 Alistamiento
    p A continuación, presentaremos los equipos y materiales para tener en cuenta durante las mediciones de la emisión del ruido es importante tener a la mano la lista de verificación que te permitirá tener presente cuántos y cuáles son los equipos que vas a llevar a campo.
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img12.png' alt='AvatarTop')
        h4.text-center.mb-4.mt-3 Sonómetro

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img13.png' alt='AvatarTop')
        h4.text-center.mb-1.mt-3 Micrófono con pantalla anti-viento

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img14.png' alt='AvatarTop')
        h4.text-center.mb-4.mt-3 Pistófono o Calibrador

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img15.png' alt='AvatarTop')
        h4.text-center.mb-0.mt-3 Trípode telescópico con altura Máxima de 4 mts

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img16.png' alt='AvatarTop')
        h4.text-center.mb-4.mt-3 GPS

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img17.png' alt='AvatarTop')
        h4.text-center.mb-4.mt-3 Anemómetro

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img18.png' alt='AvatarTop')
        h4.text-center.mb-4.mt-3 Flexómetro o Decámetro

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img19.png' alt='AvatarTop')
        h4.text-center.mb-4.mt-3 Cámara fotográfica
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img20.png' alt='AvatarTop')
        h4.text-center.mb-1.mt-3 Computador o Interfase de sonómetro
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema8/img21.png' alt='AvatarTop')
        h4.text-center.mb-1.mt-3 Equipos de Protección Personal (Casco, monogafas, chaleco, botas overol Guantes, tapa oídos)
    separador
    #t_8_8.titulo-segundo.color-acento-contenido
      h2 8.8 Calibración del sonometro
    p Cuando se va a realizar una medición de emisión de ruido el equipo es importante calibrarlo en el sitio de medida para que la verificación tenga una mayor importancia durante el muestreo para eso es importante contar con un calibrador acústico el cual debe venir con el sonómetro.
    .row.justify-content-center
      .col-lg-10
        .row.p-3.colort83
          .row
            .col-lg-2
              img(src='@/assets/curso/tema8/img22.png' alt='AvatarTop')
            .col-lg-10
              p Según el “Protocolo para la medición de emisión de ruido” Al finalizar la evaluación se debe verificar la calibración del sonómetro y de acuerdo con la clase del equipo (Clase 1 ó Clase 2), corroborar que la diferencia entre el ajuste inicial y la verificación final no sea mayor a la precisión del equipo; si por alguna circunstancia la diferencia es mayor, se debe repetir la evaluación.
              .row.mt-4.justify-content-center
                .col-lg-12
                  .row.p-2.colorn.align-items-center
                    .col-lg-1
                      img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
                    .col-lg-11
                      h5.mb-0 ¡Para tener en cuenta!

                      p.mb-0 Recuerda que es necesario verificar que los certificados de calibración electrónica de cada equipo (sonómetro, analizador de espectro, calibrador) estén vigentes, de acuerdo con las especificaciones del fabricante. Se debe adjuntar una copia de los mismos en el informe técnico.
        p.mt-2 Para ampliar la información visualice el siguiente video
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Calibración y uso de sonómetro y dosímetro
                  p.text-small https://www.youtube.com/watch?v=nwLNEZ3B10k&t=404s
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=nwLNEZ3B10k&t=404s')" target="_blank")
                    span Ver
                    i.fas.fa-link
    separador
    #t_8_9.titulo-segundo.color-acento-contenido
      h2 8.9 Configuración del sonometro
    p Estimado aprendiz en esta sección aprenderemos a configurar el sonómetro teniendo en cuenta que el equipo debe previamente ser verificado y ajustado 
    .row.justify-content-center
      .col-lg-10
        .row.bgt84.p-3
          .col-lg-7
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right
                |  Ajuste de fecha y hora 
              li 
                i.fas.fa-angle-right
                |  Definir el intervalo de medida: 15 o 60 minutos
              li 
                i.fas.fa-angle-right
                | Establecer Filtro de tercio de octava <1/3
              li 
                i.fas.fa-angle-right
                | Establecer Filtro de Ponderación frecuencial (A)
              li 
                i.fas.fa-angle-right
                | Establecer Filtro de Ponderación temporal (S) slow
              li 
                i.fas.fa-angle-right
                | Definir medición con parámetro (Leq)
              li 
                i.fas.fa-angle-right
                | Intervalo de medición (1) una hora continua
          .col-lg-5
            img(src='@/assets/curso/tema8/img23.svg' alt='AvatarTop')
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Para tener en cuenta!
            p.mb-0 Cuando se realiza una medición de ruido se debe contemplar mediciones en el horario diurno y en el horario nocturno.
            p Según la resolución 627 de 2006 los periodos y horarios que contempla el cumplimiento normativo son los siguientes
            .tabla-b.color-acento-contenido.mb-5
              .tabla-b__header
                .row
                  .col-lg-6
                    p Diurno
                  .col-lg-6
                    P Nocturno
              table
                tr.bgt2
                  th.text-center De las 7:01 a las 21:00 horas
                  th.text-center De las 21:01 a las 7:00 horas
    separador
    #t_8_10.titulo-segundo.color-acento-contenido
      h2 8.10 Selección de los puntos de medición
    p Antes de realizar el muestreo se debe planificar previamente cuál va a ser la ubicación del sitio objeto de medición, se debe tener en cuenta aquellas estructuras o edificaciones que se van a medir especialmente la fuente emisora del ruido.
    p Sin embargo, podría tenerse en cuenta las siguientes condiciones la elección de los puntos que se van a medir.
    img(src='@/assets/curso/tema8/img24.svg', alt='Texto que describa la imagen')
    separador
    #t_8_11.titulo-segundo.color-acento-contenido
      h2 8.11 Medición con sonometro   
    p Previo a las condiciones que anteriormente se vieron en esta sección
    .row.justify-content-center
      .col-lg-10.colort84.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right.colorclaro
            |  Alistamiento 

          li 
            i.fas.fa-angle-right.colorclaro
            | Calibración del sonómetro 
          li 
            i.fas.fa-angle-right.colorclaro
            | Selección de los puntos de medición 
    p.mt-3 Se procede a realizar las mediciones, el equipo debe estar Colocado fijamente sobre un trípode a una altura de 1.2 mts a partir del nivel mínimo donde se encuentre la fuente instalada a una distancia de 1.5 mts de la fachada o cerramiento perimetral de la empresa, proyecto o fuente emisora de ruido.
    .row
      .col-lg-7
        img(src='@/assets/curso/tema8/img25.png', alt='Texto que describa la imagen')

      .col-lg-5
        .row.p-5.colort81
          p Con el fin de prevenir posibles errores durante la medición el sonómetro debe estar orientado con la pantalla anti-viento hacia la dirección de la fuente específica, según sea el caso únicamente debe estar el técnico que realiza las mediciones, entre más personas que estén presentes en el sitio de medición y más aún cerca al sonómetro, se podría presentar fenómenos como el apantallamiento, que influye negativamente en la recepción de la información por parte del sonómetro.
      figcaption (Fuente imagen: Universidad de Medellin.(2009). “Protocolo para la medición de emisión de ruido, ruido ambiental y realización de mapas de ruido. P.28-29
      p.mt-2 La separación que debe haber entre el técnico (y las demás personas, si las hubiera en el momento de la medición) y el sonómetro debe ser de por lo menos 0.5 m.”
      .row.justify-content-center.mt-4
        .col-lg-8.mt-4
          img(src='@/assets/curso/tema8/img26.png', alt='Texto que describa la imagen')
          figcaption  Universidad de Medellin.(2009). “Protocolo para la medición de emisión de ruido, ruido ambiental y realización de mapas de ruido. P.28-29

    h5.mt-4 Aspectos a tener en cuenta durante la medición:
    .row.mt-4.align-items-center
      .col-lg-6
        img(src='@/assets/curso/tema8/img26.png', alt='Texto que describa la imagen')

      .col-lg-6
        .row.p-5.colort82
          p * <strong>Es importante</strong> cuando se realice la medición en el día o en la noche tener presente que las condiciones en donde el proyecto o la empresa esté funcionando con la mayor intensidad de ruido con el fin de medir en las condiciones reales de operación de la fuente.
          p * Se deben realizar por punto (2) procesos de medición de una hora de captura de información o a intervalos de 15 minutos.
          p * Una Medición (con la fuente de emisión operando en su máximo nivel de producción o de emisión de ruido) 
      
    .row.mt-2.align-items-center
      .col-lg-6
        img(src='@/assets/curso/tema8/img27.png', alt='Texto que describa la imagen')

      .col-lg-6
        .row.p-5.colort82
          p.mb-0.mt-5 * <strong>Una Medición</strong>  (con la fuente de emisión en condiciones neutras de operación o mejor dicho sin la emisión de ruido generado)
          p.mb-5 Todo esto, con el fin de determinar el ruido residual.
    p.mt-3 En caso de presentarse ruidos que no pertenezca a la operación directa de la fuente como (pitos, altavoces, sirenas, perifoneos, etc) estos no deberán ser tenidos en cuenta y la información debe ser relacionada en el informe técnico.
    separador
    #t_8_12.titulo-segundo.color-acento-contenido
      h2 8.12 Parámetros de medición
    p Vamos a reconocer cuales son los principales parámetros empleados para la medición de la emisión de Ruido, para ello es importante identificar el siguiente glosario:
    .row.mt-4
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Ruido")
            .col-md-10.mb-4.mb-md-0
              p Sonido con una intensidad alta que interfiere en la comunicación entre las personas o en sus actividades (dormir, leer, descansar, etc.) y que puede resultar incluso perjudicial para la salud humana. (Protocolo ruido ambiental UM/MADS)
          .row.justify-content-center(titulo="dB(A):")
            .col-md-10.mb-4.mb-md-0
              p Sonido con una intensidad alta que interfiere en la comunicación entre las personas o en sus actividades (dormir, leer, descansar, etc.) y que puede resultar incluso perjudicial para la salud humana. (Protocolo ruido ambiental UM/MADS)
          .row.justify-content-center(titulo="Decibel (dB): ")
            .col-md-10.mb-4.mb-md-0
              p Sonido con una intensidad alta que interfiere en la comunicación entre las personas o en sus actividades (dormir, leer, descansar, etc.) y que puede resultar incluso perjudicial para la salud humana. (Protocolo ruido ambiental UM/MADS)
          .row.justify-content-center(titulo="Emisión de Ruido:  ")
            .col-md-10.mb-4.mb-md-0
              p Sonido con una intensidad alta que interfiere en la comunicación entre las personas o en sus actividades (dormir, leer, descansar, etc.) y que puede resultar incluso perjudicial para la salud humana. (Protocolo ruido ambiental UM/MADS)
          .row.justify-content-center(titulo="Filtros de Tercios de Octava ")
            .col-md-10.mb-4.mb-md-0
              p Sonido con una intensidad alta que interfiere en la comunicación entre las personas o en sus actividades (dormir, leer, descansar, etc.) y que puede resultar incluso perjudicial para la salud humana. (Protocolo ruido ambiental UM/MADS)
          .row.justify-content-center(titulo="Leq")
            .col-md-10.mb-4.mb-md-0
              p Sonido con una intensidad alta que interfiere en la comunicación entre las personas o en sus actividades (dormir, leer, descansar, etc.) y que puede resultar incluso perjudicial para la salud humana. (Protocolo ruido ambiental UM/MADS)
          .row.justify-content-center(titulo="Norma de emisión de ruido")
            .col-md-10.mb-4.mb-md-0
              p Sonido con una intensidad alta que interfiere en la comunicación entre las personas o en sus actividades (dormir, leer, descansar, etc.) y que puede resultar incluso perjudicial para la salud humana. (Protocolo ruido ambiental UM/MADS)
                                                                 
      .col-lg-6
        img(src='@/assets/curso/tema8/img29.jpg', alt='Texto que describa la imagen')
    .row.mt-4
      .col-lg-6
        img(src='@/assets/curso/tema8/img30.jpg', alt='Texto que describa la imagen')

      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Pistófono: ")
            .col-md-10.mb-4.mb-md-0
              p Es una pequeña cavidad provista de un pistón con movimiento de vaivén y desplazamiento medible, que permite establecer una presión conocida en el interior de la cavidad. Generalmente utilizado para efectuar calibraciones de sonómetros.
          .row.justify-content-center(titulo="Ruido de fondo")
            .col-md-10.mb-4.mb-md-0
              p Unidad de medida de nivel sonoro con ponderación frecuencial (A). (Res 627/2006)
          .row.justify-content-center(titulo="Ruido residual")
            .col-md-10.mb-4.mb-md-0
              p Ruido total de todas las fuentes de interferencia en un sistema utilizado para producción, medida o registro de una señal, independiente de la presencia de la señal, incluye ruido eléctrico de los equipos de medida. El ruido de fondo se utiliza algunas veces para expresar el nivel medido cuando la fuente específica no es audible y, a veces, es el valor de un determinado parámetro de ruido, tal como el L90 (nivel excedido durante el 90% del tiempo de medición)..( Res 627/2006)
          .row.justify-content-center(titulo="Sonómetro")
            .col-md-10.mb-4.mb-md-0
              p Es un instrumento de medición de presión sonora, compuesto de micrófono, amplificador, filtros de ponderación e indicador de medida, destinado a la medida de niveles sonoros, siguiendo unas determinadas especificaciones. Res 627/2006)
          .row.justify-content-center(titulo="Filtros (escalas o curvas) de ponderación o compensación frecuencial")
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Son filtros normalizados que permiten ponderar las diversas frecuencias presentes en una señal audible en forma diferencial. En la mayoría de las aplicaciones vinculadas a la detección de los niveles sonoros y a la estandarización de los niveles admisibles para determinadas situaciones, se emplea el filtro de ponderación A.
              p La escala A presenta una buena correlación a largo plazo con el daño auditivo y una aceptable correlación con la sensación de molestia que puede causar el ruido. (Protocolo ruido ambiental UM/MADS)

          .row.justify-content-center(titulo="ponderación A")
            .col-md-10.mb-4.mb-md-0
              p Nivel sonoro continuo equivalente, es el nivel en dBA de un ruido constante hipotético correspondiente a la misma cantidad de energía acústica que el ruido real considerado, en un punto determinado durante un período de tiempo T.( Res 627/2006)
          .row.justify-content-center(titulo="Nivel percentil 90")
            .col-md-10.mb-4.mb-md-0
              p Es el valor máximo permisible de presión sonora, definido para una fuente, por la a(nivel de permanencia o de excedencia 90 %): Es el nivel sonoro que se sobrepasa durante el 90 % del tiempo de observación. Se suele utilizar para indicar lo que se conoce como ruido de fondo, que es el nivel de presión sonora mínimo o de base, que está presente casi todo el tiempo. Se denota por L90 (Protocolo ruido ambiental UM/MADS)
    p.mt-3 Teniendo en cuenta la información anterior, podemos indicar que los principales parámetros para la medición de la emisión de ruido son:
    .row.justify-content-center.colort82.p-3
      .col-lg-2
        img(src='@/assets/curso/tema8/img31.svg', alt='Texto que describa la imagen')

      .col-lg-8                                              
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right.colorclaro
            p  <strong>Nivel de presión sonora</strong> continuo equivalente con filtro de ponderación A, LAeq,T y respuesta lenta (S).
          li 
            i.fas.fa-angle-right.colorclaro
            p  <strong>Ruido residual</strong> , medido como nivel de presión sonora continuo equivalente con filtro de ponderación A, LAeq,T, Residual y respuesta lenta (S).
          li 
            i.fas.fa-angle-right.colorclaro
            p  <strong>Nivel</strong>  percentil L90.
    p.mt-3 Si por alguna razón no es posible medir el ruido residual, se toma como valor indicativo (o representativo) de éste el correspondiente al nivel percentil L90. Esto se debe hacer constar en el informe técnico, en el que a su vez se deben especificar las razones por las cuales no fue posible medir el ruido residual “
    separador
    #t_8_13.titulo-segundo.color-acento-contenido
      h2 8.13 Intervalos y tiempos de medición
    p Cuando se va a realizar la medición se debe establecer unos tiempos hoy intervalos que permitan tomar muestras características representativas de acuerdo con lo establecido en la resolución 627de 2006 el tiempo máximo es de una (1) hora de captura información con 15 minutos como mínimo con el fin de evitar incurrir en mediciones cortas que generarían baja representatividad.
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5.mb-0 ¡No, olvides!

            p Que la Resolución 627 de 2006 establece que la captura de información en decibeles para la EMISION DE RUIDO es de una (1) hora y de quince (15) minutos como mínimo, sin embargo, si las condiciones para medir en esos tiempos no se dan la duración de cada intervalo de tiempo de medición no podrá ser inferior a 5 minutos
            p “Cuando la(s) fuente(s) de emisión de ruido, por su naturaleza o modo de operación, fluctúan, en principio no resulta adecuado tomar las mediciones en los intervalos de tiempo mencionados, por lo tanto, se debe adoptar un intervalo de medición que cubra todas las variaciones significativas de la emisión de ruido de la fuente objeto de estudio.“
    separador
    #t_8_14.titulo-segundo.color-acento-contenido
      h2 8.14 Cálculos
    .col-lg-2.colora2.p-2.mt-4
      h4.text-white.mb-0.text-center Nivel promedio
    p.mt-3 Obtenga un solo valor con las mediciones de cada intervalo de tiempo, si es que las mediciones se hicieron por intervalos, para el LAeq,1h, LAeq,1h, Residual (o nivel percentil 90) para las mediciones con ponderación temporal lenta (S), de acuerdo con la siguiente ecuación:
    .row.justify-content-center
      .col-lg-10
        .row.p-3.colort82.align-items-center
          p En la cual:
          .col-lg-6
            img(src='@/assets/curso/tema8/img32.png', alt='Texto que describa la imagen')

          .col-lg-6
            p.m-0 <strong>LAeq,1h =</strong> Nivel de presión sonora continuo equivalente promedio, dB(A).
            p.m-0 <strong>LAeq,Ti =</strong>  Nivel de presión sonora continuo equivalente de cada evento, dB(A).
            p.m-0 <strong>Ti=</strong>   Intervalo de tiempo del evento individual, min.
    
    p.mt-3 Tenga en cuenta que, si los intervalos de tiempo fueron iguales, la ecuación anterior se puede simplificar de la siguiente manera: 
    .row.justify-content-center      
      .col-lg-10
        .row.p-3.colort82.align-items-center
          p En la cual:
          .col-lg-6
            img(src='@/assets/curso/tema8/img33.png', alt='Texto que describa la imagen')

          .col-lg-6
            p.mb-0 <strong>N =</strong>  Número de mediciones.
    .col-lg-3.colora2.p-2.mt-4
      h4.text-white.mb-0.text-center Calculo emisión o aporte de ruido
    p.mt-3 “Al obtener los registros de los decibeles producto de la medición de ruido durante el monitoreo, el cálculo de la emisión o aporte de ruido de la fuente se obtiene al restar logarítmicamente, el nivel corregido de presión sonora continuo equivalente total con filtro de ponderación (A) del nivel corregido de presión sonora continuo equivalente residual con filtro de ponderación A, del cómo se expresa a continuación
    .row.justify-content-center
      .col-lg-10
        .row.p-3.colort82.align-items-center.justify-content-center
          p En la cual:
          .col-lg-8
            img(src='@/assets/curso/tema8/img34.png', alt='Texto que describa la imagen')

          .col-lg-12
            p.mb-0 Leq emisión = Nivel de emisión de ruido o aporte de la(s) fuente(s) de emisión de ruido con filtro de ponderación A, dB(A).  
            p.mb-0  LRAeq,1h = Nivel corregido de presión sonora continuo equivalente total con filtro de ponderación A, dB(A). 
            p   LRAeq,1h, Residual = Nivel de ruido residual corregido con filtro de ponderación A (medido como nivel de presión sonora continuo equivalente o como nivel percentil 90), dB(A).
    p.mt-3 El nivel de emisión de ruido, o aporte de la(s) fuente(s) de emisión de ruido, con filtro de ponderación A (Leq emisión) es el que se compara con la tabla 1 del artículo 9 (Estándares máximos permisibles de emisión de ruido) de la Resolución 627 del 7 de abril de 2006 del Ministerio de Ambiente, o aquélla que la sustituya, modifique o complemente.
    p Tenga en cuenta que el punto donde se realizó la medición debe ser localizado, para posteriormente reconocerlo e identificarlo para generar las respectivas observaciones que se deriven de los análisis que se concluyan posterior a la medición. “
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5.mb-0 ¡Para tener en cuenta!
            p Si la diferencia aritmética entre LRaeq,1h y LRaeq,1h, Residual es igual o inferior a 3 dB(A), se deberá indicar que el nivel de emisión de ruido es del orden igual o inferior al ruido residual (LRaeq,1h, Residual). En este caso se considera que el nivel de ruido residual es demasiado alto para establecer claramente cuál es la contribución de la fuente.
            p Esto no implica que la fuente de emisión de ruido objeto de estudio esté exenta del cumplimento de la norma, sino que se debe realizar un estudio exhaustivo de la fuente y su entorno, debido a la incertidumbre tan alta de la medición, para poder determinar apropiadamente la emisión de ruido.
    separador
    #t_8_15.titulo-segundo.color-acento-contenido
      h2 8.15 Finalización del muestreo de emisión de ruido      
    p Cuando se finaliza el muestreo y una vez recogido los datos por punto teniendo en cuenta que deben cuantificar una hora por punto medición se debe realizar una calibración final empleando el pistófono, esto permite verificar que la medición cumpla con las condiciones de fiabilidad presentes durante la medición.
    .row.justify-content-center.mt-3
      .col-lg-10
        .row.align-items-center.justify-content-center
          .col-lg-5
            img(src='@/assets/curso/tema8/img35.png', alt='Texto que describa la imagen')
          .col-lg-7
            p Los datos recolectados se deben registrar en las hojas de campo y adicional bajar los datos con el software integrado en el sonómetro a una hoja de cálculo dando así la confirmación de los datos tanto en físico como en digital para posteriormente realizar los respectivos informes de campo.
            p También es importante que durante la medición se debe generar registro fotográfico por cada punto de medición y registrar los datos de la medición del viento en el muestreo que se llevó al lugar.
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5.mb-0 ¡Para recordar!
            p Te presento la ruta del muestreo o medición, este esquema te ayudar a sintetizar las etapas de la medición para realizar la Emisión de ruido
            p ¡¡¡¡Apóyate en esta para la realización de los muestreos de ruido…Anímate a conocer más!!!!
    separador
    #t_8_16.titulo-segundo.color-acento-contenido
      h2 8.16 La ruta de la medicion
    p Ruta de medición para la emisión de ruido:
    .row.justify-content-center.mt-3
      .col-lg-10
        .row 
          .col-lg-6
            .row.mb-5
              .col-md-12.mb-5.mb-md-0

                LineaTiempoD.color-secundario
                  p(numero="1" titulo="Antes de emprender una medición") Antes de emprender una medición para determinar la emisión de ruido es necesario verificar las condiciones meteorológicas. (Verificar la velocidad del viento no debe ser mayor a 3m/s).
                  p(numero="2" titulo="El sonómetro se ubica con el micrófono") El sonómetro se ubica con el micrófono ubicado hacia la fuente a 1.5 de la fachada y a 1.20 de altura, separado del operador del equipo a 50cm para evitar el apantallamiento del sonido.
                  p(numero="3" titulo="Realizar calibración acústica ")  Realizar calibración acústica del sonómetro con el pistofono antes de iniciar la medición.
                  p(numero="4" titulo="Las mediciones se realizan con")  Las mediciones se realizan con respuestas lentas (s) y con filtros de ponderación frecuencial A y Z (antes lineal) y con respuesta por impulso (I) y con filtro de ponderación frecuencial A.
                  p(numero="5" titulo="La medición deberá realizarse en el día ")  La medición deberá realizarse en el día, horario y condiciones de funcionamiento donde la intensidad de la emisión de ruido sea mayor.
                                                      
          .col-lg-6
            img(src='@/assets/curso/tema8/img36.png', alt='Texto que describa la imagen')
        .row.mt-3
                                                      
          .col-lg-6
            img(src='@/assets/curso/tema8/img37.png', alt='Texto que describa la imagen')
          .col-lg-6
            .row.mb-5
              .col-md-12.mb-5.mb-md-0

                LineaTiempoD.color-secundario
                  p(numero="6" titulo="Se deben realizar dos (2) procesos de medición") Se deben realizar dos (2) procesos de medición de por lo menos quince (15) minutos de captura de información cada uno, uno con la(s) fuentes (s) de emisión de ruido funcionando durante el periodo de tiempo de mayor emisión o incidencia para determinar EL NIVEL DE PRESION SONORA CONTINUA (LAeq, 1h) y otro sin las fuente(s) funcionando, para determianr EL RUIDO RESIDUAL, (LRaeq, 1h, residual)
                  p(numero="7" titulo="El ruido residual") EL RUIDO RESIDUAL (nivel de presión sonora continuo equivalente con filtro de ponderación A, LRaer, 1h, Residual) se mide con la(s) fuente(s) especifica(s) apagadas(s) y en el mismo sitio de la medición anterior, manteniendo invariables los condicionantes del entorno y durante el tiempo y forma.
                  p(numero="8" titulo="El número mínimo de mediciones a ejecutar es uno")  El número mínimo de mediciones a ejecutar es uno (1), el cual consta de dos(2) procesos de medición de por lo menos quince (15) minutos de captura de información cada uno, uno con la(s) fuente(s) de emisión de ruido funcionando y otro con la(s) fuente(s) especificas(s) apagada(s), en intervalos de tiempo distribuidos uniformemente en una hora, en el horario diurno.
                  p(numero="9" titulo="Si durante las mediciones se presentan ruidos ocacionale")  Si durante las mediciones se presentan ruidos ocacionales que no pertenecen a la fuente objeto de evaluación, como por ejemplo sirenas, altavoces, etc., éstos no se deben tener en cuenta.
                  p(numero="10" titulo="Cuando la emisión de ruido en un sector o subsector") Cuando la emisión de ruido en un sector o subsector, trascienda a sectores o subsectores vecinos o inmersos en él, los estándares máximos permisibles de emisión de ruido son aquellos que corresponden al sector o subsector más restrictivo.
    separador
    #t_8_17.titulo-segundo.color-acento-contenido
      h2 8.17 Olores
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img38.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los olores ofensivos se convierten en un problema medioambiental dependiendo el origen y el tipo de fuente que la generan, de esta manera da origen de numerosas quejas que con fundamento produce molestias a la población en determinada área de influencia.

          br
          br
          | Aún en el caso de que las sustancias olorosas emitidas no posean ningún efecto perjudicial para la salud, las molestias causadas por olores pueden constituir un serio problema que necesita ser evaluado, investigado en sus causas y solucionado para responder a las quejas de la sociedad. (Fundamentos Básicos C.A.O 2008 pág.5)
    p.mt-3 En esta sección veremos los conceptos generales de los olores ofensivos medición del contaminante y la normatividad asociada para la vigilancia y control de este parámetro contaminante de acuerdo con lo establecido en la resolución 1541 de 2013 en Colombia.
    separador
    #t_8_18.titulo-segundo.color-acento-contenido
      h2 8.18 El olfato
    p El olfato es uno de los sentidos más importantes que tiene el ser humano, el olfato es encargado de detectar y procesar los olores que están presentes en el aire,
    p Todos estos olores penetran por la nariz, específicamente acceden por sus fosas nasales y llegan a la cavidad nasal, donde las células receptoras al detectar este olor los transmite al bulbo olfatorio como impulsos (https://www.partesdel.com) los cuales se encargan de enviar señales al cerebro para interprete esta sensación en un olor.
    p A continuación, lo invitamos a que amplíe esta información visualizando el siguiente video este video.
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 El Olfato y los Olores en el Ambiente
                  p.text-small www.youtube.com/watch?v=PFbwvC-hrqY
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=PFbwvC-hrqY')" target="_blank")
                    span Ver
                    i.fas.fa-link
    separador
    #t_8_19.titulo-segundo.color-acento-contenido
      h2 8.19 Partes del olfato
    p Para entender cómo funciona el sentido del olfato veremos su estructura y las partes principales. Haga clic en cada parte de la nariz para ver su descripción
    .row.mt-4.bgt81.p-3
      .row.align-items-center
        .col-lg-6
          img(src='@/assets/curso/tema8/img39.png', alt='Texto que describa la imagen')
        .col-lg-6
          h5.mb-0.colortextoazul Fosas nasales.
          p Se trata de las dos cavidades que se encuentran sobre la boca. Tomado de : partedel.com. (s,f) La Nariz. 
          h5.mb-0.colortextoazul Nervio olfativo.
          p Localizados en el interior de la cavidad craneana donde cada nervio al ensancharse crea un bulbo olfatorio. Este nervio es totalmente sensitivo, es precisamente quien se encarga de transmitir los impulsos olfatorios desde la nariz hasta el sistema nervioso central. Tomado de : partedel.com. (s,f) La Nariz. 
          h5.mb-0.colortextoazul Pituitaria
          p Se encarga de calentar todo el aire que se respira. En esta zona donde están las células olfativas, donde las sustancias odoríferas las impresionan. Esta presenta un tono amarillento y se halla en el cornete superior, o sea, en el espacio donde las ramas del nervio olfatorio se distribuyen. Tomado de : partedel.com. (s,f) La Nariz. 
      h5.mb-0.mt-4.colortextoazul Cilios olfatorios
      p.mb-0 Se trata de células nerviosas que contienen pelos muy pequeños y visibles solo con un microscopio, las cuales tienen la función de acumular todos los olores para que así los envíe el receptor hacia el encéfalo, lo cual lo realiza en forma de impulso nervioso. 
      p Tomado de : partedel.com. (s,f) La Nariz. 
      h5.mb-0.colortextoazul Bulbo olfativo
      p.mb-0 También se le conoce como lóbulo olfativo. Se trata de una parte del cerebro donde todas señales sensoriales son interpretadas.
      p Refiere a la parte interior de la nariz, la cual está cubierta por una pared compuesta de mucosa, encargada de producir el moco. Esta se encarga de mantener la humedad en la cavidad nasal para así poder impedir la entrada de suciedad, polvo y de ciertas partículas que pueden causar daño si acceden a los pulmones. 
      h5.mb-0.colortextoazul Nariz
      p.mb-0 Posee dos compartimientos que se encuentran divididos por el tabique nasal, donde se muestran dos orificios de salida que se le conoce como narinas. En su otro lado este órgano finaliza en unas aberturas que tienen conexión directa con la faringe.
      p Cada fosa nasal posee en sus paredes laterales unos huesos esponjosos que se le conoce como cornetes. Bajo estos existe un espacio que mantiene la conexión de la nariz y los senos paranasales, lo cual se conoce como meatos. 
      h5.mb-0.colortextoazul Receptores olfativos
      p Estos se hallan en la parte superior de las fosas nasales, aquí es donde el cornete superior es cubierto por la pituitaria amarilla y se crea la conexión con el bulbo olfatorio, estos tienen como función detectar los olores. 
      h5.mb-0.colortextoazul Narinas
      p Se trata de dos cavidades que se mantienen separadas a través de un tabique. Se ubican en la cabeza, justo sobre la boca. 
    separador
    #t_8_20.titulo-segundo.color-acento-contenido
      h2 8.20 Definiciones
    p Para comprender los conceptos y metodologías que se van a profundizar en esta unidad, debemos incorporar las siguientes definiciones:
    .row.justify-content-center.mt-3
      .col-lg-10
        .row 
          .col-lg-6
            .row.mb-5
              .col-md-12.mb-5.mb-md-0

                LineaTiempoD.color-secundario
                  p(numero="1" titulo="OLOR:")  “propiedad organoléptica perceptible por el órgano olfativo cuando inspira determinadas sustancias volátiles.” (Resolución 1541 de 2013)
                  p(numero="2" titulo="OLOR OFENSIVO:")  “es el olor generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana”. (Decreto 948 de1995)
                  p(numero="3" titulo="Emisión") “transferencia de contaminantes de la atmósfera a un receptor. Se entiende por inmisión la acción opuesta a la emisión. Aire inmiscible es el aire respirable al nivel de la tropósfera”. (Decreto 948 de 1995)
                  p(numero="4" titulo="SUSTANCIA DE OLOR OFENSIVO:")   “es aquella que, por sus propiedades organolépticas, composición y tiempo de exposición puede causar olores desagradables”. (Resolución 1541 de 2013)
                  p(numero="5" titulo="EMISIÓN:")   “transferencia de contaminantes de la atmósfera a un receptor. Se entiende por inmisión la acción opuesta a la emisión. Aire inmiscible es el aire respirable al nivel de la tropósfera”. (Decreto 948 de 1995)
                                                      
          .col-lg-6
            img(src='@/assets/curso/tema8/img36.png', alt='Texto que describa la imagen')
        .row.mt-4
          .col-lg-6
            img(src='@/assets/curso/tema8/img40.png', alt='Texto que describa la imagen')

          .col-lg-6
            .row.mb-5
              .col-md-12.mb-5.mb-md-0

                LineaTiempoD.color-secundario
                  p(numero="6" titulo="Umbral de molestia:")   Es la concentración a la que una pequeña parte de la población (< 5%) manifiesta molestias durante un periodo corto de tiempo. Dado que la sensación de molestia puede estar influenciada por factores sicológicos y socioeconómicos un umbral de molestia no puede definirse solo con base en la concentración.
                  p(numero="7" titulo="Umbral de tolerancia")  “es el olor generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana”. (Decreto 948 de1995)
                  p(numero="8" titulo="Unidad de olor:")   “es la cantidad de (una mezcla de) sustancias olorosas presentes en un metro cúbico de gas oloroso (en condiciones normales 1 atmósfera de presión y 0 °C de temperatura) origina una respuesta fisiológica en el umbral del panel”. (Resolución 1541 de 2013)
                  p(numero="9" titulo="Unidad de olor Europea:")   “cantidad de sustancia olorosa qué coma cuando se evapora en 1 metro cúbico de gas neutro en condiciones normales, origina una respuesta fisiológica de un panel (umbral de detección) equivalente al que origina una masa de olor de referencia europea more evaporada en 1 metro cúbico de gas neutro en condiciones normales”. (Resolución 1541 de 2013)
                  p(numero="10" titulo="Olfatometría:")    técnica sensorial de medición de olores que se usa para determinar el grado de molestia que pueden ocasionar ciertos olores a la población.
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5.mb-0 ¿ Sabias que ?

            p Todos los olores son potencialmente ofensivos y que dependen específicamente de:
            p.text-center Frecuencia; Intensidad; Duración; Ofensividad; Localización
    separador
    #t_8_21.titulo-segundo.color-acento-contenido
      h2 8.21 Aspectos legales                                                          
    p Pruebe colocarse los audífonos para escuchar el siguiente audio, haga clic en el ícono de audio
    p Tal es la importancia que el control y seguimiento tiene en la actualidad los OLORES OFENSIVOS, que en Colombia la Resolución No. 1541/2013 implementada por el Ministerio de Ambiente y Desarrollo Sostenible por la cual se establecen los límites permisibles de calidad del aire o de inmisión como el procedimiento para la evaluación de actividades que generan olores ofensivos y se dictan otras disposiciones.
    p En esta norma encontraremos:
    .row.justify-content-center
      .col-lg-10
        .row.colort82.p-3
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right.colorclaro
              p  La reglamentación para la recepción de quejas

            li 
              i.fas.fa-angle-right.colorclaro
              p  Niveles permisibles de inmisión de olores ofensivos

            li 
              i.fas.fa-angle-right.colorclaro
              p  Presentación del PRIO plan para la reducción del impacto por olores ofensivos.
    p.mt-3 En esta sección, vamos a profundizar en la toma de muestra de olores ofensivos, pero antes veremos porque es importante realizar esta medición y su impacto en el hombre.
    separador
    #t_8_22.titulo-segundo.color-acento-contenido
      h2 8.22 Fuentes generadoras de olores
    p La percepción de los olores y las molestias que ellos generan dependen del sitio y la ubicación de las diversas fuentes que pueden ser considerados generadores olores, como criaderos de animales, plantas de tratamiento de aguas residuales, rellenos sanitarios entre otras. 
    p Con respecto al origen de los olores, en los diversos procesos, se podrían clasificar en dos tipos:
    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema8/img41.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones
                .p-4
                  h4.mt-5 Fuentes puntuales: 
                  p.mb-4 Las chimeneas, conductos, salidas de ventilación.
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema8/img42.svg' alt='AvatarTop')

              .tarjeta.color-acento-botones
                .p-4
                  h4 Fuentes difusas:
                  p Generalmente son superficies solidas o liquidas, tales como pozos de secado de lodos, plantas de compostaje, vertederos, piscinas, biofiltros, entre otros” (Lineamiento de Vigilancia Amb, No. 485/10, 2012 p. 1)
    .row.mt-4
      .col-lg-6
        p En la tabla de sustancias de olores ofensivos por actividad resolución 1541 de 2013 se dónde se clasifican actividades y sectores que aportan contaminación por olores ofensivos.
        p Es importante no solamente conocer las actividades de generan los olores sino también, identificar cuáles son las sustancias que lo producen, estas sustancias se pueden encontrar en la corriente de aire en forma gaseosa o líquida, también en los recursos hídricos y en el suelo.
        p A nivel internacional se han clasificado actividades como las principales generadoras de olores ofensivos y por esta razón explicaremos particularmente su incidencia en la generación de olores ofensivos, que se visualizan en la tabla de aspectos ambientales de las sustancias asociadas a olores ofensivos.
      .col-lg-6
        img(src='@/assets/curso/tema8/img43.png', alt='Texto que describa la imagen')
    p.mt-4 <strong>Tabla 1.</strong> Sustancias de olores ofensivos por actividad
    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        .row
          .col-lg-6
            h4 Actividad

          .col-lg-6
            h4 Sustancia

      table
        caption Fuente Imagen: Res 1542/2013
        tr
          td  Procesamiento y conservación de carne, pescado, crustáceos y moluscos.
          td Azufre Total Reducidos (TRS)
        tr
          td  Fabricación de productos de la refinación del petróleo.
          td Sulfuro de hidrógeno (H 2 S) Amoniaco (NH 3)
        tr
          td  Fabricación de pulpas (pastas) celulósicas; papel y cartón
          td Azufre Total Reducido (TRS)
        tr
          td  Curtido y recurtido de cueros; recurtidos y teñido de pieles 
          td Sulfuro de hidrógeno (H2 S) Amoníaco (NH3 )
        tr
          td  Tratamiento y disposición dedesechos no peligrosos y estaciones de transferencia.
          td Sulfuro de hidrógeno (H2 S) Amoníaco (NH3 )
        tr
          td  Planta de tratamiento de aguas residuales
          td Sulfuro de hidrógeno (H2 S)
        tr
          td  Actividades que capten agua de cuerpos de agua receptores de vertimientos.
          td Sulfuro de hidrógeno (H2 S)
        tr
          th  Tratamiento térmico de subproductos de animales
          th Sulfuro de hidrógeno (H2 S) Amoníaco (NH3 )
        tr
          th  Unidad de producción pecuaria
          th Sulfuro de hidrógeno (H2 S) Amoníaco (NH3 )
        tr
          th  Otras actividades
          th Sulfuro de hidrógeno (H2 S) Amoníaco (NH3 )
    .row.bg82
      h5.text-center.mt-4 Tabla 1. Aspectos ambientales de las sustancias asociadas a olores ofensivos.
      img.mt-4(src='@/assets/curso/tema8/img44.svg', alt='Texto que describa la imagen')
      figcaption.mb-5.mt-4 Fuente de imagen: (Lineamiento de Vigilancia Amb.,  No. 485/10, 2012 p.24)
    .tarjeta.tarjeta--azul.p-4.mb-5.mt-4
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11
            .row.align-items-center
              .col-md-9.mb-4.mb-md-0
                h5 Plantas de tratamiento de agua residual
                p “Las plantas de tratamiento de agua residual (PTAR) que tenga fallas en su diseño u operación, sea de tipo físico, químico o biológico, puede generar malos olores. El medio anaerobio es el más susceptible a esta situación, debido al metabolismo de las bacterias sulfato-reductoras, especialmente si en el agua residual existen altas concentraciones de sulfatos y sulfuros.” (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p. 24)

              .col-md-3
                figure
                  img(src='@/assets/curso/tema8/img45.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.align-items-center
              .col-md-9.mb-4.mb-md-0
                h5 Rellenos Sanitarios. 
                p Desde la aparición de las ciudades han existido problemas de salud pública por la generación de residuos, Los olores ofensivos provenientes de los rellenos sanitarios generalmente ocurren por un mal funcionamiento de los biofiltros o prácticas inadecuadas, como reutilización de áreas previamente utilizadas o por descargas incontroladas de residuos. Esta percepción de los malos olores no es permanente, sino que su presencia está asociada a las condiciones del clima y a la dirección de los vientos, siendo las horas nocturnas y los días cálidos que siguen a las lluvias, cuando los olores son más intensos.  (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p.28)

              .col-md-3
                figure
                  img(src='@/assets/curso/tema8/img46.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.align-items-center
              .col-md-9.mb-4.mb-md-0
                h5 Curtido de Cuero.
                p las industrias de curtido y acabado de cueros, tradicionalmente han aparecido ante el mundo como algunas de las más sucias y contaminantes denido al proceso para que este producto tenga el terminado que conocemos comercialmente, como consecuencia El agua residual de la industria de curtido tiene altas concentraciones de materia orgánica,compuestos de nitrógeno, sulfuros, sólidos suspendidos, compuestos de cromo y pH elevado.
                p La alta carga de materia orgánica provoca la creación de condiciones anaerobias en cuerpos o cursos de agua, debido al elevado consumo de oxígeno disuelto. Estas condiciones, además de afectar la vida acuática, favorecen la producción de algunos gases nocivos como ácido sulfhídrico y metano indicadores cualitativos para la generacion de olores ofensivos  de muy mal carácter. (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p. 30) 
                p.mb-0 Generalmente los malos olores provienen de un inadecuado control en las diferentes actividades , las mas significativas son:
                p El pelambre, descarne, la limpieza de equipos y recipientes y el vertimiento de efluentes líquidos y sólidos a los cursos de agua.


              .col-md-3
                figure
                  img(src='@/assets/curso/tema8/img47.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row.align-items-center
              .col-md-9.mb-4.mb-md-0
                h5 Industria petroquímica.
                p “En la industria petrolera, los yacimientos de crudo contienen contaminantes entre los cuales se encuentra el azufre, el cual al combinarse con moléculas de hidrogeno forma el ácido sulfhídrico, que es liberado de los hidrocarburos en forma de gas al suministrarles calor. Existen microorganismos anaerobios capaces de utilizar compuestos de azufre, tales como las bacterias sulfato reductoras (BSR) y las bacterias tiosulfato reductoras (BSTR), las cuales utilizan el azufre como aceptores finales de electrones en la oxidación de la materia orgánica, produciendo principalmente ácido sulfhídrico y mercaptanos”. (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p.30).
                p Otro aspecto importante que tiene que ver con la industria petrolera y la contaminación por olores ofensivos son los derrames de petróleo debido a la ocurrencia de accidentes o atentados a la infraestrucctra petrolera en nuestro pais influyendo en la salud de las poblaciones afectadas.


              .col-md-3
                figure
                  img(src='@/assets/curso/tema8/img48.png', alt='Texto que describa la imagen')
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Dato curioso!
            p Sabias que el Sentido del olfato es tan poderoso que hoy en día se usa algo conocido como marketing olfativo para generar un estado de ánimo con aromas e incentivar alguna acción de consumo.

            a.anexo.mb-4.mb-lg-0.mt-3(href="https://blog.seccionamarilla.com.mx/10-datos-sobre-el-olfato-y-los-aromas/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p 10 Datos sobre el olfato y los olores
    separador
    #t_8_23.titulo-segundo.color-acento-contenido
      h2 8.23 Efectos de los olores ofensivos en la salud humana
    p Un olor que en principio es agradable cuando es percibido con tanta intensidad puede convertirse en molesto, es por eso que el concepto de olor ofensivo también se vuelve muy subjetivo, debido a que los olores dependen específicamente de la intensidad o fuerza y de la concentración en aire del compuesto(s) que lo origina.
    p Así como el ruido, las vibraciones y la luz, el olor es considerado un estresor ambiental. Según la Organización Mundial de la Salud (OMS) “La salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades”. Así la molestia por olor afecta la calidad de vida de las personas. (Fuente: https://olores.mma.gob.cl/efectos-en-salud/)
    p Algunos estudios señalan que los olores pueden afectar al estado psíquico de las personas, influyendo negativamente sobre su estado anímico y pudiendo provocar situaciones de estrés, por esta razón, el olor es considerado un contaminante. Fuente: https://olores.mma.gob.cl/efectos-en-salud/)

    p En resumen, algunos síntomas negativos provocados por la molestia de olor son:
    .row.justify-content-center
      .col-lg-8
        .row.colort82.p-3.justify-content-center
          .col-lg-3
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.colorclaro
                p  Mareos
              li 
                i.fas.fa-angle-right.colorclaro
                p  Náuseas
              li 
                i.fas.fa-angle-right.colorclaro
                p  Vómitos

          .col-lg-5
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.colorclaro
                p  Dolor de cabeza

              li 
                i.fas.fa-angle-right.colorclaro
                p  Problemas de concentración

              li 
                i.fas.fa-angle-right.colorclaro
                p  Otros
    p.mt-3 Algunos de estos efectos dependen de la dosis y pueden aumentar con el tiempo.
    p La OMS señala que algunas sustancias tienen propiedades malolientes en concentraciones muy por debajo de aquellas en las que ocurren efectos tóxicos. Así para la evaluación de efectos sensoriales se han identificado tres umbrales: detección, reconocimiento y molestia.
    separador
    #t_8_24.titulo-segundo.color-acento-contenido
      h2 8.24 Procedimiento para la medición de olores ofensivos
    p Para la medición de olores ofensivos la resolución 627 del año 2006 establece como referencia el protocolo para la medición de olores ofensivos en el cual establecen los procedimientos y caracterización de olores, en esta sección veremos las condiciones generales de la medición en campo en olores ofensivos.
    h5.mb-0 Caracterización 
    p Para caracterizar los olores ofensivos se pueden aplicar dos técnicas: las sensoriales y las analíticas.  en esta sección realizaremos una descripción de las técnicas para su posterior selección dependiendo la fuente y el área de influencia afectada.
    h5.mb-0 Las técnicas sensoriales: 
    p se basan en la percepción de los olores por el olfato humano. También incluyen la determinación del carácter de un olor (mapeo) y el nivel de agrado o desagrado de un olor (tono hedónico) (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p. 33).
    .row.justify-content-center
      .col-lg-10
        .row.colort82.p-3.justify-content-center.mt-4
          h4 Las siguientes técnicas son las más empleadas en las mediciones de olores ofensivos.
          p.mt-3 <strong>Olfatometría Dinámica</strong>
          p “En esta técnica Se emplea el olfato humano como medio de captura y sensor de olor de esta manera se establece una metodología para la determinación del olor de una muestra gaseosa usando un panel panelistas como sensores para posteriormente determinar la emisión. El objetivo primordial de un estudio olfatométrico es evaluar si las emisiones de una determinada instalación pueden ser responsables o no de quejas en la población vecina. A esta conclusión se llega con la interpretación de los valores de concentración de inmisión, habitualmente denominados mapas de olores.” (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p. 33).
    .row.justify-content-center.mt-3
      .col-lg-9.colora2.p-2.mt-4
        h4.text-white.mb-0.text-center Pasos para desarrollar un estudio olfatométrico, en la siguiente imagen resumiremos la información presentada.
    .row.mt-4
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="I. Elaboración del plan de muestreo")
            .col-md-2
              figure
                img(src='@/assets/curso/tema8/1.svg', alt='Texto que describa la imagen')

            .col-md-10.mb-4.mb-md-0
              ul.lista-ul--color
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Conocimiento del proceso

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Identificación de focos de emisión 

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Revisión del esquema de procesos - Tipo de muestreo.

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Numero de muestras

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Selección del día y hora del muestreo

          .row(titulo="II. Toma de análisis de muestras de laboratorio")
            .col-md-2
              figure
                img(src='@/assets/curso/tema8/2.svg', alt='Texto que describa la imagen')

            .col-md-10.mb-4.mb-md-0
              ul.lista-ul--color
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Medidas de temperatura, presión atmosférica, humedad, caudal.
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Puntos de muestreo.
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Toma de muestras.
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Transporte y almacenamiento de muestras.
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Calibración de los panelistas.
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Análisis de la concentración de olor.
          .row(titulo="III. Calculo de las emisiones")
            .col-md-2
              figure
                img(src='@/assets/curso/tema8/3.svg', alt='Texto que describa la imagen')

            .col-md-10.mb-4.mb-md-0
              ul.lista-ul--color
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Medida cuantitativa 

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Magnitud de las emisiones de olores ofensivos.

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Elección de método o tecnología para el control

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Identificación de fuentes prioritarias de emisiones de olores ofensivos

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Planeación de recursos para el control de olores.
          .row(titulo="IV. Calculo de los niveles de inmisión en el entorno.")
            .col-md-2
              figure
                img(src='@/assets/curso/tema8/4.svg', alt='Texto que describa la imagen')

            .col-md-10.mb-4.mb-md-0
              ul.lista-ul--color
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Grado de afectación al entorno
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Modelos de dispersión atmosférica.
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Mapas de concentración de olores ( curvas isodoras)
          .row(titulo="V. Determinación de medidas correctivas y conclusion")
            .col-md-2
              figure
                img(src='@/assets/curso/tema8/5.svg', alt='Texto que describa la imagen')

            .col-md-10.mb-4.mb-md-0
              ul.lista-ul--color
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Estimación de la reducciones alcanzables.

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0  Técnicas de minimización de procesos generadores.

                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Simulación de inmisiones / reducción de puntos críticos.
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Aplicación de medidas correctivas.
                li.mb-0 
                  i.fas.fa-angle-right.colorclaro.mb-0
                  p.mb-0 Desarrollo de nuevas curvas isodoras para evaluación.

      .col-lg-5
        img(src='@/assets/curso/tema8/img49.png', alt='Texto que describa la imagen')
    h4.mt-5 Nomogramas
    p Los nomogramas son instrumentos gráficos bidimensionales que permiten el cálculo aproximado de una función. Los más sencillos contienen dos ejes. En el eje horizontal se coloca la distancia a la que se estima que existe una determinada concentración o a la que se esperaría que haya molestias por olores y en el eje vertical se introduce el valor de emisión del olor (calculado partiendo de datos reales o estimados). (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p.33).
    h4 Mediciones de Campo
    p “Esta metodología se basa en la observación y detección del olor en campo, mediante observadores que se sitúan en diferentes puntos de la zona en la que se quiere realizar la evaluación de la molestia por olores.” (La norma alemana VDI 3940 es la base de esta evaluación y permite obtener la frecuencia de detección del olor)
    p “Otra metodología basada en la detección en campo es el uso de encuestas de olor y el cálculo del índice de molestia. Este método, no sólo tiene en cuenta la frecuencia de detección del olor, sino también la intensidad del olor” (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p.35).
    h4 Tablas FIDO
    p “Esta herramienta se basa en el estudio de cuatro parámetros: la frecuencia, la duración de la detección, la intensidad y el carácter agradable o desagradable del olor. Sirve para determinar si un olor se puede considerar molestia o no, esta metodología se emplea en los EE. UU. “ (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p.35).
    .row.justify-content-center
      .col-lg-10
        .row.bg83.p-3
          .col-lg-2
          .col-lg-7.mt-5
            h5 Intensidad del olor
            img(src='@/assets/curso/tema8/img48.svg', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-10
              h5.mt-4 Olores muy ofensivos
              img(src='@/assets/curso/tema8/img49.svg', alt='Texto que describa la imagen')
              h5.mt-3 Olores ofensivos
              img(src='@/assets/curso/tema8/img50.svg', alt='Texto que describa la imagen')
              h5.mt-3 Olores muy ofensivos
              img(src='@/assets/curso/tema8/img51.svg', alt='Texto que describa la imagen')
              h5.mt-3 Olores no desagradables
              img(src='@/assets/curso/tema8/img52.svg', alt='Texto que describa la imagen')
    h5.mt-5 Técnicas analíticas
    p.mb-0 “Las técnicas analíticas para caracterización de olores son relativamente fáciles de aplicar e identifican cuantitativamente las especies químicas presentes en un olor. La desventaja de la técnica es que no provee información alguna referente a la molestia que puede generar un olor. Por esta razón, las técnicas analíticas son usadas para definir criterios de diseño de métodos de control de olores” (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p.37).
    p  agrado o desagrado de un olor (tono hedónico) (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p. 33).
    p Las siguientes son las técnicas analíticas más empleadas para la detección de olores ofensivos.
    .row.mt-4.bgt85.p-4
      .col-lg-6.mt-5
        h5 Narices Electrónicas.
        p “Las narices electrónicas son una serie de sensores de distintos materiales metálicos que reaccionan de forma distinta a un mismo componente químico. Cuando una muestra olorosa entra en contacto con estos, se produce una respuesta química que se evalúa de forma conjunta para la totalidad de los sensores. La respuesta se relaciona con la intensidad o concentración del olor a partir de los valores obtenidos por panelistas humanos que trasladan los resultados a una base de datos que queda registrada” (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p.37).

      .col-lg-5.mt-5
        img(src='@/assets/curso/tema8/img53.png', alt='Texto que describa la imagen')
    .row.mt-4.bgt85.p-4
      .col-lg-6.mt-5
        h5 Espectrómetros infrarrojos
        p “En esta técnica se emplean los Espectrómetros, en décadas anteriores se han desarrollado mejores tecnologías para análisis de compuestos químicos, como el espectrómetro Transformador Infrarrojo de Paso Abierto de Fourier (Open-Path Fourier transforminfrared / OP-FTIR), el cual ofrece monitoreo remoto, análisis multicompuestos rápidos y mediciones promedio. Esta técnica ha sido aplicada exitosamente en la identificación de fuentes de emisión.”  (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p.37).

      .col-lg-5.mt-5
        img(src='@/assets/curso/tema8/img54.png', alt='Texto que describa la imagen')
    .row.mt-4.bgt85.p-4
      .col-lg-11.mt-5
        h5 Modelización.
        p.mb-5 “Es el método más empleado para valorar la contaminación por olores generada por una fuente. Se basa en el uso de modelos matemáticos de dispersión de contaminantes. La modelización permite evaluar el impacto odorífero que una instalación, existente o futura, tiene o tendrá sobre su entorno próximo. A partir de los datos meteorológicos de la zona se puede efectuar la modelización. El resultado del modelo es la obtención de la concentración de olor en inmisión. Esta concentración puede representarse mediante líneas con un mismo valor de concentración de olor: las isodoras.” (Lineamiento de Vigilancia Amb., No. 485/10, 2012 p.38).
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Repasemos lo aprendido!

            p.mb-0 En el siguiente documento audiovisual, repasaremos los conceptos aprendidos en esta sección.
            p Olores.org (2014, julio 7) Formación y emisión de olores: caracterización y evaluación de impacto. E. P.ans, Odournethttps:
            a.anexo.mb-4.mb-lg-0.mt-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Formación y emisión de olores: caracterización y evaluación de impacto. E. Pagans, Odournet.
    separador
    #t_8_25.titulo-segundo.color-acento-contenido
      h2 8.25 Medición olfatometría dinámica
    .row
      .col-lg-6
        img(src='@/assets/curso/tema8/img55.png', alt='Texto que describa la imagen')

      .col-lg-6
        h5 Generalidades
        p “La evaluación de olores ofensivos a través de métodos sensoriales se basa en la determinación de la concentración del olor por olfatometría dinámica, metodología desarrollada en la NTC 5880 Calidad del Aire. Determinación de la concentración del olor por olfatometría dinámica correspondiente con la Norma Europea EN 13725 estandarizada por el Comité Europeo de Normalización” (CEN) (Protocolo Olores MADS p..31)
        p La norma establece un método para la determinación objetiva de la concentración de olor de una muestra gaseosa usando olfatometría dinámica con evaluadores humanos y la velocidad de emisión de olores que emanan de fuentes puntuales y/o fuentes superficiales) 
        p Así, el estándar es aplicable a la medida de la concentración de olor de sustancias puras, mezclas definidas y mezclas indefinidas de sustancias olorosas gaseosas en aire o nitrógeno, usando olfatometría dinámica con un panel de evaluadores humanos que actúan como sensor. (Protocolo Olores MADS p..31)
    p “La unidad de medida es la unidad de olor europea por metro cúbico: ouE/m3 La concentración de olor se expresa en términos de múltiplos del umbral de detección”. Protocolo Olores MADS p..32)
    p En cuanto al campo de aplicación la norma europea incluye:
    .row.justify-content-center
      .col-lg-10
        .row.colort82.p-4
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right.colorclaro
              p  La medida de la concentración másica del umbral de detección de las sustancias olorosas puras en g/m3 Protocolo Olores MADS p.32)
            li 
              i.fas.fa-angle-right.colorclaro
              p  La medida de la concentración de olor de mezclas de sustancias olorosas en ouE/m3
            li 
              i.fas.fa-angle-right.colorclaro
              p  La medida de la velocidad de emisión de emisiones olorosas de fuentes puntuales y fuentes superficiales (con y sin un flujo hacia el exterior), incluyendo pre-dilución durante el muestreo. Protocolo Olores MADS p.32
            li 
              i.fas.fa-angle-right.colorclaro
              p  El muestreo de sustancias olorosas de emisiones de alta humedad y temperatura (hasta 200°C); Protocolo Olores MADS p.32)
    .row.mt-4.justify-content-center
      .col-lg-12
        .row.p-4.colorn
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¿Sabias que?


            p.mb-0 Sabias que la unidad con la que se establece la concentración de olores se le conoce como OUE /m3

            p Unidad de Olor Europea, la cual se divide por una unidad de volumen (m3) Esta unidad es considerada una concentración de olor, con la cual se establecen los estándares o niveles de inmisión de sustancias de olores ofensivos en Colombia.
            .row.justify-content-center.mt-4
              .col-lg-8
                .tabla-b.color-acento-contenido.mb-5
                  .tabla-b__header
                    h4 Metodos para la medición de mezclas de sustancias según el tipo de fuente
                  table
                    tr.bgt2
                      th Tipo de fuente

                      td Tipo de muestra

                      td Análisis de laboratorio
                    tr.bgt2
                      th Puntual
                      td NTC 5880
                      td NTC 5880
                    tr.bgt2
                      th Difusa

                      td NTC 5880

                      <td rowspan="2"> NTC 5880</td>
                    tr.bgt2
                      th Fugitiva
                      td NTC 6012                     
    p.mt-3 Para resumir los métodos aplicables para la medición de mezclas de olores ofensivos, el protocolo de olores ofensivos del MADS, se sintetizan en la siguiente tabla:
    .row.mt-3.p-3.bgt86
      .col-lg-1
        img(src='@/assets/curso/tema8/img56.svg', alt='Texto que describa la imagen')
      .col-lg-1
      .col-lg-10
        h5 Toma de Muestra.
        p La primera actividad a realizar que es considerada de mayor importancia para abordar cualquier problema de malos olores, es LA IDENTIFICACIÓN DE LAS POSIBLES FUENTES de olor y las características de las emisiones de los olores ofensivos 
    p.mt-3 Cuando se realizan la toma de muestras para el análisis por olfatometría dinámica, depende de la fuente se realiza los siguientes tipos de muestreos.
    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-lg-5
            img(src='@/assets/curso/tema8/img57.png', alt='Texto que describa la imagen')

          .col-lg-7
            .col-lg-10.colora2.p-2
              h4.text-white.mb-0.text-center Muestreo de fuentes puntuales  (Ductos o Chimeneas)
            .row.p-5.bgh1.mt-2
              p Se utiliza el método de la sonda. Este método consiste en la “aspiración” mediante una sonda de una fracción alícuota del gas emitido por la fuente.
        .row.mt-4
          .col-lg-5
            img(src='@/assets/curso/tema8/img58.png', alt='Texto que describa la imagen')

          .col-lg-7
            .col-lg-11.colora2.p-2
              h4.text-white.mb-0.text-center Muestreo de fuentes difusas aireadas  (superficiales activas). 
            .row.p-5.bgh1.mt-2
              p Para este tipo de fuentes (reactor biológico de una depuradora o un biofiltro) se utiliza el método de la Campana En estas situaciones se coloca una campana de base cuadrada (1m2) sobre la superficie a muestrear, de manera que, a la salida de esta, la muestra es succionada mediante una sonda.
              p Tomado de: Libro Sánchez JI, Peña AA, Martínez JV, Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos. Murcia: Calidad Ambiental; 2008. (P. 10)
        .row.mt-4
          .col-lg-5
            img(src='@/assets/curso/tema8/img59.png', alt='Texto que describa la imagen')

          .col-lg-7
            .col-lg-11.colora2.p-2
              h4.text-white.mb-0.text-center Muestreo de fuentes difusas no aireadas  (superficiales pasivas). 
            .row.p-5.bgh1.mt-2
              p Para este tipo de fuentes (decantador de una depuradora o una parva o pila de compost) se utiliza el método del túnel del viento o “cámara de flujo” (conocida también como Caja Lindvall Para ello, mediante un soplante, se insufla un caudal conocido de aire previamente filtrado, a través de la cámara de flujo, tomando la muestra mediante una sonda a la salida de esta.
    p.mt-3 En el caso de que, en cualquiera de las técnicas de muestreo, se requiera llevar a cabo una dilución en campo, «el equipo debe cumplir con los mismos requisitos de exactitud y precisión» que se aplican al olfatómetro. 
    p Por otro lado, durante el muestreo es necesario la medida de una serie de parámetros (temperatura, presión atmosférica, caudal, humedad, etc.) que se utilizarán posteriormente para el cálculo de la emisión de olor de cada foco. Para asegurar la calidad y fiabilidad de las medidas, los instrumentos de medida también deben pasar unas calibraciones periódicas y cumplir los correspondientes criterios de calidad.
    p Fuente: Libro Sánchez JI, Peña AA, Martínez JV, Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos. Murcia: Calidad Ambiental; 2008. (P. 10)
    separador
    #t_8_26.titulo-segundo.color-acento-contenido
      h2 8.26 Métodos para determinar la molestia
    .row 
      .col-lg-4
        img(src='@/assets/curso/tema8/img60.svg', alt='Texto que describa la imagen')
      .col-lg-8
        .row.p-5.bgh1.mt-2
          p.p-4 Por definición cuando se hace referencia a olores ofensivos, necesariamente se están describiendo dos condiciones:  la presencia de una o más sustancias olorosas en el aire y un receptor sensible. En este contexto, es el receptor sensible quien actúa como indicador de una situación dada por olores ofensivos en el ambiente. La materialización de dicha situación se da en cuanto dicho receptor involucra a las Autoridades Ambientales a través de una queja. (protocolo de olores MADS P..8)
    .col-lg-1.colora2.p-2.mt-4
      h4.text-white.mb-0.text-center Quejas
    p.mt-3 Las quejas son el medio por el cual, la comunidad puede manifestar su inconformidad por las molestias que generan los olores, sin embargo, para calificar una queja como válida es necesario que se verifiquen algunos aspectos que le permitan a la autoridad ambiental determinar de manera objetiva la existencia real de una afectación por olores ofensivos. (protocolo de olores MADS P..8)
    p Así, con el propósito de establecer una herramienta que permita minimizar los posibles sesgos en las quejas, se aplica una encuesta estandarizada que corresponde con la NTC 6012-1. A continuación se resume el contenido de la misma y los aspectos a tener en cuenta para su aplicación. (protocolo de olores MADS P..8)
    p para realizar el procedimiento por atención de quejas se establece el siguiente procedimiento.
    .row.justify-content-center
      .col-lg-10
        img(src='@/assets/curso/tema8/img61.svg', alt='Texto que describa la imagen')
    separador
    #t_8_27.titulo-segundo.color-acento-contenido
      h2 8.2 NTC 6012-1 Efectos y evaluaciones de los olores
    h5 Planificación de la encuesta.
    .row
      .col-lg-5
        img(src='@/assets/curso/tema8/img62.png', alt='Texto que describa la imagen')

      .col-lg-7
        h5.mb-0 “Evaluación sicométrica de las molestias por olores.
        p Describe métodos de investigación para establecer los niveles de molestia existente, para lo cual incluye una población control, determina herramientas para estimar áreas de población afectadas y comparar resultados de modelos de dispersión con la realidad descrita por la población. 
        p El alcance de la NTC 6012-1 permite obtener un panorama objetivo de una presunta problemática por olores, así como la evaluación de la eficacia de las medidas tomadas para la prevención y/o control de las emisiones”. (protocolo de olores MADS P.9)
        p una vez definido el requerimiento, se procede a La planificación de la encuesta se debe realizar con base en al menos una vista de campo en la que se verifique la existencia de una o más potenciales actividades generadoras de olores ofensivos y el área afectada identificando de manera aproximada el tamaño de la población en dicha área. (protocolo de olores MADS P..8)
    h5.mt-4 Adicionalmente debe contar con los siguientes aspectos:
    .row.mt-3
      .col-lg-7
        .row.colort811.p-3
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right.colorclaro
              p.mb-0  Respecto a la selección de la zona control (sin afectación por olores ofensivos), entendiendo que se trata de una población de características similares a la de la población afectada (edad, estrato socio económico, cobertura de servicios de saneamiento básico, tiempo de residencia y permanencia en las viviendas entre otros)
            li 
              i.fas.fa-angle-right.colorclaro
              p.mb-0  Se debe definir el programa de aplicación de las encuestas de tal modo que se cubra el área definida
            li 
              i.fas.fa-angle-right.colorclaro
              p.mb-0 Se deben identificar los procesos que se realizan en dichas fuentes de emisión de olores ofensivos.
            li 
              i.fas.fa-angle-right.colorclaro
              p.mb-0 De la aplicación de la encuesta se debe obtener información de los grados de molestia, las zonas afectadas, población expuesta.
            li 
              i.fas.fa-angle-right.colorclaro
              p.mb-0 El personal encargado de la aplicación de las encuestas debe tener experiencia interactuando con comunidades           


      .col-lg-5
        img(src='@/assets/curso/tema8/img63.png', alt='Texto que describa la imagen')
    p.mt-3 (protocolo de olores MADS P..8)
    p para establecer el procedimiento por atención de quejas se establece el siguiente el siguiente procedimiento.
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Medición de la molestia.")
        .row.justify-content-center
          .col-lg-11
            h4 Medición de la molestia.
            p.mb-0 La NTC 6012-1 describe el modelo de cuestionario explicando el objetivo de cada una de las preguntas para la medición de la molestia e información para el análisis de los resultados de su aplicación.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Selección del área")
        .row.justify-content-center
          .col-lg-11
            h4 Selección del área
            p La NTC 6012-1 define los parámetros básicos para la selección del área o zona de afectación en la que se aplicará la encuesta. Entre los que se cuenta el flujo volumétrico de la fuente o actividad generadora. 
            p Esta información puede ser obtenida de referencias bibliográficas considerando que se utiliza para hacer una estimación preliminar de la zona. Algunas de las consideraciones más relevantes a tener en cuenta para seleccionar la zona para la aplicación de la encuesta son la velocidad y dirección del viento, la topografía y la nubosidad.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Muestreo y calidad del procedimiento de recolección de los datos.")
        .row.justify-content-center
          .col-lg-11
            h4 Selección del área
            p La NTC 6012-1 define criterios que se deben tener en cuenta respecto a las características sociodemográficas de la muestra a evaluar.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Evaluación del cuestionario")
        .row.justify-content-center
          .col-lg-11
            h4 Evaluación del cuestionario
            p La NTC 6012-1 describe en este numeral, para la escala de termómetro, la relación matemática entre los grados de molestia que se obtienen de las encuestas y las concentraciones de olor en los casos en los que la exposición evaluada es uniforme en la zona de estudio.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Anexos")
        .row.justify-content-center
          .col-lg-11
            h4 Anexos
            p Los anexos de la NTC6012-1 incluyen modelos para establecer contacto con los encuestados, ejemplos prácticos para la evaluación de los datos obtenidos de la encuesta y el modelo de encuesta.
            p.mb-0 En caso de considerarlo necesario, el modelo de encuesta podrá ser adicionado con más preguntas en función de los objetivos que se planteen para la investigación, los cuales deberán analizarse
            p estadísticamente para obtener resultados representativos.  Este es un modelo de Encuesta de valoración sicométrica de molestia por Olores.
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.p-4.bgt86
          .col-lg-6
            p 1. ¿Qué tan sería considera usted la contaminación general en éste área de residencia?
            .row
              .col-lg-10
                img(src='@/assets/curso/tema8/x1.svg', alt='Texto que describa la imagen')
            p.mt-3 2. ¿Cree usted que los residentes de esta vía son molestados por la contaminación ?
            .row
              .col-lg-10
                img(src='@/assets/curso/tema8/x2.svg', alt='Texto que describa la imagen')   
            p.mt-3 3.1. ¿Qué tan fuertes son los olores fuera de la casa / en la calle?
            .row
              .col-lg-10
                img(src='@/assets/curso/tema8/x3.svg', alt='Texto que describa la imagen')                   
            p.mt-3 3.2. ¿Con qué frecuencia son perceptibles los olores fuera de la casa / en la vida?     
            .row
              .col-lg-10
                img(src='@/assets/curso/tema8/x4.svg', alt='Texto que describa la imagen') 
          .col-lg-6
            p 4.0 Supongamos que este es un termómetro para medir la molestia debida a los olores y al ruido del tráfico, 10 significa que los olores y el ruido del tráfico son intolerablemente molestos y 0 significa que ellos no molestan para nada.
            p ¿Cómo calificaría usted la molestia debido a los olores y al ruido del tráfico aquí en su área residencial en este termómetro? (Por favor marque las divisiones de la escala)
            .row.justify-content-center
              .col-lg-8
                img(src='@/assets/curso/tema8/x5.svg', alt='Texto que describa la imagen') 
            .row.justify-content-center.mt-3
              .col-lg-9
                img(src='@/assets/curso/tema8/x6.svg', alt='Texto que describa la imagen') 
            p.mt-3 5. Por favor indique en esta escala de respuestas su calificación del grado de molestia debido a los olores y al ruido del tráfico.
            .row.justify-content-center.mt-3
              .col-lg-12
                img(src='@/assets/curso/tema8/x7.svg', alt='Texto que describa la imagen')        
    h5.mt-3 PRIO Plan de Reducción de Impacto por Olores.
    p El PRIO se constituye entonces en la herramienta a través de la cual, las actividades generadoras de olores ofensivos logran la prevención y/o mitigación de sus emisiones incorporando buenas prácticas o mejores técnicas disponibles, las primeras entendidas como métodos o técnicas que han demostrado consistentemente resultados superiores a los obtenidos con otros medios y que se utilizan como punto de referencia y las segundas como la fase más eficaz y avanzada de desarrollo de las actividades y de sus modalidades de explotación, que demuestren la capacidad práctica de determinadas técnicas para alcanzar el cumplimiento de los objetivos planteados en este caso para mitigar la generación de olores ofensivos. (protocolo de olores MADS P.43)
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 Para más información consulta.
            p.mb-0 ¡Estimado Aprendiz!
            p Para profundizar en el tema lo invitamos a consultar en MATERIAL DE APOYO GUIA 2/ Resolución y Protocolo de Olores 
            p.mb-0 1. Ministerio de Ambiente y Desarrollo Sostenible (2013) Resolución 1541 
            p.mb-0 2. Ministerio de Ambiente (2014) Protocolo para el monitoreo, control y vigilancia de olores ofensivos.
            p.mb-0 3. Ministerio de trabajo y asunto s sociales España (s,f) NTP 358 Olores un factor de calidad y confort en ambientes interiores.
            p.mb-0 4. Consejería de medio ambiente servicio de calidad ambiental (2007) Evaluación y gestión contra la contaminación acústica Nivel de emisión al exterior (NEE)
            p 5. SENA (2020) Practica de Campo MEDICION DE EMISION DE RUIDO AMBIENTAL

</template>

<script>
export default {
  name: 'Tema8',
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
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #EDEEDA
.linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #F3F4DB!important
.bloque-texto-b.color-acento-botones:before
  background-color: #F8F9FD
.bloque-texto-b i
  color: #A3314F
.linea-tiempo-d.color-primario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #ECF7F4!important
  color: #12263F!important
.tarjeta.color-acento-botones
  background-color: #EDEEDA
.fa-chevron-left:before
  color: #838CAC
.fa-chevron-right:before
  color: #838CAC
.slyder-a__bullets__item--active
  background-color: #80CAB6!important
  border-color:#80CAB6!important
.slyder-a__bullets__item
  background-color: #C6E8DF
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #80CAB6
</style>
