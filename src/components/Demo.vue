<template>
	<div>
		<div v-for="image in images" :key="images.id">
			<img :src="image.src" :alt="image.alt" />
			<p>{{ image.description }}</p>
		</div>
	</div>
</template>

<script setup>
const images = [
	{
		src: "/images/accordion/luis-quintero-villarreal-01.jpg",
		alt: "image 1",
		description: "This is image 1",
	},
	{
		src: "/images/accordion/luis-quintero-villarreal-02.jpg",
		alt: "image 2",
		description: "This is image 2",
	},
	{
		src: "/images/accordion/luis-quintero-villarreal-03.jpg",
		alt: "image 3",
		description: "This is image 3",
	},
];
</script>
