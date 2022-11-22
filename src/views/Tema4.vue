<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Capacitación Medio ambiente, seguridad y salud en el trabajo
    img(src='@/assets/curso/tema4/1.jpg', alt='Texto que describa la imagen')
    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Introducción
    .row
      .col-lg-6
        img(src='@/assets/curso/tema4/2.jpg', alt='Texto que describa la imagen')
      .col-lg-6
        .row.p-4.coloaz
          p La capacitación tiene como propositito el desarrollo de habilidades y capacidades de todo el personal con el fin de formar un talento humano más competente y hábil. Además, se busca promocionar la salud, el autocuidado y prevenir la enfermedad y los riesgos. 
          p.mb-0 Sin embargo, más allá de esto, busca estimular el interés de todos sobre los beneficios de aplicar el sistema de gestión, incentivar la participación en las diferentes actividades sobre autocuidado, factores de riesgo y condiciones inseguras, busca mejorar el clima laboral, la productividad, la salud física y mental, y mejorar la capacidad de los empleados para identificar y reportar factores de riesgos presentes en su labor
          p En esta sección vamos a ver las principales condiciones a tener en cuenta para realizar los monitoreos ambientales en la determinación de olores y ruido en campo.
    .col-lg-4.colora2.p-1.mt-4
      h4.text-white.mb-0 Capacitación y SST en muestreo
    p.mt-3 Uno de los ejes estratégicos para realizar un proceso de toma y tratamiento de muestras acorde a la normatividad es el recurso humano que realizará esa función, el cual debe contar con las habilidades y competencias necesarias, estas mismas son definidas dentro de un instrumento de planeación denominado plan de capacitación. 
    .col-lg-3.colora2.p-1.mt-4
      h4.text-white.mb-0 Formación y evaluación
    figure.mt-4.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h3.mt-3 Para el personal de toma de muestras de olores y Ruido 
    p La capacitación del personal de toma de muestras olores y ruido también requiere capacitación en el tema de muestreo, aunque no existe todavía norma de competencia laboral que obligue la normativa.
    p Sin embargo, para el personal que realice labor de campo en olores, ya sea para toma de muestra o elaboración de encuestas la Resolución 1541 de 2013 establece: 
    .row.mt-4.p-4.colorazq
      h4 Olores Ofensivos
      .row
        .col-lg-5
          img(src='@/assets/curso/tema4/img1.jpg', alt='Texto que describa la imagen')
        .col-lg-7
          h5 Personal con experiencia en comunidades.
          p La NTC 6012-1 establece que el aseguramiento de la calidad de los datos se logra aplicando los criterios y requisitos establecidos previamente, en tal sentido, la planificación y ejecución de la encuesta debe realizarse por personal que tenga experiencia interactuando con comunidades y que tenga claridad en los objetivos de la evaluación que se realizará a través de la encuesta quienes no necesariamente deben ser profesionales del área de las ciencias sociales.(Protocolo Olores Ofensivos p.12)
          p  <strong>Identificación del personal responsable:</strong> Es muy útil identificar las personas encargadas de desarrollar las acciones del plan de olores molestos, sus tareas específicas y el momento en que ellas son terminadas. (Protocolo Olores Ofesivos p.52)
    .row.mt-4.p-4.colorazq2
      h4 Ruido.
      .row
        .col-lg-7
          p Teniendo en cuenta lo que establece la resolución 627 2006 y su protocolo no define literalmente el tipo de experiencia que necesita el personal que hace este tipo de trabajo, sin embargo, es importante aclarar que los laboratorios acreditados en ese sector deben cumplir la NTC 17025 y por ende la cualificación del personal en esta norma de calidad exige que su capacitación interna está ligada a los protocolos que ellos establezcan y la norma que actualmente está en vigencia.

          p Para cualquiera de los dos personales de toma de muestra sea en olores y/o ruido es importante que toda organización defina un plan de capacitación de su personal en temas como: 
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              |  Elementos personales de protección para la toma y procesamiento de muestras
            li 
              i.fas.fa-angle-right
              |  Equipos e instrumentos de laboratorio
            li 
              i.fas.fa-angle-right
              |  Riesgos y amenazas en campo y en laboratorio
            li 
              i.fas.fa-angle-right
              |  Tipos, técnicas y métodos de muestreo
            li 
              i.fas.fa-angle-right
              |  Normatividad aplicable, entre otros.   
        .col-lg-5
          img(src='@/assets/curso/tema4/img2.jpg', alt='Texto que describa la imagen')
      p Lo anterior no solamente va a significar una mejora en su calidad y expectativas laborales, sino que se van a minimizar los errores involucrados en el proceso de toma, preservación y transporte de muestras. 
    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Los elementos de protección personal (EPP)
    p En la realización del trabajo de campo ambiental para las mediciones tanto de Ruido como de Olores Ofensivos, es importante que el personal que vaya a ejecutar las diferentes labores en la toma de muestras tenga presente los equipos de protección personal que debe emplear para así reducir los riesgos a los que está expuesto en el campo de trabajo.
    p Para ampliar la información visualice el siguiente video.
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 ¿Qué son los equipos de protección PERSONAL?.
                  p.text-small https://www.youtube.com/watch?v=G8jZvB_fl9Y
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=G8jZvB_fl9Y')" target="_blank")
                    span Ver
                    i.fas.fa-link
    p Definir que son los elementos de protección personal, es importante en este ambiente laboral, los EPP se definen como “todo equipo, aparato o dispositivo especialmente proyectado y fabricado para preservar el cuerpo humano, en todo o en parte, de riesgos específicos de accidentes del trabajo o enfermedades profesionales”. 
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-4.mb-0
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema4/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Programa de elementos de protección personal, uso y mantenimiento p.3 
                  p.text-small MINSALUD.(2017)
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf')" target="_blank")
                    span Ver
                    i.fas.fa-link
        p.text-center.ro https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf     
    p A continuación, ilustraremos los principales EPP que se emplean en la labor para la toma de muestras de Olores y Ruido.
    .col-lg-4.colora2.p-1.mt-4
      h4.text-white.mb-0 Elementos de protección personal básicos
    .tarjeta.tarjeta--azul.p-4.mb-5.mt-4
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Casco
                p “Elemento de protección personal que se utiliza en la cabeza con el propósito de evitar golpes en esta parte del cuerpo, por consecuencia de la probabilidad de caída de objetos y riesgo de contacto con líneas energizadas.”. 
                p.p-3 “El casco debe tener La suspensión compuesta por la araña, el tafilete de seis apoyos, la banda frontal anti-sudor y la corona debe proporcionar alto nivel de comodidad, para ello debe ser ajustable en altura de uso y contorno mediante sistema Ratchet, poseer cordón anti contusión, el cual siempre debe encontrarse tensionado para la amortiguación de los impactos. “
                figcaption Tomado de :MINSALUD.(2017).Programa de elementos de protección personal, uso y mantenimiento p.17 
                p.mt-2 El casco debe ser dieléctrico, para trabajos en alturas debe llevar barbiquejo para evitarla caída del casco.
                .row.p-3.colorn.align-items-center
                  .col-lg-1
                    img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
                  .col-lg-11
                    p.mb-0 ¡Para tener en cuenta! La vida útil de un casco debe ser aproximadamente de 10 años dentro del almacén y dos años de uso a partir de la fecha de entrega, por ellos debe registrarse la fecha de entrada al trabajador o puede grabarse en el casco. El diseño en general debe cumplir normas nacionales colombiana NTC1523 e internacional de Calidad Certificada ANSI Z89.1. ”.
                    p (EPP uso y mantenimiento MINSALUD P. 4)           
              .col-md-4.marn
                figure
                  img(src='@/assets/curso/tema4/img3.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Gafas en policarbonato
                p “Gafas en policarbonato, con antiempañante y protección para luz ultravioleta. Evita la proyección de partículas sólidas o líquidas a los ojos, tales como, manejo de sustancias corrosivas.”.  
                p.p-3.mb-0 <strong>MODO DE USO:</strong> “Se utiliza en la parte visual de la cara, utilizando estos lentes de seguridad en áreas de riesgos de impacto moderado, tales como rebabas y otras pequeñas partículas”.
                p.p-3 <strong>MANTENIMIENTO:</strong> “Deben ser limpiadas con un paño húmedo antes de comenzar la jornada. Limpie y revise sus lentes de seguridad con frecuencia; las micas con rayones reducen la visibilidad, pero no afectan la resistencia al impacto; cuando la visión se vea afectada, se deben reemplazar los lentes por otros lentes de seguridad nuevos.”

                figcaption MINSALUD.(2017).Programa de elementos de protección personal, uso y mantenimiento p.6 
       
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img4.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Respirador con filtros para vapores orgánicos
                p “Es utilizado para tareas donde se realicen labores en presencia de vapores orgánicos. El EPP debe estar compuesto por: Una mascarilla en silicona, ajustable, con cabezal de arnés y con correas de ajuste frontal.”. 
                p.p-3.mb-0 <strong>MODO DE USO:</strong> “Los respiradores con filtros para vapores orgánicos sólo son efectivos si son utilizados con el cartucho o filtro correcto (con frecuencia estos términos son intercambiables) para una determinada sustancia biológica o química. La protección que ofrecen los respiradores dependerá del buen ajuste de la mascarilla en la cara”

                figcaption MINSALUD.(2017).Programa de elementos de protección personal, uso y mantenimiento p.7 
                .row.p-3.colorn.align-items-center.mt-4
                  .col-lg-1
                    img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')
                  .col-lg-11
                    p.mb-0 <strong>¡Para tener en cuenta!</strong> Cuando no utilice su respirador, guárdelo en una bolsa plástica bien cerrada, de lo contrario se saturarán los filtros con los vapores de los solventes dispersos en el ambiente, lo que puede disminuir la vida útil del elemento de protección.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img5.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Botas con puntera de acero:
                p “Botas con puntera reforzada en acero que ofrecen protección a la parte anterior del pie del trabajador en caso de golpes o caídas de objetos sobre dicha zona. Esta clase de calzado es indispensable para quienes, dentro de sus labores, tengan que manipular o movilizar materiales.”. 
                p.p-3 <strong>MODO DE USO:</strong> “En el área de trabajo los pies y todo el cuerpo entero puede o no estar expuesto a riesgos de diversas causas; algunas de estas pueden ser por causas ajenas al individuo como son caídas de objetos, alto voltaje, agua y/o humedad por causas propias del individuo como son: Una mala higiene o causas desencadenadas por la utilización de un EPP en mal estado o mal recetado”.

                p.p-3 <strong>MANTENIMIENTO:</strong> “Debe realizarse una revisión periódicamente de la suela, si esta presenta en cualquiera de sus partes grabados de menos de 0.03m deben desecharse ya que su capacidad antideslizante se encuentra disminuida. Además, se debe observar si presentan rotos, agujeros, dilataciones o signos de desgaste y disminución de su capacidad protectora. En caso de deterioro no las repare; solicite unas nuevas”.

                figcaption MINSALUD.(2017).Programa de elementos de protección personal, uso y mantenimiento p.7 
       
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img6.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Protección de manos y brazos
                p Para todos los Elementos de Protección personal (EPP) del presente documento, correspondientes a las manos y brazos, se describe un modo de uso y mantenimiento general. 
                p.p-3 <strong>MODO DE USO:</strong> “En el lugar de trabajo, las manos del trabajador, y su cuerpo puede hallarse expuesto a riesgos de naturaleza diversa, los cuales pueden clasificarse en tres grupos, según su forma de actuación: Lesiones en las manos debidas a acciones externas, riesgos para las personas por acciones sobre las manos y riesgos para la salud o molestias vinculados al uso de guantes de protección”.


                p.p-3 <strong>MANTENIMIENTO:</strong>“Debe comprobar periódicamente si los guantes presentan rotos, agujeros o dilataciones. Si ello ocurre y no se pueden reparar, hay que sustituirlos dado que su acción protectora se habrá reducido. Los guantes de cuero, algodón o similares deberán conservarse limpios y secos por el lado que está en Contacto con la piel. En cualquier caso, los guantes de protección deberán limpiarse siguiendo las instrucciones de los guantes que se encuentran rotos, rasgados o impregnados con materiales químicos no deben ser utilizados”.

                figcaption MINSALUD.(2017).Programa de elementos de protección personal, uso y mantenimiento p.7 
       
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img7.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Protección auditiva
                p “Los protectores auditivos son utilizados para reducir el nivel de presión sonora que percibe una persona expuesta a un ambiente ruidoso. Es indispensable emplearlos cuando se está sometido a niveles que superen las intensidades y tiempos de exposición”. 

                figcaption MINSALUD.(2017).Programa de elementos de protección personal, uso y mantenimiento p.19
       
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/img8.svg', alt='Texto que describa la imagen')
    .col-lg-5.colora2.p-1.mt-4
      h4.text-white.mb-0 Clases de protectores y mantenimiento específico
    .tarjeta--container.row.mb-5.mt-4

      .col-md.tarjeta.colorv1.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema4/1.svg', alt='Texto que describa la imagen')
          
        h2.text-center Tapones de inserción de espuma auto expandible
        p.text-center “Son diseñados para ajustarse en el conducto aural sin ninguna fijación externa. Fabricado en espuma moldeable de poliuretano que ofrece una buena atenuación. Como problema tienen que se salen del conducto por la conversación o movimientos de la mandíbula si no quedan muy bien puestos.” 

      .col-md.tarjeta.colorv2.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema4/2.svg', alt='Texto que describa la imagen')
          
        h2.text-center Tapones de copa (orejeras)

        p.text-center “Son hechos en material ligero en general de plástico y forrados por dentro con un material absorbente del sonido. Para asegurar un confortable ajuste alrededor del oído, están cubiertos de material elástico. Este recubrimiento actúa como obturador y ayuda a amortiguar las vibraciones”. 
    .col-lg-2.colora2.p-1.mt-4
      h4.text-white.mb-0.text-center Protección corporal
    p.mt-4 “Se puede conseguir líneas de ropa en PVC y Tyvek para usar en las diferentes áreas donde los trabajadores se encuentran expuestos a riesgos que pueden disminuir su capacidad de trabajo, así como afectar su estado de salud.” 
    .row.mt-4
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Poncho Impermeable")
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema4/11.png', alt='Texto que describa la imagen')
          
            .col-md-8
              p “Capa de tela en poliéster recubierta en PVC, flexible y confortable, creando un ambiente seco previendo irritaciones cutáneas Ruedos termosellados para mayor resistencia a la ruptura y capucha integrada”.
          .row(titulo="Abrigo Impermeable")
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema4/12.png', alt='Texto que describa la imagen')
            .col-md-8
              p “Con capa de tela poliéster recubierto en PVC, flexible y confortable, creando un ambiente seco, previendo irritaciones cutáneas”. 
          .row(titulo="Overol Impermeable")
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema4/13.png', alt='Texto que describa la imagen')
            .col-md-8
              p “Capa de tela poliéster recubierta en PVC flexible y confortable, creando un ambiente seco previendo irritaciones cutáneas. Con malla tipo americano que evita excesiva sudoración” 
          .row(titulo="Overol en Tyvek")
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema4/14.png', alt='Texto que describa la imagen')
            .col-md-8
              p “Material de olefinas derivado del petróleo, en forma de hilado sin tejer. Unido mediante rodillos, por millones de diminutas fibras de polietileno. Bajo peso. Resistencia a la tensión y a la ruptura en cualquier dirección, ya sea seco o mojado. Permanece flexible a temperaturas hasta de - 100°F. Resistencia contra la penetración de partículas secas y líquidos no peligrosos”.  
          .row(titulo="Overol en drill ")
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema4/15.png', alt='Texto que describa la imagen')
            .col-md-8
              p ”Overol manga larga en dril 100 algodón (o gabardinas, según necesidad). Modelo básico con 2 bolsillos pectorales, 2 adelante en el pantalón y dos atrás, cierre de cremallera”
      .col-lg-6
        img(src='@/assets/curso/tema4/img8.png', alt='Texto que describa la imagen')
    h5.mb-0 Conclusión: 
    p Como podemos observar “los elementos de Protección personal se convierten en herramientas indispensables que complementan el trabajo en campo por seguridad de los operadores es importante qué reconozcamos la importancia de cada 1 de estos elementos y la función que cumplen a la hora de realizar el trabajo en campo evitando así riesgos asociados a los diferentes peligros a los que se están expuestos en el campo laboral.”

</template>

<script>
export default {
  name: 'Tema4',
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
.slyder-a__bullets__item--active
  background-color: #80CAB6!important
  border-color:#80CAB6!important
.slyder-a__bullets__item
  background-color: #C6E8DF
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #80CAB6
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul
  background-color: #F6F6F6
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul.acordion__activo
  background-color: #E2EACB
</style>
