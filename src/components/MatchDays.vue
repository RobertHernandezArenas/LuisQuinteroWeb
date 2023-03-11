<template>
	<!-- <h2 class="matchcard__title">CALENDARIO</h2> -->
	<section class="matchcard">
		<article
			v-for="matchData in matches.slice(0, 1)"
			:key="matchData.id"
			class="matchcard__wrapper"
		>
			<!-- SHIELDS IMAGES -->
			<div class="matchcard__container">
				<img
					:src="matchData.team1.image"
					:alt="`Escudo ${matchData.team1.name}`"
					width="50"
					height="50"
					class="matchcard__team-shield"
				/>
				<p class="matchcard__team-name">
					{{ matchData.team1.name }}
				</p>
			</div>
			<div class="vs"><span>VS</span></div>
			<div class="matchcard__container">
				<img
					:src="matchData.team2.image"
					:alt="`Escudo ${matchData.team2.name}`"
					width="59"
					height="64"
					class="matchcard__team-shield"
				/>
				<p class="matchcard__team-name">
					{{ matchData.team2.name }}
				</p>
			</div>
		</article>
	</section>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import SEASONMATCHES from "../assets/data/matches.json";

const matches = ref([]);

onMounted(() => {
	SEASONMATCHES.matches.map(match => {
		if (!(new Date(match.date).getTime() <= new Date())) {
			matches.value.push(match);
		}
	});
});
</script>

<style scoped>
.matchcard {
	display: flex;
	justify-content: center;
	padding: 0rem 0 2rem 0;
	background: black;
	max-height: 300px;
	width: 100vw;
}

.matchcard__wrapper {
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 720px;
}

.matchcard__container {
	display: flex;
	flex: 1;
	gap: 0.5rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.matchcard__team-shield {
	/* max-width: 50px; */
}

.matchcard__team-name {
	color: white;
}

.vs {
	display: flex;
	align-items: center;
	justify-content: center;
}

.vs span {
	font-size: 1.5rem;
	font-weight: 600;
	color: white;
}
@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 1024px) {
}

@media only screen and (min-width: 1200px) {
	.matchcard {
	}

	.matchcard__wrapper {
		align-items: center;
		width: 768px;
	}
	.matchcard__team-shield {
		/* max-width: 60px; */
	}
}
</style>
