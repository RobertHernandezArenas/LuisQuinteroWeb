<template>
	<section id="biografia" class="biography">
		<BiographySecton />
		<div class="biography__background"></div>
	</section>
</template>

<script setup>
import BiographySecton from "./BiographySection.vue";
</script>

<style scoped>
/*--- ANIMATION FX ---*/
/* @import "../../public/styles/animations/glitch.css"; */
@import "../../public/styles/animations/movement-bg.css";

p {
	font-size: 1rem;
	line-height: 1.6rem;
}
.biography {
	position: relative;
	display: flex;
	align-items: center;
	overflow: hidden;
	height: auto;
	z-index: 2;
	padding: 4rem 0;
}

/* .biography__image {
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
	width: 280px;
	height: 300px;
	margin: 0 auto;
	z-index: 1;

	animation: glitchFx 8s infinite steps(1) alternate-reverse;
} */
.biography .biography__background {
	/**/
	background: url("/images/stadiums/STDM07.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	z-index: 0;
	overflow: hidden;

	animation-name: MOVE-BG;
	animation-duration: 12s;
	animation-iteration-count: infinite;
	animation-direction: alternate-reverse;
	-webkit-animation-name: MOVE-BG;
	-webkit-animation-duration: 12s;
	/* -webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.35, 0.15); */
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-direction: alternate-reverse;
	/* -webkit-animation-direction: normal; */
}

@media only screen and (min-width: 1024px) {
	.biography {
		height: 100vh;
	}
}
</style>
