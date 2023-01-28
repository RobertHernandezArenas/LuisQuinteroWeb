<template>
	<div v-if="isShow" id="loadingIcon" class="loading-icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			style="
				margin: auto;
				background: none;
				display: block;
				shape-rendering: auto;
				animation-play-state: running;
				animation-delay: 0s;
			"
			:width="width"
			:height="height"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<path
				fill="none"
				:stroke="stroke"
				stroke-width="8"
				stroke-dasharray="42.76482137044271 42.76482137044271"
				d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
				stroke-linecap="round"
				style="
					transform: scale(0.8);
					transform-origin: 50px 50px;
					animation-play-state: running;
					animation-delay: 0s;
				"
			>
				<animate
					attributeName="stroke-dashoffset"
					repeatCount="indefinite"
					dur="3.3333333333333335s"
					keyTimes="0;1"
					values="0;256.58892822265625"
					style="animation-play-state: running; animation-delay: 0s"
				/>
			</path>
		</svg>
	</div>
</template>

<script setup>
import { onMounted, ref, toRefs } from "vue";
let props = defineProps(["stroke", "width", "height", "isShow"]);
</script>

<style scoped>
.loading-icon {
	background: #000000;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	opacity: 1;
	transform: translateY(0%);
}

.loading-icon.hidden {
	opacity: 0;
	transform: translateY(110%);
	transition: all 0.425s ease-out;
}
</style>
