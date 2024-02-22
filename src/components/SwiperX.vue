<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
	$('.slider').super({
		arrows: false,
		infiniteScroll: true,
		touchSensitivity: 'high',
		indicator: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	});
});

const props = defineProps({
	items: {
		type: Array,
		required: true,
		default: [
			{ url: '/images/quintero.jpeg' },
			{ url: '/images/demo.jpg' },
			{ url: '/images/demo.jpg' },
		],
	},
});
</script>

<template>
	<div class="slider">
		<article class="slider__slides">
			<div class="slider__slides-wrapper"><img src="/images/demo.jpg" alt="" class="slider__slides-image"></div>
			<div class="slider__slides-wrapper">
				<h2 class="slider__slides-title">S.D Amorebieta 1 - 1 Levante U.D</h2>
				<p class="slider__slides-text">
					HIGHLIGHTS
				</p>
			</div>
		</article>
		<article class="slider__slides">
			<div class="slider__slides-wrapper"><img src="/images/demo6.jpeg" alt="" class="slider__slides-image"></div>
			<div class="slider__slides-wrapper">
				<h2 class="slider__slides-title">Title Lorem Ipsum</h2>
				<p class="slider__slides-text">
					highlights
				</p>
			</div>
		</article>
		<article class="slider__slides">
			<div class="slider__slides-wrapper"><img src="/images/demo5.jpeg" alt="" class="slider__slides-image"></div>
			<div class="slider__slides-wrapper">
				<h2 class="slider__slides-title">Title Lorem Ipsum</h2>
				<p class="slider__slides-text">
					HIGHLIGHTS
				</p>
			</div>
		</article>
		<article class="slider__slides">
			<div class="slider__slides-wrapper"><img src="/images/demo4.jpeg" alt="" class="slider__slides-image"></div>
			<div class="slider__slides-wrapper">
				<h2 class="slider__slides-title">Title Lorem Ipsum</h2>
				<p class="slider__slides-text">
					HIGHLIGHTS
				</p>
			</div>
		</article>
		<article class="slider__slides">
			<div class="slider__slides-wrapper"><img src="/images/demo1.jpg" alt="" class="slider__slides-image"></div>
			<div class="slider__slides-wrapper">
				<h2 class="slider__slides-title">Title Lorem Ipsum</h2>
				<p class="slider__slides-text">
					HIGHLIGHTS
				</p>
			</div>
		</article>
		<article class="slider__slides">
			<div class="slider__slides-wrapper"><img src="/images/demo2.jpg" alt="" class="slider__slides-image"></div>
			<div class="slider__slides-wrapper">
				<h2 class="slider__slides-title">Title Lorem Ipsum</h2>
				<p class="slider__slides-text">
					HIGHLIGHTS
				</p>
			</div>
		</article>
		<article class="slider__slides">
			<div class="slider__slides-wrapper"><img src="/images/demo3.jpg" alt="" class="slider__slides-image"></div>
			<div class="slider__slides-wrapper">
				<h2 class="slider__slides-title">Title Lorem Ipsum</h2>
				<p class="slider__slides-text">
					HIGHLIGHTS
				</p>
			</div>
		</article>
		
	</div>
</template>
<style scoped>
.slider.super-slider {
	position: relative;
}

.slider {
	width: 80%;
}

.slider__slides {
	display: flex;
	justify-content: center;
	background: white;
	background-position: center;
	background-size: cover;
	width: 100vw;
	height: 120px;
	max-height: 420px;
}

.slider__slides-title {
	font-family: "Oswald";
	font-weight: 400;
	font-size: 1.2rem;
	margin-bottom: .24rem;
	color: black;
}
.slider__slides-wrapper:first-child {
	margin: 0;
	padding: 0;
}

.slider__slides-wrapper:first-child .slider__slides-image {
	object-fit: cover;
	height: 100%;
	aspect-ratio: 9/16;
}
.slider__slides-wrapper {
	padding: 1rem .75rem;
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100%;
}

.slider__slides-text {
	font-family: "Poppins";
	font-size: 0.75rem;
	font-weight: 200;
	letter-spacing: .1rem;
	color: black;
	width: min-content;
}
</style>
