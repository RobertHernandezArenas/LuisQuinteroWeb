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
			/>
		</picture>
	</div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watchEffect } from "vue";
const fximg = () => {
	const img = document.querySelector(".hero__img");
	img.classList.add("fx");
};

watchEffect(() => {});

onBeforeMount(() => {});

onMounted(() => {});
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
	opacity: 0;
	max-width: 200px;
	max-height: 290px;
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
		max-width: 500px;
		max-height: 730px;
	}
}

@media only screen and (min-width: 1024px) {
	.hero {
		background-size: 720px;
	}

	.hero .hero__img {
		max-width: 480px;
		max-height: 700px;
	}
}
</style>
