<template>
	<div id="nike" class="patreon">
		<h2 class="mySwiper__title">NIKE</h2>
		<swiper id="" class="mySwiper">
			<swiper-slide class="mySwiper__slide" v-for="video in nikeVideos">
				<video
					class="mySwiper__video"
					:src="video.video"
					playsinline
					autoplay
					loop
					muted
				></video>
				<h3 class="mySwiper__subtitle">Capitulo 01</h3>
				<!-- Background -->
				<video
					class="nike__bgvideo"
					:src="video.bg"
					playsinline
					autoplay
					loop
					muted
				></video>
				<!-- End Background -->
			</swiper-slide>
		</swiper>
	</div>
</template>
<script setup>
import { onMounted, ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

const nikeVideos = ref([
	{
		title: "",
		video: "https://roberthernandezarenas.github.io/videos/VIDEO-01.MP4",
		bg: "https://roberthernandezarenas.github.io/videos/VIDEO-01.MP4", //"/videos/shot-1.mp4",
		subtitle: "",
		description: "",
		url: "https://www.instagram.com/reel/ChIa_IKqFej/?igshid=YmMyMTA2M2Y=",
	},
	{
		title: "",
		video: "https://roberthernandezarenas.github.io/videos/VIDEO-02.mp4",
		bg: "https://roberthernandezarenas.github.io/videos/VIDEO-02.mp4", //"/videos/shot-2.mp4",
		subtitle: "",
		description: "",
		url: "https://www.instagram.com/reel/ChIa_IKqFej/?igshid=YmMyMTA2M2Y=",
	},
	{
		title: "",
		video: "https://roberthernandezarenas.github.io/videos/VIDEO-03.mp4",
		bg: "https://roberthernandezarenas.github.io/videos/VIDEO-03.mp4", //"/videos/shot-3.mp4",
		subtitle: "",
		description: "",
		url: "https://www.instagram.com/reel/ChIa_IKqFej/?igshid=YmMyMTA2M2Y=",
	},
]);
</script>

<style scoped>
.patreon {
	padding-top: 75px;
}
/*.swiper {
	cursor: url("/images/handmouse.png"), auto;
	width: 100vw;
	margin-bottom: 106px;
	height: 100vh;
	position: relative;
}*/
.mySwiper {
	position: relative;
	width: 100vw;
	height: 100vh;
}

.mySwiper__slide {
	text-align: center;
	font-size: 18px;
	background: #000000;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}

.mySwiper__title {
	position: absolute;
	padding-left: 1rem;
	color: white;
	z-index: 2;
	margin: 3rem 1rem 1rem 1rem;
	font-size: 2.625rem;
	font-weight: 800;
	height: fit-content;
	border-left: white 8px solid;
}
.mySwiper__subtitle {
	position: absolute;
	top: 75%;
	color: white;
	z-index: 2;
	font-size: 2rem;
	font-weight: 600;
	height: fit-content;
}

.mySwiper__video {
	position: absolute;
	width: 280px;
}

.nike__bgvideo {
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
