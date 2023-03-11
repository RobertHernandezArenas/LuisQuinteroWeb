import { onMounted } from 'vue';
<template>
	<div class="hero">
		<picture>
			<source
				media="(min-width:1024px)"
				srcset="/images/hero/luisito-villarreal-480.webp"
				type="image/webp"
			/>
			<source
				media="(min-width:768px)"
				srcset="/images/hero/luisito-villarreal-500.webp"
				type="image/webp"
			/>
			<source
				media="(min-width:300px)"
				srcset="/images/hero/luisito-villarreal-200.webp"
				type="image/webp"
			/>

			<source
				media="(min-width:1024px)"
				srcset="/images/hero/luisito-villarreal-480.png"
				type="image/png"
			/>
			<source
				media="(min-width:768px)"
				srcset="/images/hero/luisito-villarreal-500.png"
				type="image/png"
			/>
			<source
				media="(min-width:300px)"
				srcset="/images/hero/luisito-villarreal-200.png"
				type="image/png"
			/>
			<img
				@load="fximg"
				class="hero__img"
				src="/images/hero/luisito-villarreal-500.webp"
				width="500"
				height="730"
				loading="lazy"
				decoding="async"
				alt="Luis Quintero"
				v-if="getScreenWidth() === 768"
			/>
			<img
				@load="fximg"
				class="hero__img"
				src="/images/hero/luisito-villarreal-480.webp"
				width="480"
				height="700"
				loading="lazy"
				decoding="async"
				alt="Luis Quintero"
				v-else-if="getScreenWidth() === 1024"
			/>
			<img
				@load="fximg"
				class="hero__img"
				src="/images/hero/luisito-villarreal-200.webp"
				width="200"
				height="290"
				loading="lazy"
				decoding="async"
				alt="Luis Quintero"
				v-else
			/>
		</picture>
	</div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watchEffect } from "vue";
const fximg = () => {
	setTimeout(() => {
		const img = document.querySelector(".hero__img");
		img.classList.add("fx");
	}, 250);
};

const screenWidth = ref(() => {
	return window.screen.width;
});
watchEffect(() => {
	screenWidth.value()
});
const getScreenWidth = () => {
	if (screenWidth.value >= 768 && screenWidth <= 1023) {
		return 768;
	}
	if (screenWidth.value >= 1024) {
		return 1024;
	}
};

onBeforeMount(() => {
	console.log(getScreenWidth());
});

onMounted(() => {
	console.log(document.querySelector(".hero__img").width);
	console.log(document.querySelector(".hero__img").height);
});
</script>

<style scoped>
.hero {
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url("/images/hero/quintero.webp");
	background-size: 280px;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
}

.hero .hero__img {
	width: 220px;
	opacity: 0;
}

.hero .hero__img.fx {
	z-index: 1;
	opacity: 1;
	transition: opacity 0.5s ease-in-out;
}

@media only screen and (min-width: 768px) {
	.hero {
		background-size: 580px;
	}
	.hero .hero__img {
		width: 500px;
	}
}

@media only screen and (min-width: 1024px) {
	.hero {
		background-size: 720px;
	}

	.hero .hero__img {
		width: 480px;
	}
}
</style>
