<template>
 <div class="layout">
    
      <Card
        v-for="(card, i) in cards"
        :key="i"
        v-bind="card"
      />
  </div>
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
    images: ['https://via.placeholder.com/300'],
    layout: 'column'
  }
]

</script>


<style scoped lang="scss">


</style>
