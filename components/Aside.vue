<script setup>

</script>

<template>
    <div class="aside">
        <div class="asideLogo">
            <video src="/img/Cesida_Logo.webm" autoplay loop muted playsinline></video>
        </div>

        <div class="asideNav">
          
        </div>
    </div>

</template>

<style scoped lang="scss">
.aside{
 position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  z-index: 1000;
    .asideLogo{
        padding: 2rem 1rem;
        video {
            height: 4rem;
        }
    }
    .asideNav{
        padding: 1rem;
        margin-top: 2rem;
        color: white;
    }

}
</style>

