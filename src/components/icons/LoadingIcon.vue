<template>
	<div v-if="isShow" id="loadingIcon" class="loading-icon">
		<img class="img" src="/images/intro.gif" alt="">
	</div>
</template>

<script setup>
import { onMounted, ref, toRefs } from "vue";
let props = defineProps(["stroke", "width", "height", "isShow"]);
</script>

<style scoped>

.loading-icon img {
	max-width: 720px;
}

.loading-icon {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 20;

	background: #000000;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	opacity: 1;
	transform: translateY(0%);
}

.loading-icon.hidden {
	opacity: 0;
	transform: translateY(110%);
	transition: all 0.425s ease-out;
}
@media only screen and (min-width: 768px) 
{
	.loading-icon {
	max-height: 100%;
}}
</style>
