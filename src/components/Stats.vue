<template>
	<section id="stats" class="stats">
		<div class="wrapper__stats">
			<nav class="stats-nav">
				<h2 class="stats__title">STATS 22-23</h2>
			</nav>
			<h3 class="stats__subtitle">TOTAL</h3>
			<BarStats
				barName="GOLES"
				:barNum="goals"
				:barIcon="barIconGoal"
				:showTotalMatches="false"
				:average="playedMatches"
				:showAverage="true"
			/>
			<BarStats
				barName="ASISTENCIAS"
				:barNum="asistGoals"
				:barIcon="barIconFootboots"
				:showTotalMatches="false"
				:average="playedMatches"
				:showAverage="true"
			/>
			<BarStats
				barName="PARTIDOS CONVOCADO"
				:barNum="playedMatches"
				:barIcon="barIconGoalNet"
				:showTotalMatches="true"
				:average="playedMatches"
				:showAverage="false"
			/>
		</div>
	</section>
</template>

<script setup>
import BarStats from './BarStats.vue';

const barIconGoalNet = '/images/goal-net.svg';
const barIconGoal = '/images/ball.svg';
const barIconFootboots = '/images/football-boots.png';
const playedMatches = 14; // +1 NO CONVOCADO
const goals = 10;
const asistGoals = 6;
</script>

<style scoped>
.stats {
	padding: 5rem 1rem;
	width: 100vw;
	height: auto;
}

.wrapper__stats {
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
}

.stats-nav {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
}

.logo__image {
	width: 20px;
}

.stats__title {
	margin: 1rem 0;
	font-size: 2.625rem;
	font-weight: 800;
	padding-left: 1rem;
	border-left: var(--neutral-0) 8px solid;
}

.stats__subtitle {
	text-align: left;
	font-size: 1.5rem;
	font-weight: 600;
}
@media only screen and (min-width: 1200px) {
	.stats {
		height: 100vh;
		background-size: cover;
		background-position: center;

		background-attachment: fixed;
	}
}
</style>
