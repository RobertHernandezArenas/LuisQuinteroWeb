<template>
  <div class="image-gallery">
    <div class="gallery-controls" v-if="showArrows">
      <button @click="prevSlide" :disabled="currentIndex === 0">
        &larr;
      </button>
      <button @click="nextSlide" :disabled="currentIndex === images.length - 1">
        &rarr;
      </button>
    </div>
    <div class="gallery-items" ref="gallery">
      <div v-for="(image, index) in images" :key="index" class="gallery-item" :class="{ active: index === currentIndex }">
        <img :src="image.image" alt="" class="gallery-image" />
        <div class="gallery-caption" v-if="image.caption">{{ image.description }}</div>
      </div>
    </div>
    <div class="bullets" v-if="showBullets">
      <span v-for="(image, index) in images" :key="index" @click="goToSlide(index)" :class="{ active: index === currentIndex }"></span>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: "ImageGallery",
  props: {
    images: {
      type: Array,
      required: true
    },
    showArrows: {
      type: Boolean,
      default: true
    },
    showBullets: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const images = ref(props.images)
    const currentIndex = ref(0)
    const prevSlide = () => {
      if (currentIndex.value !== 0) {
        currentIndex.value--
      }
    }
    const nextSlide = () => {
      if (currentIndex.value !== images.value.length - 1) {
        currentIndex.value++
      }
    }
    const goToSlide = (index) => {
      currentIndex.value = index
    }
    return { images, currentIndex, prevSlide, nextSlide, goToSlide }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      const gallery = this.$refs.gallery
      const items = Array.from(gallery.children)
      const viewportWidth = window.innerWidth
      items.forEach(item => {
        item.style.flexBasis = `${100 / items.length}%`
        if (viewportWidth < 768) {
          item.style.flexBasis = '100%'
        }
      })
    }
  }
}
</script>
