<template>
	<section class="stats">
		<nav class="stats-nav">
			<h2 class="stats__title">LUIS QUINTERO 22-23</h2>
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
			barName="PARTIDOS"
			:barNum="playedMatches"
			:barIcon="barIconGoalNet"
			:showTotalMatches="true"
			:average="playedMatches"
			:showAverage="false"
		/>
	</section>
</template>

<script setup>
import BarStats from "@/components/BarStats.vue";

const barIconGoalNet = "/images/goal-net.svg";
const barIconGoal = "/images/ball.svg";
const barIconFootboots = "/images/football-boots.png";
const playedMatches = 12;
const goals = 8;
const asistGoals = 5;
</script>

<style scoped>
.stats {
	background: url("/images/stats/ST01.jpg");
	background-size: cover;
	background-position: -60px 70px;
	background-repeat: no-repeat;
	background-attachment: fixed;
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
	padding: 5rem 1rem;
	width: 100vw;
	height: auto;
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
	/* font-family: 'Proxima Nova Rg'; */
	font-size: 1.5rem;
	font-weight: 600;
}

.stats__subtitle {
	text-align: left;
	font-size: 2.5rem;
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
