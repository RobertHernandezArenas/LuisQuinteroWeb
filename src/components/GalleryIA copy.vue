<template>
  <div class="gallery">
    <div class="gallery-controls">
      <button @click="prevSlide" :disabled="currentIndex === 0">
        &larr;
      </button>
      <button @click="nextSlide" :disabled="currentIndex === items.length - 1">
        &rarr;
      </button>
    </div>
    <div v-for="(item, index) in items" :key="index" class="gallery-item" :class="{ active: index === currentIndex }">
      <img v-if="item.type === 'image'" :src="item.image" alt="" class="gallery-image" />
      <!-- <video v-else class="gallery-video" :src="item.src" :alt="item.alt"></video> -->
      <div class="gallery-caption">{{ item.description }}</div>
    </div>
    <div class="bullets" v-if="showBullets">
      <span v-for="(item, index) in items" :key="index" @click="goToSlide(index)" :class="{ active: index === currentIndex }"></span>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: "Gallery",
  props: {
    items: {
      type: Array,
      required: true
    },
    showBullets: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const items = ref(props.items)
    const currentIndex = ref(0)
    const prevSlide = () => {
      if (currentIndex.value !== 0) {
        currentIndex.value--;
      }
    };
    const nextSlide = () => {
      if (currentIndex.value !== items.value.length - 1) {
        currentIndex.value++;
      }
    };
    const goToSlide = (index) => {
      currentIndex.value = index
    }
    return { items, currentIndex, prevSlide, nextSlide, goToSlide }
  }
};
</script>

<style>
.gallery {
   display: flex;
   flex-wrap: wrap;
  position: relative;
}

.gallery-controls {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.gallery-controls button {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.gallery-controls button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.gallery-item {
    display: flex;
  flex-direction: row;

  flex: 1 0 calc(33.333% - 20px);
  margin: 10px;
  position: relative;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
}

.gallery-item.active {
  opacity: 1;
  z-index: 1;
}

.gallery-image,
.gallery-video {
  width: 100%;
  height: auto;
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  text-align: center;
}

.bullets {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.bullets span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
  cursor: pointer;
}

.bullets span.active {
  background-color: #000;
}

/* Responsive styles */
@media (max-width: 768px) {
  .gallery-item {
    flex: 1 0 calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .gallery-item {
    flex: 1 0 100%;
  }
}
</style>



