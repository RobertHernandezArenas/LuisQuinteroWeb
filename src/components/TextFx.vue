<template>
	<div class="container">
		<span class="text first-text">Jugador de </span>
		<span class="text sec-text">{{ text }}</span>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const text = ref("");

onMounted(() => {
	//const text = document.querySelector(".sec-text");

	const textLoad = () => {
		setTimeout(() => {
			text.value = "Villarreal C.F";
		}, 0);
		setTimeout(() => {
			text.value = "Sel. Colombia Sub-20";
		}, 4000);
		setTimeout(() => {
			text.value = "Villarreal C.F";
		}, 3000);
		setTimeout(() => {
			text.value = "Sel. Colombia Sub-20";
		}, 20000);
	};

	textLoad();
	setInterval(textLoad, 8000);
});
</script>

<style scoped>
.container {
	width: 580px;
	overflow: hidden;
}
.container .text {
	position: relative;
	color: var(--secondaryColor);
	font-size: 18 px;
	font-weight: 300;
}
.container .text.first-text {
	color: #fff;
}

.text.sec-text {
	font-weight: bold;
	color: white;
}
.text.sec-text:before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: black;
	border-left: 2px solid var(--secondaryColor);
	animation: animate 4s steps(12) infinite normal;
}
@keyframes animate {
	40%,
	60% {
		left: calc(100% + 4px);
	}
	80%,
	100% {
		left: 0%;
		opacity: 1;
	}
}
</style>
