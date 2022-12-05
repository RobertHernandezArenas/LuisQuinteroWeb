<template>
	<section id="galeria" class="gallery">
		<h2 class="gallery__title">GALERIA</h2>
		<!-- <picture class="background-img">
			<source
				srcset="/images/gallery-section.jpg"
				media="(min-width: 768px) and (max-width: 1679px)" />
			<source
				srcset="/images/gallery-section.jpg"
				media="(min-width: 1680px)" />
			<img src="/images/gallery-section-mobile.jpg" style="width: 100%"
		/></picture> -->
	</section>
</template>

<script setup></script>

<style scoped>
.gallery {
	height: auto;
	margin: 1rem 0;
	padding-top: 75px;
}
.background-img {
	width: 100%;
	height: auto;
	z-index: 0;
}
.gallery__title {
	margin: 1rem;
	font-size: 2.625rem;
	font-weight: 800;
	padding-left: 1rem;
	border-left: var(--mainColor) 8px solid;
}

@media only screen and (min-width: 768px) {
}
</style>
