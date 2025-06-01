<template>
  <div class="menu-button">
    <button
      class="main-button"
      :class="{ active: isActive }"
      @click="toggleSubmenu"
    >
      {{ label }}
    </button>

    <div v-if="showSubmenu && hasSubmenu" class="submenu">
      <a
        v-for="(item, index) in submenu"
        :key="index"
        :href="item.href"
        class="submenu-item"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  label: String,
  to: String,
  submenu: {
    type: Array,
    default: () => []
  }
})

const route = useRoute()
const router = useRouter()

const isActive = computed(() => route.path === props.to)
const showSubmenu = ref(false)
const hasSubmenu = computed(() => props.submenu.length > 0)

const toggleSubmenu = () => {
  if (hasSubmenu.value) {
    showSubmenu.value = !showSubmenu.value
    router.push(props.to)
  } else {
    router.push(props.to)
  }
}

watch(() => route.path, () => {
  if (route.path !== props.to) {
    showSubmenu.value = false
  }
})
</script>

<style scoped>
.menu-button {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.main-button {
  background: transparent;
  border: none;
  color: #ffffffa0;
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.main-button:hover,
.main-button.active {
  color: #ffffff;
}

.submenu {
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  gap: 0.25rem;
}

.submenu-item {
  font-size: 0.85rem;
  color: #ffffffa0;
  text-decoration: none;
  transition: color 0.3s;
}

.submenu-item:hover {
  color: #ffffff;
}
</style>
