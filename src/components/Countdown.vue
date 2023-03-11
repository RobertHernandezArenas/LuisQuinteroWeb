<template>
	<div id="calendario" class="countdown__container">
		<div class="countdown__match">
			<p class="countdown__next-match">PRÓXIMO <span>PARTIDO</span></p>
		</div>
		<div class="countdown">
			<div v-if="days" class="countdown__block">
				<span class="countdown__digit">{{ days }}</span>
				<span class="countdown__text">{{ singOrPlural(daysText) }}</span>
			</div>
			<div class="countdown__block">
				<span class="countdown__digit">{{ hours }}</span>
				<span class="countdown__text">{{ singOrPlural(hoursText) }}</span>
			</div>
			<div class="countdown__block">
				<span class="countdown__digit">{{ minutes }}</span>
				<span class="countdown__text">{{ singOrPlural(minutesText) }}</span>
			</div>
			<div class="countdown__block">
				<span class="countdown__digit">{{ seconds }}</span>
				<span class="countdown__text">{{ singOrPlural(seconsdText) }}</span>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, computed, toRefs } from "vue";

const props = defineProps({
	date: Number,
});

const eventEmit = defineEmits(["onFinish"]);
const { date } = toRefs(props);
const event = ref(date);
const finish = ref(false);
const daysText = ref("Dias");
const hoursText = ref("Horas");
const minutesText = ref("Mins");
const seconsdText = ref("Segs");


const singOrPlural = str => {
	let item;
	switch (str) {
		case "Dias" || "dias":
			item = days.value;
			break;
		case "Horas" || "horas":
			item = hours.value;
			break;
		case "Mins" || "mins":
			item = minutes.value;
			break;
		case "Segs" || "segs":
			item = seconds.value;
			break;

		default:
			item = "--";
			break;
	}

	if (item === 1 && str.includes("s")) {
		str = str.slice(0, str.length - 1);
	}
	return str;
};

let now = ref(Math.trunc(new Date().getTime() / 1000));
const calculatedDate = ref(Math.trunc(event.value / 1000));

const secondCount = computed(() => {
	return calculatedDate.value - now.value;
});

const seconds = computed(() => {
	if (secondCount.value < 0) return 0;
	return secondCount.value % 60;
});
const minutes = computed(() => {
	if (secondCount.value < 0) return 0;
	return Math.trunc(secondCount.value / 60) % 60;
});

const hours = computed(() => {
	if (secondCount.value < 0) return 0;
	return Math.trunc(secondCount.value / 60 / 60) % 24;
});
const days = computed(() => {
	if (secondCount.value < 0) return 0;
	return Math.trunc(secondCount.value / 60 / 60 / 24);
});

onMounted(() => {
	window.setInterval(() => {
		now.value = Math.trunc(new Date().getTime() / 1000);
		if (!finish.value && calculatedDate.value - now.value <= 1) {
			finish.value = true;
			// $emit("onFinish");
		}
	}, 1000);
});
</script>
<style scoped>
.countdown__container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: auto;
	gap: 1rem;
	padding: 2rem 0;
	/** new feats
	position: fixed;
	top: 0;
	margin-top: 72px;
	z-index: 1001; */
	background-color: black;
}

.countdown__match {
	display: flex;
	justify-content: center;
	align-items: center;
}

.countdown__match p.countdown__next-match {
	font-size: 1.5rem;
	color: var(--secondaryColor);
	font-style: italic;
	font-weight: 700;
	font-display: swap;
}

.countdown__match p.countdown__next-match span {
	color: white;
	font-size: 1.5rem;
}

.countdown .countdown__block .countdown__digit {
	color: var(--secondaryColor);
}

.countdown {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 280px;
}
.countdown__block {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0px 15px;
	width: 80px;
	position: relative;
}
.countdown__block:first-child {
	padding-left: 0;
}
.countdown__block:first-child .countdown__digit:before {
	display: none;
}
.countdown__block:last-child {
	padding-right: 0;
}
.countdown__text {
	color: white;
	text-transform: uppercase;
	margin-bottom: 5px;
}
.countdown__digit {
	font-size: 2.3rem;
	font-weight: bold;
	line-height: 1;
	margin-bottom: 5px;
}
.countdown__digit:before {
	content: ":";
	position: absolute;
	left: -5px;
}
</style>
