<template>
	<div class="hero">
		<div class="hero__container-image">
			<!-- <picture>
				<source
					media="(min-width:768px)"
					srcset="/images/luis-amorebieta.png"
					type="image/webp"
				/>
				<source
					media="(min-width:300px)"
					srcset="/images/luis-amorebieta.png"
					type="image/webp"
				/>

				<source
					media="(min-width:768px)"
					srcset="/images/luis-amorebieta.png"
					type="image/png"
				/>
				<source
					media="(min-width:300px)"
					srcset="/images/luis-amorebieta.png"
					type="image/png"
				/>
				<img
					@load="fximg"
					class="hero__img"
					src="/images/luis-amorebieta.png"
					alt="Luis Quintero"
				/>
			</picture> -->
		</div>
	</div>
</template>

<script setup>
const fximg = () => {
	setTimeout(() => {
		const img = document.querySelector('.hero__img');
		img.classList.add('fx');
	}, 50);
};
</script>

<style scoped>
.hero {
	display: flex;
	justify-content: center;
	background: url('"/images/luis-amorebieta.png"'), url('/images/luis-hero.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
	height: 100vh;
	z-index: -1;
}

.hero__container-image {
	margin: 1rem 0;
	width: 220px;
}

.hero .hero__img {
	opacity: 0;
}

.hero .hero__img.fx {
	opacity: 1;
	object-fit: cover;
	transition: opacity 1s ease-in-out;
}

@media only screen and (min-width: 375px) {
	.hero {
		background-size: 330px;
	}
	.hero__container-image {
		width: 330px;
	}
}

@media only screen and (min-width: 768px) {
	.hero {
		background-size: 640px;
	}
	.hero .hero__container-image {
		width: 500px;
		height: 730px;
		object-fit: cover;
	}
	.hero .hero__container-image.fx {
		width: 500px;
		height: 730px;
	}
}

@media only screen and (min-width: 1200px) {
	.hero {
		background-attachment: fixed;
		background-size: 840px;
	}
}
</style>
