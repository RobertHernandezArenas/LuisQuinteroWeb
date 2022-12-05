<template>
	<div class="nike">
		<video class="nike__video" preload playsinline autoplay loop muted>
			<source :src="nike.video" type="video/mp4" />
		</video>
		<div class="nike__story-box">
			<h2 class="nike__title">{{ nike.title }}</h2>
			<p class="nike__content">
				{{ nike.content }}
			</p>
			<Button :text="nike.title" />
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import Button from "@/components/Button.vue";


const nike = ref({
	title: "JUST DO IT",
	content:
		"Nike inspira a atletas de todo el mundo ofreciéndoles productos, experiencias y servicios innovadores",
	video: "./videos/nike-shot.mp4",
});

onMounted(() => {
	gsap.fromTo(
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
	);
});
</script>

<style scoped>
.nike {
	display: flex;
	flex-wrap: wrap;
	max-width: 1920px;
	
}


.nike__video {
	margin: 0 auto;
	width: 90%;
}

.nike__story-box {
	margin: 0 auto;
	padding: 2rem 0;
	width: 90%;
}

.nike__title {
	font-size: 24px;
	line-height: 32px;
	text-align: center;
	font-weight: 500;
	font-family: "Futura";
}

.nike__content {
	padding: 16px 0;
	max-width: 100%;
	font-size: 14px;
	line-height: 19px;
	font-family: "Helvetica";
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 1024px) {
	.nike {
		display: flex;
		justify-content: space-between;
		padding: 2rem 0;
		width: 90vw;
		margin: 0 auto;
	}


	.nike__video {
		max-width: 612px;
	}

	.nike__story-box {
		margin: auto;
		max-width: 612px;
	}
}

@media only screen and (min-width: 1200px) {
	.nike__video {
		max-width: 750px;
	}
}

@media only screen and (min-width: 1344px) {
	.nike__video {
		max-width: 900px;
	}

	.nike__story-box {
		padding: 0;
	}
}
</style>
