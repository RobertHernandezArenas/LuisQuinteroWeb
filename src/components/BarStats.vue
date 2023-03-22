<template>
	<div class="wrapper-box">
		<span class="stats__quantity"
			>{{ barNum }} <b v-if="showTotalMatches">&nbsp;/&nbsp;30</b></span
		>

		<div class="barProgress">
			<span>{{ barName }}</span>
			<!--<img class="barProgress__icon" :src="barIcon" alt="Icono" /> -->
		</div>
		<span v-if="showAverage"
			>Promedio {{ barName.toLowerCase() }}/partido:
			<b>{{ (barNum / average).toFixed(2) }}</b>
		</span>
	</div>
</template>

<script setup>
import { computed, onMounted } from "vue";
defineProps([
	"barName",
	"barNum",
	"showTotalMatches",
	"average",
	"showAverage",
]);

onMounted(() => {
	const stats = document.querySelector(".stats");
	const progressBars = document.querySelectorAll(".barProgress");
	window.addEventListener("scroll", callbackFX);
	callbackFX();

	function callbackFX() {
		const triggerBottom = (window.innerHeight / 5) * 4;

		progressBars.forEach(progressBar => {
			const boxTop = stats.getBoundingClientRect().top;

			if (boxTop < triggerBottom) {
				progressBar.classList.add("increment");
			} else {
				progressBar.classList.remove("increment");
			}
		});
	}
});
</script>

<style scoped>
.wrapper-box {
	display: block;
}

.barProgress {
	display: block;
	/* display: inline-flex;
	justify-content: start;
	align-items: center;
	gap: 0.5rem; */

	width: 35%;
	height: 30px;
	margin: 0 1rem;
	background: linear-gradient(225deg, #fff700 0%, #008071 100%);
	font-size: 0.9rem;
	padding-left: 0.5rem;
}

.barProgress.increment {
	width: 90%;
	transition: all 3s ease-in-out;
}

.barProgress__icon {
	width: 30px;
}

.wrapper-box span:nth-child(3) {
	padding-left: 1rem;
	font-size: 1rem;
}

.stats__quantity {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-weight: 600;
	font-size: 2rem;
	padding-left: 2rem;
	padding-bottom: .5rem;
	/* border: 5px solid #fff700; */
}
</style>
