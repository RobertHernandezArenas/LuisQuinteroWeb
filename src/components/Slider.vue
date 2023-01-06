<template>
	<section id="nike" class="patreon">
		<h2 class="patreon__title">NIKE</h2>
		<img class="patreon__swipe" src="/images/SWP-SLD01.gif" alt="slide gif" />
		<swiper >
			<swiper-slide v-for="video in videos">
				<CardVideos class="mySwipe"
					:url="video.video"
					:title="video.title"
					:description="video.description"
				/>
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
import CardVideos from "@/components/CardVideos.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const videos = ref([]);

onMounted(() => {
	data.videos.map(element => videos.value.push(element));
});
</script>

<style scoped>
.patreon {
	padding-top: 1rem;
}


.patreon__swipe {
	width: 60px;
	padding-top: .5rem;
	position: absolute;
	z-index: 2;
	right: 0;
}

.patreon__title {
	color: white;
	border-left: 8px solid white;
	padding-left: 0.5rem;
	font-size: 2.625rem;
	margin: 0 1rem;
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

@media only screen and (min-width: 1200px) {
	.mySwipe {
	margin-top: 0;
}

}
</style>
