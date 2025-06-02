<template>
  <div class="layout">
    <div v-for="(card, i) in cards" :key="i">
      <Card v-bind="card" />
      <Button v-if="card.showButton">{{ card.buttonText }}</Button>
    </div>
  </div>

  <Button
  text="Ver vídeo"
  href="https://drive.google.com/file/d/1qRu2ChDVYjlOLSrZAM0zX03AQOqOtFaZ/view?usp=sharing"/>

</template>

<script setup>
import Card from '~/components/Card.vue'




const cards = [
  {
    titulo: 'Introducción',
    subtitulo: 'Identidad visual de Cesida',
    descripcion: [
      '¡Bienvenidx!',
      'Este es el manual de marca del rediseño de CESIDA, desarrollado por Sandra Barrios, Carlos Peña y Sambhavi Bhagi como proyecto estudiantil en la Escuela Superior de Diseño de Madrid.',
      'Aquí encontrarás las claves visuales y conceptuales que definen esta nueva identidad: una propuesta que busca acompañar, visibilizar y romper estigmas desde el diseño.',
      'Este manual no es un conjunto de normas rígidas, sino una guía abierta e inspiradora para comunicar con coherencia, creatividad y empatía todo lo que CESIDA representa.',
      '“Un diseño que no estigmatiza. Una marca que visibiliza.”'
    ],
      layout: 'cols-1',

    media: [
    {
      type: 'image',
      src: 'img/Thumbnail.png',
      caption: 'Video promocional de la marca.',
      layout: 'column'
    }
  ],
  showButton: false,
  buttonText: 'Ver vídeo',
  }
]

</script>


<style scoped lang="scss">


</style>
