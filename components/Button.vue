<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Ver vídeo'
  },
  href: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a
    class="main-button"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ text }}
  </a>
</template>

<style scoped>
.main-button {
  display: inline-block;
  background-color: black;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
}
</style>
