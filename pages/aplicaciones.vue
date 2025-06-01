<script setup>
import Card from '~/components/Card.vue'
import cards from '~/data/aplicaciones.json'
</script>

<template>
 <div>
    <Card v-for="(card, i) in cards" :key="i" v-bind="card" />
  </div>
</template>

<style scoped lang="scss">

</style>

