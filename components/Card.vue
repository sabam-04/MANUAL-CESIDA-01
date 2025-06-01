<script setup>
import { computed } from 'vue'

const { titulo, subtitulo, descripcion, images, layout, imgLeyenda, id } = defineProps({
    titulo: String,
    subtitulo: String,
    descripcion: {
        type: [String, Array],
        default: ''
    },
    images: {
        type: Array,
        default: () => []
    },
    layout: {
        type: String,
        default: 'auto'
    },
    imgLeyenda: String, 
    id: String
})

const imageContainerClass = computed(() => {
    if (layout === 'column') return 'image-container column'
    if (layout === 'row') return 'image-container row'
    if (layout.startsWith('cols-')) return `image-container ${layout}`
    return `image-container cols-${images.length}`
})
</script>


<template>
    <div :id="id" class="cardContainer">
        <div class="cardTextos">
            <h1 class="cardTitulo">{{ titulo }}</h1>
            <h2 class="cardSubtitulo" v-if="subtitulo">{{ subtitulo }}</h2>

            <div v-if="Array.isArray(descripcion)">
                <p v-for="(parrafo, index) in descripcion" :key="index">{{ parrafo }}</p>
            </div>
            <p v-else>{{ descripcion }}</p>
        </div>

        <div :class="imageContainerClass">
            <p class="imagenLeyenda" v-if="imgLeyenda">{{ imgLeyenda }}</p>
            <img v-for="(img, index) in images" :key="index" :src="img" alt="" class="imagenElem" />
        </div>
    </div>

</template>


<style scoped lang="scss">
.cardContainer {
    border-bottom: 1px solid #000000;
    padding: 1rem 1rem 2rem;
    margin-bottom: 2rem;
    background-color: #E4E4E4;
    width: 95%;

    .cardTextos {
        width: 60%;

        .cardTitulo {
            font-size: 3rem;
            margin-bottom: 0.25rem;
            color: #000000;
        }

        .cardSubtitulo {
            font-size: 2.5rem;
            line-height: 2.6rem;
            margin-bottom: 0.5rem;
            color: #838383;
        }

        .cardDescripcion {
            font-family: "Rubik", sans-serif;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            line-height: 1.5;
        }

    }

    .image-container {
        display: grid;
        gap: 0.5rem;
        margin-top: 1rem;

        .imagenLeyenda {
            
        }

        &.cols-1 {
            grid-template-columns: 1fr;
        }

        &.cols-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        &.cols-3 {
            grid-template-columns: repeat(3, 1fr);
        }

        img {
            width: 100%;
            height: auto;
            border-radius: 4px;
            object-fit: cover;
        }
    }
}
</style>