<template>
	<picture>
		<source
			v-for="image in images"
			:key="image.id"
			:media="image.media"
			:srcset="image.srcset"
			:type="image.type"
		/>

		<img
			@load="fximg"
			class="hero__img"
			src="/images/banners/banner-nike0.jpg"
			width="500"
			height="730"
			alt="Luis Quintero"
		/>
	</picture>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
	{
		media: '(min-width:768px)',
		srcset: '/images/hero/luisito-villarreal-500.webp',
		type: 'image/webp',
	},

	{
		media: '(min-width:300px)',
		srcset: '/images/hero/luisito-villarreal-300.webp',
		type: 'image/webp',
	},
	{
		media: '(min-width:768px)',
		srcset: '/images/hero/luisito-villarreal-500.png',
		type: 'image/png',
	},

	{
		media: '(min-width:300px)',
		srcset: '/images/hero/luisito-villarreal-300.png',
		type: 'image/png',
	},
]);
</script>

<style lang="scss" scoped></style>
