import { onMounted } from 'vue';
<template>
	<div class="progress-bar-container">
		<div class="progress-bar"></div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';
// ScrollTop devuelve la distancia de desplazamiento referente al top
let distanceToTop = () =>
	document.documentElement.scrollTop || document.body.scrollTop;

onMounted(() => {
	let progressBar = document.querySelector('.progress-bar');
	addEventListener('scroll', () => {
		let alto =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		// console.log(
		// 	`ScrollHeight:::> ${document.documentElement.scrollHeight} \n ClientHeight :::> ${document.documentElement.clientHeight}`,
		// );
		let avanceScroll = Math.ceil((distanceToTop() / alto) * 100);

		progressBar.style.width = avanceScroll + 'vw';
		progressBar.style.opacity = '1';

		// console.log(
		// 	`VALOR PARA ASIGNAR A WIDTH::::> ${(progressBar.style.width =
		// 		avanceScroll.toString().concat("vw"))}`,
		// );
	});
});
</script>

<style scoped>
.progress-bar-container {
	width: 100%;
	position: fixed;
	top: 72px;
	height: 4px;
	z-index: 10;
}

.progress-bar {
	opacity: 0;
	height: 100%;
	width: 0;
	background: var(--neutral-0);
	transition: width 0.15s ease;
}

@media only screen and (min-width: 1024px) {
	#go-up {
		width: 65px;
		height: 65px;
	}
	.button-up {
		font-size: 4rem;
	}
}
</style>
