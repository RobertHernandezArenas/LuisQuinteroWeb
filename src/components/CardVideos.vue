<template>
	<article class="cardvideos">
		<video class="cardvideos__video" preload playsinline autoplay loop muted>
			<source :src="url" type="video/mp4" />
		</video>
		<div class="cardvideos__body">
			<h2 class="cardvideos__title">{{ title }}</h2>
			<p class="cardvideos__description">{{ description }}</p>
		</div>
	</article>
</template>

<script setup>
import { onMounted, ref } from "vue";
// import { gsap } from "gsap";

defineProps(["url", "title", "description"]);

onMounted(() => {
	/*gsap.fromTo(
		".nike",
		{
			y: 50,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 5,
		},
	);*/
});
</script>

<style scoped>

.cardvideos {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 2rem 1rem;
	height: 100vh;
}

.cardvideos__video {
	min-width: 280px;
	max-width: 720px;
}

.cardvideos__body {
	display: flex;
	flex-direction: column;
}

.cardvideos__title {
	margin: 1rem auto;
}

.cardvideos__description {
	font-size: 14px;
	line-height: 22px;
	max-width: 720px;
}

@media only screen and (min-width: 1200px) {
	.cardvideos {
		gap: 4rem;
		align-items: center;
		justify-content: space-evenly;
	}

	.cardvideos__body {
		padding: 2rem 0rem;
	}

	.cardvideos__title {
		font-size: 2.5rem;
	}

	.cardvideos__description {
		font-size: 1rem;
		line-height: 26px;
		max-width: 720px;
	}
}
</style>
