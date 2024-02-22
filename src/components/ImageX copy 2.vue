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
			class="image"
			src="/images/banners/banner-nike1.png"
			width="300"
			height="120"
			alt="Luis Quintero"
		/>
	</picture>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
	
	{
		media: '(min-width:768px)',
		srcset: '/images/banners/banner-nike0.png',
		type: 'image/png',
	},

	{
		media: '(min-width:300px)',
		srcset: '/images/banners/banner-nike1.png',
		type: 'image/png',
	},
]);
</script>

<style scoped>
.image {
	width: 100vw;

}
</style>
