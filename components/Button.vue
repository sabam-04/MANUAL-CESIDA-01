<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Ver más'
  }
})
</script>

<template>
  <button class="main-button">
    {{ text }}
  </button>
</template>

<style scoped>
.main-button {
  background-color: black;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
}
</style>