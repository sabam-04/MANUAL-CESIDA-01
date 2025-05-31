<script setup>
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { 
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap' 
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap'
    }
  ]
})
</script>

<template>
  <NuxtLayout />
</template>

<style lang="scss">
@use '~/assets/sass/main.scss';
</style>


<!-- //INSTRUCCIONES PARA METER DATA E IMPORTARLOS EN LAS PAGINAS:
1. Escribir los datos en el json correspondiente para la pagina con la estructura adecuada:
      Por ejemplo:
      [
    {
    "titulo": "Historia",
    "subtitulo": "",
    "descripcion": [
      "CESIDA es la Coordinadora Estatal de VIH y Sida, la entidad más representativa del movimiento ciudadano relacionado con el VIH y el sida en España. Desde su fundación en 2002, CESIDA ha trabajado por la defensa de los derechos, la visibilidad y la dignidad de las personas con VIH, con presencia en 17 comunidades autónomas y una red de más de 120 organizaciones asociadas.",
      "Su historia comienza el 13 de junio de 2002, con la constitución oficial de la entidad tras un proceso impulsado por 25 organizaciones. Ese mismo año, en noviembre, celebró su primer Congreso Estatal en Córdoba, marcando un hito en la consolidación de su estructura y objetivos.",
    "Actualmente, CESIDA es un referente para asociaciones, entidades públicas y privadas, y agentes sociales que abordan la realidad del VIH en España, siendo también un punto clave de información, coordinación y apoyo para personas con VIH y sus entornos.",
    "Este rediseño de identidad visual es un proyecto educativo de diseño gráfico desarrollado por Sandra Barrios, Carlos Peña y Sambhavi Bhagi en el marco de la Escuela Superior de Diseño de Madrid (ESDM), en colaboración con CESIDA.",
    "El objetivo del rebranding es refrescar la imagen visual de CESIDA sin perder su esencia: visibilizar sin estigmatizar, comunicar desde la cercanía y reforzar su papel como red de apoyo, defensa e información. La nueva identidad apuesta por un sistema modular, accesible y dinámico, que refleja la diversidad, inclusión y fuerza colectiva que define a la organización."
    ],
    "images": [""],
    "layout": "cols-2",
    "imgLeyenda": ""
     }
    ]

    Datos importantes:
    - si la propiedad no tiene contenido, por ejemplo no lleva imagen, o no tiene subtitulo, debes aún así poner las comillas, sin nada dentro.
    - siempre hay una coma despues del string, excepto en el ultimo elemento del array.
    - En la descripcion podemos separar los párrafos haciendo un array con varios strings así: ["","",""]
    - En la propiedad de layout tenemos 3 opciones: 
          "cols-1" - aqui las imagenes ocuparán a una sola columna
          "cols-2" - aqui las imagenes ocuparán a 2 columnas
          "cols-3" - aqui las imagenes ocuparán a 3 columnas

2. Al tener los datos, vas a la página donde deseas importar esos datos y escribes:
<script setup>
import Card from '~/components/Card.vue'
import cards from '~/data/intro.json'
</script>

<template>
   <div>
    <Card v-for="(card, i) in cards" :key="i" v-bind="card" />
  </div>
</template>

<style scoped lang="scss">
</style>

Solamente tienes que cambiar la ruta del json: 
import cards from '~/data/logo.json'
import cards from '~/data/color.json'

3. Ya está con esto debe cargarte la card con la info que le has metido. Para verla debes escribir la ruta en el local host.
Por ejemplo: 
http://localhost:3000/color
http://localhost:3000/logo
http://localhost:3000/tipografia

  -->


