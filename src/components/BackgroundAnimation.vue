<template>
	<section class="background-animation">
		<div class="bg-fx"></div>
	</section>
</template>

<script setup>
</script>

<style scoped>
.background-animation {
	position: relative;
	display: flex;
	align-items: center;
	overflow: hidden;
	height: auto;
	z-index: 2;
}

.background-animation .bg-fx {
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
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-direction: alternate-reverse;
}

@media only screen and (min-width: 1024px) {
	.background-animation {
		height: calc(100vh - 100px);
	}
}
</style>
