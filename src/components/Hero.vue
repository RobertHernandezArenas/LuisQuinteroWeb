<template>
	<div class="hero">
		<picture>
			<source
				media="(min-width:768px)"
				srcset="/images/hero/luisito-villarreal-500.webp"
				type="image/webp"
			/>
			<source
				media="(min-width:300px)"
				srcset="/images/hero/luisito-villarreal-300.webp"
				type="image/webp"
			/>

			<source
				media="(min-width:768px)"
				srcset="/images/hero/luisito-villarreal-500.png"
				type="image/png"
			/>
			<source
				media="(min-width:300px)"
				srcset="/images/hero/luisito-villarreal-300.png"
				type="image/png"
			/>
			<img
				@load="fximg"
				class="hero__img"
				src="/images/hero/luisito-villarreal-300.webp"
				width="500"
				height="730"
				alt="Luis Quintero"
			/>
		</picture>
	</div>
</template>

<script setup>
const fximg = () => {
	const img = document.querySelector(".hero__img");
	img.classList.add("fx");
};
</script>

<style scoped>
.hero {
	display: flex;
	justify-content: center;
	align-items: center;
	background: url("/images/hero/quintero.webp");
	background-size: 280px;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
}

.hero .hero__img {
	opacity: 0;
	aspect-ratio: 4/3;
	object-fit: contain;
}

.hero .hero__img.fx {
	opacity: 1;
	width: 230px;
	height: 337px;
	transition: opacity 1s ease-in-out;
}

@media only screen and (min-width: 768px) {
	.hero {
		background-size: 640px;
	}
	.hero .hero__img {
		width: 500px;
		height: 730px;
		object-fit: cover;
	}
	.hero .hero__img.fx {
		width: 500px;
		height: 730px;
	}
}

@media only screen and (min-width: 1024px) {
	.hero {
		background-size: 840px;
	}
}

@media only screen and (min-width: 1440px) {
	.hero {
		background-size: 840px;
	}
}
</style>
