<template>
	<main id="inicio" class="main">
		<AccordionGallery />
	</main>
</template>

<script setup>
import AccordionGallery from "../components/AccordionGallery.vue";
</script>

<style scoped>
.main {
	display: flex;
	overflow: scroll hidden;
	-ms-scroll-snap-type: x mandatory;
	-webkit-scroll-snap-type: x mandatory;
	scroll-snap-type: x mandatory;
	max-height: fit-content;
}

@media only screen and (min-width: 1024px) {
	.main {
		overflow: hidden;
		-ms-scroll-snap-type: unset unset;
		-webkit-scroll-snap-type: unset unset;
		scroll-snap-type: unset unset;
		max-height: unset;
		height: 100vh;
		width: 90vw;
		gap: 0;
		align-self: center;
		max-width: 1920px;
	}
}
</style>
