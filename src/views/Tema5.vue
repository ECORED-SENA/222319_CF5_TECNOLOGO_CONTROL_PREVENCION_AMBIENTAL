<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Conceptos Básicos
    p Estimados aprendices.!!!! En esta sección, conoceremos las unidades más importantes que se emplean en la toma de muestras de ruido, para poder entender lo que es el Ruido es necesario comprender algunos términos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.p-3.colort51.align-items-center
          .col-lg-4
            img(src='@/assets/curso/tema5/img1.svg', alt='Texto que describa la imagen')
          .col-lg-1
          .col-lg-7
            h5 Sonido
            p “es un fenómeno físico que consiste en la alteración mecánica de las partículas de un medio elástico, producida por un elemento en vibración, que es capaz de provocar una sensación auditiva” 
        .row.p-3.colort52.align-items-center
          .col-lg-1
          .col-lg-3
            img(src='@/assets/curso/tema5/img2.svg', alt='Texto que describa la imagen')
          .col-lg-1
          .col-lg-7
            h5 Ruido
            p “Se define como aquel sonido no deseado. Es aquella emisión de energía originada por un fenómeno vibratorio al igual que el sonido, que es detectado por el oído pero que en diferencia con este, el ruido provoca una sensación de molestia”
        .row.p-3.colort53.align-items-center
          .col-lg-4
            img(src='@/assets/curso/tema5/img3.svg', alt='Texto que describa la imagen')
          .col-lg-1
          .col-lg-7
            h5 Presión sonora
            p Una fuente sonora produce una cierta cantidad de energía por unidad de tiempo, esto es una cierta potencia sonora.
    .row.mt-5
    h4.mt-5.text-center Con esto presente podremos saber los tipos de ruido:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img4.svg' alt='AvatarTop')

          .tarjeta.color-primario
            .p-4
              h4 Ruido Continuo:
              p Se presenta cuando el nivel de presión sonora es prácticamente constante durante el periodo de observación.
            .row.justify-content-center
              .col-lg-9
                img(src='@/assets/curso/tema5/1.svg' alt='AvatarTop')
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img5.svg' alt='AvatarTop')

          .tarjeta.color-primario
            .p-4
              h4 Ruido Intermitente:
              p Es cuando se producen caídas bruscas hasta el nivel ambiental de forma intermitente, volviéndose a alcanzar el nivel superior.
            .row.justify-content-center
              .col-lg-9
                img(src='@/assets/curso/tema5/2.svg' alt='AvatarTop')
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img6.svg' alt='AvatarTop')

          .tarjeta.color-primario.mb-4
            .p-4
              h4 Ruido de Impacto:
              p Se caracteriza por una elevación brusca de ruido en un tiempo inferior a 35 milisegundos y una duración total de menos de 500 milisegundos.
            .row.justify-content-center
              .col-lg-9
                img(src='@/assets/curso/tema5/3.svg' alt='AvatarTop')
    .row.mt-4.align-items-center.p-4.colort54
      .col-lg-4
        img(src='@/assets/curso/tema5/img7.svg' alt='AvatarTop')
      .col-lg-1
      .col-lg-7
        h5 El ruido como contaminante auditivo se caracteriza por:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            |  Es complejo de medir y cuantificar.
          li 
            i.fas.fa-angle-right
            |  Se percibe solo por un sentido: el Oído, lo cual hace subestimar su efecto.
          li 
            i.fas.fa-angle-right
            |  Tiene un efecto acumulativo en el hombre.
    .col-lg-2.colora2.p-1.mt-4
      h4.text-white.mb-0.text-center Decibelio (dB):
    p.mt-2 “El decibelio es una unidad logarítmica de medida utilizada en diferentes disciplinas de la ciencia usada para comparar una cantidad con otra llamada de referencia”.
    p Adicionalmente este concepto que en “ocasiones se puede tomar un valor medio aproximado. En Acústica la mayoria de las veces el decibelio se utiliza para comparar la presion sonora, en el aire, con una presion de referencia”
    .row.mt-4.align-items-center.p-4.colort55
      .col-lg-7
        h5 Pascal (Pa)
        p Para entender que es un pascal, debemos saber primero que la presión atmosférica es la presión del aire ambiental en ausencia de sonido y este se mide en una unidad denominada Pascal 1 Pascal es igual a una fuerza de 1 newton actuando sobre una superficie de 1 metro cuadrado, y se abrevia 1 (Pa)
      .col-lg-5
        img(src='@/assets/curso/tema5/img8.svg' alt='AvatarTop')
    .row.mt-4.align-items-center.p-4.colort55.mt-4
      .col-lg-7
        h5 Logaritmo
        p Un logaritmo expresa potenciación, es decir, indica el exponente por el cual se debe elevar la base para obtener la potencia indicada, matemáticamente se puede expresar de la siguiente manera:
        p El logaritmo en base b de un número a>0 se representa por logb(a) y es el número c que cumple bc=a  
      .col-lg-5
        img(src='@/assets/curso/tema5/img9.svg' alt='AvatarTop')
    .col-lg-3.colora2.p-2.mt-4
      h4.text-white.mb-0.text-center Leyes fundamentales:
    p.mt-3 El logaritmo como cualquier operación matemática tiene leyes que la rigen, vamos a ver 2 importantes como los son:
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.p-4
          .col-lg-6.colort56.p-4
            .col-lg-1
              img(src='@/assets/curso/tema5/+.svg' alt='AvatarTop')
            h5.mt-3 Suma de logaritmos
            p El logaritmo del producto de dos números positivos es igual a la suma de los logaritmos de dichos números. Esto es:
            .row.justify-content-center
              .col-lg-8.colorbla.p-2
                p.text-center.mb-0 log (a ∙ b) = log(a) + log(b)
          .col-lg-6.colort57.p-4
            .col-lg-1
              img(src='@/assets/curso/tema5/-.svg' alt='AvatarTop')
            h5.mt-3 Resta de logaritmos 
            p El logaritmo del cociente de dos números positivos es igual al logaritmo del numerador menos el logaritmo del denominador. Esto es:

            .row.justify-content-center
              .col-lg-8.colorbla.p-2
                p.text-center.mb-0 log (a ∙ b) = log(a) + log(b)
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-3.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-8
            h5 ¡No olvides!

            p Que a la hora de sumar y restar los logaritmos estos deben tener la misma base, por ejemplo:
          .col-lg-3
            img(src='@/assets/curso/tema5/t.svg', alt='Texto que describa la imagen')
    h5.mt-5 Estadistica
    p La Estadística es la ciencia que se encarga de la recolección, ordenamiento, análisis e interpretación de datos recopilados en una investigación sobre hechos, individuos o grupos, para deducir de ello conclusiones precisas o estimaciones futuras.
    h4.mt-4.text-center Para poder entender la estadística es necesario comprender sus conceptos claves como lo son:
    .row.mt-4
      .col-lg-3
        .row.justify-content-center.colort58.p-4
          .col-lg-11
            img(src='@/assets/curso/tema5/img10.svg', alt='Texto que describa la imagen')
          .col-lg-12
            h5.mt-3 Población
            p.mb-5 “Es un conjunto de individuos al que se desea describir o queremos estudiar”. 
            .row.mb-4
      .col-lg-3
        .row.justify-content-center.colort58.p-4
          .col-lg-9
            img(src='@/assets/curso/tema5/img11.svg', alt='Texto que describa la imagen')
          .col-lg-12
            h5.mt-3 Muestra
            p “Es un conjunto de elementos seleccionados de una población de acuerdo con un plan de acción previamente establecido (muestreo) para obtener conclusiones”  
      
      .col-lg-3
        .row.justify-content-center.colort58.p-4
          .col-lg-11
            img(src='@/assets/curso/tema5/img12.svg', alt='Texto que describa la imagen')
          .col-lg-12
            h5.mt-3 Censo
            p.mb-4 “Es el estudio de todos y cada uno de los elementos de una población. Esta condición hace que este tipo de estudios no sean muy frecuentes”. 
            .row.mb-3
      .col-lg-3
        .row.justify-content-center.colort58.p-4
          .col-lg-6
            img(src='@/assets/curso/tema5/img13.svg', alt='Texto que describa la imagen')
          .col-lg-12
            h5.mt-3 Muestreo
            p.mb-5 “Es la técnica que nos permite seleccionar muestras adecuadas de una población de estudio”.
            .row.mb-5
    p.mt-4 Entendidos ya los conceptos básicos es necesario comprender los procesos que nos permitan analizar y describir un conjunto de datos (PBE, p.50) a esto le llamamos Análisis de Datos y para ello debemos comprender los siguientes conceptos:
    .row
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.justify-content-center(titulo="Media aritmética (Promedio) ")
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/tema5/img15.svg', alt='Texto que describa la imagen')          
            .col-md-7
              p “Es el valor que resulta de dividir la suma de todos los valores observados entre el número de datos considerados.” 
              img(src='@/assets/curso/tema5/f1.svg', alt='Texto que describa la imagen')          
          .row.justify-content-center(titulo="Mediana")
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/tema5/img16.svg', alt='Texto que describa la imagen')          
            .col-md-7
              p “Es el punto medio del total de observaciones, luego de que han sido ordenados y que deja al mismo número de observaciones por debajo de su valor, así como por arriba de él.” 
              p En el caso de que el total de datos sea par, la mediana va a ser dos (2) valores en vez de uno (1), el paso a seguir es sacar el promedio de esos dos datos y ese será los resultados de la mediana. 
              img(src='@/assets/curso/tema5/img17.svg', alt='Texto que describa la imagen')          
          .row.justify-content-center(titulo="Moda")
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/tema5/img18.svg', alt='Texto que describa la imagen')          
            .col-md-7
              p Es el valor de la observación o elemento que tiene la mayor frecuencia.
              img(src='@/assets/curso/tema5/img19.svg', alt='Texto que describa la imagen')          

      .col-lg-5
        img(src='@/assets/curso/tema5/img14.png', alt='Texto que describa la imagen')
    .row.mt-4.p-3.colort59
      h5.text-center Ejemplo
      p.text-center A continuación, se presentará un pequeño ejemplo para reforzar los conocimientos de análisis de datos.
      .col-lg-4
        img(src='@/assets/curso/tema5/ff1.svg', alt='Texto que describa la imagen')

      .col-lg-4
        img(src='@/assets/curso/tema5/ff2.svg', alt='Texto que describa la imagen')

      .col-lg-4
        img(src='@/assets/curso/tema5/ff3.svg', alt='Texto que describa la imagen')
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 Sabías que ! 
            p.mb-0 Bayes, Thomas Clérigo inglés de la primera mitad del siglo XVIII (1702-1761) Es uno de los padres y precursores de la estadística.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Meteorología
    .row.align-items-center.p-3.colort510
      .col-lg-7
        p “Es el estudio de la atmósfera y sus fenómenos – especialmente las condiciones del tiempo y del clima – y las aplicaciones prácticas de este estudio. Además de la física, la química y la dinámica de la atmósfera, la meteorología abarca muchos de los efectos directos de la atmósfera en la superficie de la Tierra, los océanos y vida en general” 
        p Tomado de: ORGANIZACIÓN METEOROLÓGICA MUNDIAL. IV Edicion (2001)..Directivas de orientación la enseñanza y formaciónprofesional del personal en meteorología e hidrología operativa.(p.137). http://www.ideam.gov.co/documents/290086/75945771/Documento+OMM+258+Vol+I/9449f806-2438-4602-bcd0-940e2334621f
      .col-lg-5
        img(src='@/assets/curso/tema5/img20.svg', alt='Texto que describa la imagen')
    p.mt-3  Para poder entender la meteorologia  es necesario comprender sus conceptos claves como lo son:
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.colort511.p-2.align-items-center
          .col-lg-2.mt-4
            img.wid1(src='@/assets/curso/tema5/m.svg', alt='Texto que describa la imagen')
          .col-lg-10.mt-4
            h5.mb-0 Atmósfera 
            p Envoltura gaseosa que rodea la Tierra. Capa gaseosa que rodea nuestro planeta. Además de contener el aire, incluye partículas sólidas y líquidas en suspensión o aerosoles y nubes. ( GLOSARIO METEOROLOGICO IDEAM, p.28)
          h5.mb-0.mt-3 Presión atmosférica
          p Presión (fuerza por unidad de área) ejercida por la atmósfera sobre cualquier superficie en virtud de su peso. Equivale al peso de una columna de aire de sección transversal unitaria que se extiende desde un nivel dado hasta el límite superior de la atmósfera. ( GLOSARIO METEOROLOGICO IDEAM , p.232)
          .tabla-b.color-acento-contenido.mb-5
            .tabla-b__header
              .row
                .col-lg-4
                  h5.mb-0 Atmósfera
                .col-lg-4
                  h5.mb-0 Milimetros de mercurio
                .col-lg-4
                  h5.mb-0 Milbares / Hectopascales                        
            table
              tr.bgt2
                th.text-center 1. Atmósfera
                th.text-center 760 mm de hg 
                th.text-center 1012.25 mb /hpa
            figcaption Adaptación:   Cárdenas, J. (2020).Conversión Unidades Atmosféricas
          p.mt-2 La unidad de medida de la Presión atmosférica se establece en diferentes unidades dependiendo el sistema unidades empleado, algunas de las equivalencias más utilizadas son:
          .tabla-b.color-acento-contenido.mb-5
            .tabla-b__header
              h4.mb-0 Equivalencias entre unidades de presión
            table
              tr.bgt1
                th.text-center Unidad
                td.text-center Atm
                td.text-center bar
                td.text-center Kg/cm3
                td.text-center mca
                td.text-center PSI
                td.text-center Kpa (SI)
              tr.bgt2
                th.text-center 1 atmósfera
                td.text-center.bgt3 1
                td.text-center 1,013
                td.text-center 1,033
                td.text-center 10,333
                td.text-center 14,696
                td.text-center 101,325
              tr.bgt2
                th.text-center 1 bar
                td.text-center 0,987
                td.text-center.bgt3 1
                td.text-center 1,020
                td.text-center 10,197
                td.text-center 14,504
                td.text-center 100
              tr.bgt2
                th.text-center 1 kg/ cm2
                td.text-center 0,968
                td.text-center 0,981
                td.text-center.bgt3 1
                td.text-center 10
                td.text-center 14,223
                td.text-center 98,067
              tr.bgt2
                th.text-center 1 metro columna agua
                td.text-center 0,097
                td.text-center 0,098
                td.text-center 0,100
                td.text-center.bgt3 1
                td.text-center 1,422
                td.text-center 9,806
              tr.bgt2
                th.text-center 1 libra por pulgada cuadrada
                td.text-center 0,068
                td.text-center 0,069
                td.text-center 0,070
                td.text-center 0,703
                td.text-center.bgt3 1
                td.text-center 6,895
              tr.bgt2
                th.text-center 1 kilopascal (SI)
                td.text-center 0,010
                td.text-center 0,010
                td.text-center 0,010
                td.text-center 0,102
                td.text-center 0,145
                td.text-center.bgt3 1
            figcaption adaptado de: cronicaseguridad.com(s,f).Equivalencia entre unidades de presión.https://cronicaseguridad.com/wp-content/uploads/2017/07/Captura-3-480x268.jpg

          .row.justify-content-center.mt-4
            .col-lg-10
              .row.p-3.fonblanco
                .col-lg-6
                  p 1 atm = 1bar = 1kg / cm2 = 10 mia = 100KPa
                  p Equivalencias
                  ul.lista-ul--color
                    li 
                      i.fas.fa-angle-right
                      |  1 atm ≈ 101325 Pa2
                    li 
                      i.fas.fa-angle-right
                      |  1 atm = 1,01325 bar
                    li 
                      i.fas.fa-angle-right
                      |  1 atm = 760 mmHg = 760 Torr
                    li 
                      i.fas.fa-angle-right
                      |  1 atm = 14,696 PSI
                .col-lg-4
                  img(src='@/assets/curso/tema5/img21.svg', alt='Texto que describa la imagen')
          .col-lg-2.mt-4
            img.wid1(src='@/assets/curso/tema5/hot.svg', alt='Texto que describa la imagen')
          .col-lg-10.mt-4
            h5.mb-0 Temperatura 
            p Magnitud física que caracteriza el movimiento aleatorio media de las moléculas en un cuerpo físico. (GLOSARIO METEOROLOGICO IDEAM, p.274), entonces podríamos decir que entre más movimiento de las moléculas mayor es la temperatura que se genera en el elemento, sustancia o cuerpo.
          p.mt-2 La unidad con la que se determina la temperatura se establece en diferentes unidades dependiendo el sistema unidades empleado, algunas de las equivalencias más utilizadas son:
          .row.justify-content-center
            .col-lg-10
              p Tabla de Corversión de unidades de Temperatura
              img(src='@/assets/curso/tema5/img22.svg', alt='Texto que describa la imagen')
          .col-lg-2.mt-4
            img.wid1(src='@/assets/curso/tema5/viento.svg', alt='Texto que describa la imagen')
          .col-lg-10.mt-4
            h5.mb-0 Velocidad del viento: 
            p Relación entre la distancia recorrida por el aire y el tiempo que tarda en recorrerla. La "velocidad instantánea" o, con mayor brevedad, la "velocidad", corresponde al caso de un intervalo de tiempo infinitamente pequeño. La "velocidad media" corresponde al caso en que el intervalo de tiempo es finito. ( GLOSARIO METEOROLOGICO IDEAM , p.298).             
          p.mt-2 Tabla de Conversión de unidades de Velocidad
          .tabla-b.color-acento-contenido.mb-5
            .tabla-b__header
              h4.mb-0 Conversión de unidades de velocidad
            table
              caption.fonblanco.text-center  virtual.lat.(s,f) Conversión de unidades de velocidad.https://vitual.lat/conversion-de-unidades-de-velocidad/
              tr.bgt1
                th.text-center 
                td.text-center Ft/s
                td.text-center Km/h
                td.text-center M/s
                td.text-center Mi/h
                td.text-center M/min
              tr.bgt2
                th.text-center 1 ft/s =
                td.text-center 1
                td.text-center 1.097
                td.text-center 0.3048
                td.text-center 0.6818
                td.text-center 18.288
              tr.bgt2
                th.text-center 1km/h =
                td.text-center 0.9113
                td.text-center 1
                td.text-center 0.2778
                td.text-center 0.6214
                td.text-center 16.667
              tr.bgt2
                th.text-center 1m/s =
                td.text-center 3.281
                td.text-center 3.6
                td.text-center 1
                td.text-center 2.237
                td.text-center 60
              tr.bgt2
                th.text-center 1 mi/h =
                td.text-center 1.467
                td.text-center 1.609
                td.text-center 0.447
                td.text-center 1
                td.text-center 26.817
              tr.bgt2
                th.text-center 1m/min =
                td.text-center 5.468x10-2
                td.text-center 0,06
                td.text-center 1.667x10-2
                td.text-center 3.729x10-2
                td.text-center 1
          p La velocidad del viento mide la componente horizontal del desplazamiento del aire en un punto y en un instante determinados. La unidad de medida es habitualmente metros por segundo (m/s)
          .col-lg-2.mt-4
            img.wid1(src='@/assets/curso/tema5/ventoso.svg', alt='Texto que describa la imagen')
          .col-lg-10.mt-4
            h5.mb-0 Dirección del viento: 
            p.mb-0 Dirección desde la que sopla el viento. (GLOSARIO METEOROLOGICO IDEAM, p.92)
            p Uno de los elementos que referencia la dirección del viento es una rosa de los vientos este grafico un símbolo en forma de círculo que tiene marcado alrededor los rumbos en que se divide la circunferencia del horizonte, y que serían sur, este, norte y oeste.
          h5 Precipitación
          p “ La precipitación es la caída de partículas de agua líquida o sólida que se originan en una nube, atraviesan la atmósfera y llegan al suelo. La cantidad de precipitación es el volumen de agua lluvia que pasa a través de una superficie en un tiempo determinado.” (GLOSARIO METEOROLOGICO IDEAM, p.227)
          .col-lg-2.mt-4
            img.wid1(src='@/assets/curso/tema5/rain.svg', alt='Texto que describa la imagen')
          .col-lg-10.mt-4
            p.mb-0 La precipitación se mide en milímetros de agua, o litros caídos por unidad de superficie (m²), es decir, la altura de la lámina de agua recogida en una superficie plana es medida en mm o L/m².
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Repasemos lo aprendido!
            p.mb-0 La meteorología es una ciencia que nos ayuda de diversas maneras, para ello hemos recopilado este material audiovisual para reforzar su proceso de aprendizaje, en el desarrollo del tema visto.
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorblue.align-items-center
          .col-lg-4
            img(src='@/assets/curso/tema5/img23.svg', alt='Texto que describa la imagen')
          .col-lg-8
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=6byHmIPy2AA" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Conversión de Unidades de Temperatura, Celsius, Kelvin y Fahrenheit.
            a.anexo.mb-4.mb-lg-0.mt-3(href="https://www.youtube.com/watch?v=HiR2ClQuH_E" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Las Unidades de Presión. Pascal, milibar, mm de Hg. Factores de conversión.
    .row.justify-content-center.mt-4
      .col-lg-10
        .row
          .col-lg-6
            .row.justify-content-center.p-4.colort520
              h4 Ejercicios de conversiones de temperatura.
              p <strong>1.</strong> Convertir 110(°C) Grados Celsius a Grados a Fahrenheit (°F)
              .col-lg-8
                img(src='@/assets/curso/tema5/x1.svg', alt='Texto que describa la imagen')
              p <strong>2.</strong> Convertir 63 (°F) Fahrenheit a Grados Celsius (°C)
              .col-lg-8
                img(src='@/assets/curso/tema5/x2.svg', alt='Texto que describa la imagen')

          .col-lg-6 
            .row.justify-content-center.p-4.colort520
              h4 Ejercicios de conversiones de presiones atmosférica
              p <strong>1.</strong> Convertir 3 atmosferas (atm) a bares (bar)
              .col-lg-8
                img(src='@/assets/curso/tema5/x3.svg', alt='Texto que describa la imagen')
              p <strong>2.</strong> Convertir 15 atmosferas (atm) a milímetros de mercurio (mmHg)
              .col-lg-8.mb-4
                img(src='@/assets/curso/tema5/x4.svg', alt='Texto que describa la imagen')
    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Cartografia
    p Cartografía es la ciencia que se encarga del estudio y de la elaboración de mapas para representar grandes extensiones del territorio, buscando una relación matemática en la que las deformaciones sean reconocibles.
    p (Agrim. Rosario,2012, Algunos conceptos sobre: Cartografía y SIG,Uruguay,GTIG)
    p Para poder entender la cartografía es necesario comprender sus conceptos claves como lo son:
    .row.justify-content-center
      .col-lg-10
        .row.p-3.colort521
          .col-lg-2
            img.wid2(src='@/assets/curso/tema5/mundo.svg', alt='Texto que describa la imagen')
          .col-lg-10
            h5 Tierra:
            p “Es un cuerpo tridimensional con aspecto cercano a la esfera, achatada por los polos y ensanchada por el Ecuador, semejante a una figura geométrica denominada elipsoide” (Conceptos Cartograficos, 2012, p..3)
          .row.linea1.mt-4
          .col-lg-2.mt-4
            img.wid2(src='@/assets/curso/tema5/mungo2.svg', alt='Texto que describa la imagen')
          .col-lg-10.mt-4
            h5 Proyecciones cartográficas: 
            p “para representar la superficie terrestre sobre una superficie plana, se hace mediante las proyecciones que se definen como correspondencia biunívoca entre los puntos de la superficie terrestre y sus transformados en el plano llamado plano de proyección” (Conceptos Cartograficos, 2012,p.4)
        .row.p-3.colort522
          .col-lg-4.mt-4
            h5 Sus tipos según la cualidad que conserven son:
            .row.justify-content-center
              .col-lg-10
                ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right
                    |  Proyecciones Conformes 
                  li 
                    i.fas.fa-angle-right
                    | Proyecciones Equivalentes 
                  li 
                    i.fas.fa-angle-right
                    | Proyecciones Equidistantes
                  li 
                    i.fas.fa-angle-right
                    | Proyecciones Afilácticas.
          .col-lg-4.mt-4
            h5 Sus tipos según la figura sobre la cual se proyecta son:
            .row.justify-content-center
              .col-lg-10
                ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right
                    |  Perspectivas o planas

                  li 
                    i.fas.fa-angle-right
                    | Desarrollos
    .col-lg-3.colora2.p-2.mt-4
      h4.text-white.mb-0.text-center Escalas Cartográficas:
    p.mt-2 La relación existente entre las distancias medidas en un plano o mapa y las correspondientes en la realidad se denomina escala, en otras palabras, es una proporción entre dos magnitudes lineales, independientemente del sistema de unidades de longitud que se utilice. (Conceptos Cartográficos, 2012,p.10)
    .row
      .col-lg-6
        img(src='@/assets/curso/tema5/img24.png', alt='Texto que describa la imagen')

      .col-lg-6
        h5.mb-0 Escala Numérica
        p “Está escala se expresa mediante una fracción que indica la relación entre la distancia medida de dos puntos en el mapa (numerador) y la correspondiente en el terreno (denominador) de modo directo entre unidades del sistema, de esta manera 1/60.000.000 indica que una unidad medida en el mapa equivale a 60 millones de unidades medidas en la realidad” (Conceptos Cartograficos, 2012, p.10).
        h5.mb-0 Escala Gráfica
        p “Es una línea situada en el mapa, a menudo en el margen de la hoja, que se ha subdividido en segmentos para indicar las longitudes sobre el mapa de las unidades terrestres de distancia”. (Conceptos cartográficos, 2012,p.10)
        h5.mb-0.mt-3 Escala Textual
        p “se expresa, claramente, mediante una relación escrita y literal. Por ejemplo, en el caso ilustrado sería: “un centímetro representa 600 kilómetros” (Conceptos cartográficos,2012, p.10)
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¿Sabías qué?
            p.mb-0 Antes de hablar de mapas, sabías que uno de los mapas más antiguos cuenta con 16,500 años de antigüedad, es uno de los primeros mapas de ruta que muestra cómo viajar alrededor de las curvas del río Nilo creado en el 1160aC. 
    .col-lg-1.colora2.p-2.mt-4
      h4.text-white.mb-0.text-center Mapas
    p.mt-4 Según la Asociación Cartográfica Internacional un mapa es “la representación convencional gráfica de fenómenos concretos o abstractos, localizados en la Tierra o en cualquier parte del Universo”.
    h4.mt-3.text-center Tipos de mapas según escala de Trabajo:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.mt-4
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Mapas pequeña escala
                p “Son los mapas que representan amplias zonas de la superficie terrestre, por lo que es imprescindible tener en cuenta la esfericidad de la Tierra. En estos mapas el nivel de detalle es pequeño”
                p Usualmente la escala es menor de 1:100.000. 
                p.mb-0 Instituto Geográfico Nacional.(s,f).Conceptos Cartográficos.p.11.  
                p https://www.ign.es/web/resources/cartografiaEnsenanza/conceptosCarto<br>/descargas/Conceptos_Cartograficos_def.pdf
              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img25.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Mapas de gran escala
                p.mb-0 “Son los que representan pequeñas zonas de la Tierra. En estos mapas el detalle de los elementos cartografiados es mayor”
                p Usualmente la escala mayor de 1:10.000 
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img26.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Mapas topográficos
                p.mb-0 “Un mapa topográfico o de propósito general es el que representa gráficamente los principales elementos que conforman la superficie terrestre, como vías de comunicación, hidrografía, relieve, con una precisión adecuada a la escala”. 
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img27.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Mapas temáticos
                p.mb-0 “Un mapa temático o de propósito particular es aquel cuyo objetivo es localizar características o fenómenos particulares. El contenido puede variar: desde información histórica, política, hasta fenómenos naturales como la vegetación o la geología”. 

              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img28.png', alt='Texto que describa la imagen')
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorn.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
          .col-lg-11
            h5 ¡Para tener en cuenta!
            p.mb-0 ¿Sabe cómo se calcula la escala de un mapa? aquí se lo explicamos. Para determinar la escala de un mapa o plano con escala desconocida debemos:
          .row.justify-content-center.mt-4
            .col-lg-8
              .row
                .col-lg-1
                  h4.naran.text-center.p-1 A
                .col-lg-11
                  p Seleccione dos puntos prominentes en el mapa y mida la distancia.
              .row
                .col-lg-1
                  h4.naran.text-center.p-1 B
                .col-lg-11
                  p Determine la escala del mapa o plano sabiendo que: Escala= a la distancia en el terreno (m) entre distancia en el mapa (mm)
                  P Ej: Escala = 1 / 1000.000 y por lo tanto la escala del mapa es 1:1000 000.
              .row
                .col-lg-1
                  h4.naran.text-center.p-1 C
                .col-lg-11
                  p Por medio de un simple proceso matemático (Regla de 3) podremos saber la distancia real
                  img(src='@/assets/curso/tema5/i1.svg', alt='Texto que describa la imagen')
              .row
                .col-lg-1
                  h4.naran.text-center.p-1 D
                .col-lg-11
                  p Establecida la (Regla de 3) Despejamos la incógnita (X)
                  img(src='@/assets/curso/tema5/i2.svg', alt='Texto que describa la imagen')
    .col-lg-3.colora3.p-2.mt-4
      h4.mb-0.text-center ¡Repasemos lo aprendido!
    p.mt-3 La interpretación de los planos y el cálculo de las escalas en la cartografía es un conocimiento que nos ayuda de diversas maneras, para ello hemos recopilado este material audiovisual para reforzar su proceso de aprendizaje, en el desarrollo del tema visto.
    .row.mt-4.justify-content-center
      .col-lg-10
        .row.p-4.colorblue.align-items-center
          .col-lg-4
            img(src='@/assets/curso/tema5/za.svg', alt='Texto que describa la imagen')
          .col-lg-8
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=NLaV_O3dLpk" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p  ¡El mundo no es como lo pintan! - CuriosaMente 77.
            a.anexo.mb-4.mb-lg-0.mt-3(href="https://www.youtube.com/watch?v=-mQtkt33xig " target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Mapas y escalas (ejercicios resueltos) ser un genio en 5 minutos.
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center.colort511.p-2.align-items-center
          h5.mb-0.mt-4 Realicemos un ejemplo:
          p Si tenemos un mapa de Bogotá con escala de 1/1000.000 y deseo saber la distancia real entre dos puntos geográficos A (norte) y B (Sur), al medir esta distancia en el plano corresponde a (5cm) , el proceso calcular dicha distancia  seria el siguiente :
          .col-lg-5
            img(src='@/assets/curso/tema5/img1.png', alt='Texto que describa la imagen')

          .col-lg-7
            p.mb-0 Mapa de Bogotá con escala 
            p de 1/1000.000
            .row
              .col-lg-1
                h4.naran.text-center.p-1 A
              .col-lg-11
                p Plantear la regla de 3:
            .row.justify-content-center
              .col-lg-9
                img(src='@/assets/curso/tema5/z1.svg', alt='Texto que describa la imagen')
          .row.mt-4
            .col-lg-1
              h4.naran.text-center.p-1 B
            .col-lg-11
              p Despejar la incógnita es decir la distancia real y sustituir los datos:
            .col-lg-4
              img(src='@/assets/curso/tema5/z2.svg', alt='Texto que describa la imagen')
          .row.mt-4
            .col-lg-1
              h4.naran.text-center.p-1 C
            .col-lg-11
              p Para finalizar pasamos los cm a km, entonces si sabemos que un 1km equivale a 100.000cm entonces:
            .col-lg-6
              img(src='@/assets/curso/tema5/z3.svg', alt='Texto que describa la imagen')
            p.mt-2 Entonces gracias a la distancia medida sobre el mapa y la escala en el plano logramos hallar la distancia real, la cual sería de 50 Kilómetros para poder desplazarse entre el punto A y el Punto B en Bogotá.
</template>

<script>
export default {
  name: 'Tema5',
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
.tarjeta.color-primario
  background-color: #D9E2F4
.tarjeta.color-primario *
  color: #12263F!important
.lista-ul--color li > i:first-of-type
  color: #FDAC29
.tarjeta--azul1
  background-color: #ECF7F4!important
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul1.acordion__activo
  background-color: #ECF7F4!important
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul1
  background-color: #F6F6F6!important
.slyder-a__bullets__item--active
  background-color: #80CAB6!important
  border-color:#80CAB6!important
.slyder-a__bullets__item
  background-color: #C6E8DF
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #80CAB6
</style>
