<script setup>
import { computed } from 'vue'
// import Button from '~/components/Button.vue'

const {
    titulo,
    subtitulo,
    descripcion,
    media,
    layout,
    botonTexto
} = defineProps({
    titulo: String,
    subtitulo: String,
    descripcion: {
        type: [String, Array],
        default: ''
    },
    media: {
        type: Array,
        default: () => []
    },
    layout: {
        type: String,
        default: 'auto'
    },
    botonTexto: String
})

const imageContainerClass = computed(() => {
    if (layout === 'column') return 'image-container column'
    if (layout === 'row') return 'image-container row'
    if (layout.startsWith('cols-')) return `image-container ${layout}`
    return `image-container cols-${media.length}`
})
</script>

<template>
    <div class="cardContainer">
        <div class="cardTextos">
            <h1 class="cardTitulo">{{ titulo }}</h1>
            <h2 class="cardSubtitulo" v-if="subtitulo">{{ subtitulo }}</h2>

            <div v-if="Array.isArray(descripcion)">
                <p v-for="(parrafo, index) in descripcion" :key="index">{{ parrafo }}</p>
            </div>
            <p v-else>{{ descripcion }}</p>
        </div>

        <div :class="imageContainerClass">
            <div v-for="(item, index) in media" :key="index" class="media-item" :class="item.layout || 'column'">
                <p v-if="item.caption" class="media-caption">{{ item.caption }}</p>

                <img v-if="item.type === 'image'" :src="item.src" alt="" class="media-element" />

                <video v-else-if="item.type === 'video'" controls class="media-element">
                    <source :src="item.src" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
            </div>
        </div>

        <div v-if="botonTexto" class="cardButton">
            <Button :text="botonTexto" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.cardContainer {
    border-bottom: 1px solid #000;
    padding: 1rem;
    margin-bottom: 2rem;
    background-color: #E4E4E4;
    width: 95%;

    .cardTextos {
        width: 60%;

        .cardTitulo {
            font-size: 3rem;
            margin-bottom: 0.25rem;
            color: #000;
        }

        .cardSubtitulo {
            font-size: 2.5rem;
            line-height: 2.6rem;
            margin-bottom: 0.5rem;
            color: #838383;
        }
    }

    .image-container {
        display: grid;
        gap: 1rem;
        margin-top: 1rem;

        &.cols-1 {
            grid-template-columns: 1fr;
        }

        &.cols-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        &.cols-3 {
            grid-template-columns: repeat(3, 1fr);
        }

       .media-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  &.row {
    flex-direction: row;

    .media-caption {
      flex: 1 1 0;
      max-width: 20%;
    }

    .media-element {
      flex: 2 1 0;
      max-width: 80%;
    }
  }

  &.column {
    flex-direction: column;

    .media-caption,
    .media-element {
      width: 100%;
    }
  }

  .media-caption {
    font-size: 0.9rem;
    color: #555;
  }

  .media-element {
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
  }
}


    }

    .cardButton {
        margin-top: 1rem;
    }
}
</style>
