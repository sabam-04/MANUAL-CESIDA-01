<template>
  <div class="layout">
    <Aside />
    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">

.layout {
  display: flex;
}

.main-content {
  margin-left: 15rem; // Igual al width del aside
  padding: 2rem;
  background: #E4E4E4;
  min-height: 100vh;
  flex: 1;
  overflow-x: hidden;
}

</style>
