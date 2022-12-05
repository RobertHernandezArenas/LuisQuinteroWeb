<template>
	<!-- <h2 class="matchcard__title">CALENDARIO</h2> -->
	<article
		v-for="matchData in matches.slice(0, 1)"
		:key="matchData.id"
		class="matchcard"
	>
		<!-- SHIELDS IMAGES -->
		<div class="matchcard__wrapper matchcard__wrapper--spe">
			<img
				:src="matchData.team1.image"
				:alt="`Escudo ${matchData.team1.name}`"
				class="matchcard__team-shield"
			/>
			<img
				:src="matchData.team2.image"
				:alt="`Escudo ${matchData.team2.name}`"
				class="matchcard__team-shield"
			/>
		</div>
		<div class="vs">vs</div>
		<div class="matchcard__wrapper matchcard__wrapper--spe">
			<p class="matchcard__team-name">{{ matchData.team1.name }}</p>
			<p class="matchcard__team-name">{{ matchData.team2.name }}</p>
		</div>
	</article>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SEASONMATCHES from "@/assets/data/matches.json";

const matches = ref([]);

onMounted(() => {
	SEASONMATCHES.matches.map(match => matches.value.push(match));
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
	matches.value.shift();
});
</script>

<style scoped>
.vs {
	position: absolute;
	left: 46%;
	display: flex;
	justify-content: center;
	font-size: 2rem;
	font-family: "Proxima Nova Rg", "Segoe UI", Tahoma, Geneva, Verdana,
		sans-serif;
}
.matchcard {
	padding: 0rem 0 2rem 0;
	display: flex;
	flex-direction: column;
	background: black;

	max-height: 300px;
	width: 100vw;
	/* scroll-snap-align: center; */
	/* transition: all 0.45s ease-in-out; */
}

.matchcard__wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
}

.matchcard__wrapper--spe {
	justify-content: space-evenly;
}

.matchcard__wrapper .matchcard__team-shield {
	width: 45px;
}

.matchcard__wrapper--spb {
	justify-content: space-between;
}

.matchcard__team-name {
	color: white;
	margin: 0.5rem 0;
}

@media only screen and (min-width: 768px) {
	.matchcard__container {
		align-items: center;
		height: 740px;
		width: 90vw;
		margin: 0 auto;
	}

	.matchcard {
		/* width: 320px; */
	}
}

@media only screen and (min-width: 1024px) {
	.matchcard__container {
		width: 95vw;
	}
	.matchcard {
		/* width: 380px; */
	}
}

@media only screen and (min-width: 1200px) {
	.matchcard__container {
		/* height: 420px; */
		height: auto;
		margin: 8rem auto;
	}
	.matchcard {
		/* width: 350px; */
	}
}
</style>
