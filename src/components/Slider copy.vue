<template>
  <div class="container-slider">
    <div class="slider" id="slider">
      <div v-for="slide in slides" :key="slide.id" class="slider__section">
        <img :src="slide.image" alt="image" class="slider__img" />
        <a href="" class="slider__link">
            <h2 class="slider__title">{{slide.title}}</h2>
            <p class="slider__description">
                {{slide.description}}
            </p>
        </a>      
        </div>
    <div @click="Next" class="slider__btn slider__btn--right">&#62</div>
    <div @click="Back" class="slider__btn slider__btn--left">&#60</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slides = ref([
  { image: "./images/slider/silde10.jpg",
    title: "H2 Title",
    description: "4uirghfui4hxfui4xhf4y4tl4xjf4oifj4iofj4ilorem 1ioefujiortjihvfurhvurhvtgvhtgvhtgvhgtvthgotuhvtgrojtgriot" },
  { image: "./images/slider/silde20.jpg",
    title: "H2 Title",
    description: "4uirghfui4hxfui4xhf4y4tl4xjf4oifj4iofj4ilorem 1ioefujiortjihvfurhvurhvtgvhtgvhtgvhgtvthgotuhvtgrojtgriot" },
  { image: "./images/slider/silde30.jpg",
    title: "H2 Title",
    description: "4uirghfui4hxfui4xhf4y4tl4xjf4oifj4iofj4ilorem 1ioefujiortjihvfurhvurhvtgvhtgvhtgvhgtvthgotuhvtgrojtgriot" },
  { image: "./images/slider/silde40.jpg",
    title: "H2 Title",
    description: "4uirghfui4hxfui4xhf4y4tl4xjf4oifj4iofj4ilorem 1ioefujiortjihvfurhvurhvtgvhtgvhtgvhgtvthgotuhvtgrojtgriot" },
]);

const Next = () => {
    let items = slides.value;
    let item = items.shift();
    items.push(item);
}

const Back = () => {
    let items = slides.value;
    let item = items.pop();
    items.splice(0,0, item);
    console.log(item, items);
}

</script>

<style  scoped>
.container-slider {
    width: 90%;
    max-width: 1024px;
    min-width: 280px;
    margin: auto;
    overflow: hidden;
    position: relative;
    margin-bottom: 3rem;
}

.slider {
    display: flex;
    width: 100%;
    gap: 16px;
}

.slider__section {
    width: 100%;
    position: relative;
}

.slider__img {
    display: flex;
    width: 100%;min-width: 300px;
}

.slider__link {
    display: block;
    position: absolute;
    z-index: 9999;
    bottom:  40px;
}

.slider__title, .slider__description {
    margin-left: 1rem;
    color: white;
}

.slider__section > .slider__link > .slider__description {
    max-width: 10px;
    color: aqua;
}

.slider__btn {
    position: absolute;
    top: 45%;
    font-size: 4rem;
    color: black;
    cursor: pointer;
}

.slider__btn--right {
    display: inline;
    right: 10px;
}

.slider__btn--left {
    display: inline;
    left: 10px;
}


</style>
