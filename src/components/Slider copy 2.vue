<template>
	<section id="nike" class="patreon">
		<h2 class="patreon__title">NIKE</h2>
		<swiper>
			<swiper-slide v-for="video in videos">
				<!-- Background -->
				<video
					class="bgvideo"
					:src="video.bg"
					playsinline
					autoplay
					loop
					muted
				></video>
				<!-- End Background -->
			</swiper-slide>
		</swiper>
	</section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import data from "@/assets/data/patreon.json";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

const videos = ref([]);

onMounted(() => {
	data.videos.map(element => videos.value.push(element));
});
</script>

<style scoped>
@import "swiper/css";
.patreon {
	padding-top: 75px;
}
.bgvideo {
	filter: grayscale();
	opacity: 0.15;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -10;
}

@media only screen and (min-width: 1024px) {
}
</style>
