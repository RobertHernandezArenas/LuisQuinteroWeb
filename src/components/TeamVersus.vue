<script setup>
const props = defineProps({
	matchDay: {
		type: Object,
		default: {
			league: {
				image: '/images/leagues/laliga-hypermotion.svg',
				name: 'LaLiga HypermotionV',
			},
			local: {
				name: 'Leganes',
				image: '/images/leagues/leganes.png',
			},
			visitor: {
				name: 'Amorebieta',
				image: '/images/leagues/amorebieta.png',
			},
		},
	},
});
</script>
<template>
	<div class="team-versus">
		<div class="team-versus__wrapper">
			<div class="team-versus__container">
				<div class="team-versus__item">
					<img
						class="team-versus__team-image"
						:src="matchDay.local.image"
						:alt="matchDay.local.name"
					/>
					<p class="team-versus__team-name">{{ matchDay.local.name }}</p>
				</div>
				<div class="team-versus__item">
					<img
						class="team-versus__league-image"
						:src="matchDay.league.image"
						:alt="matchDay.league.name"
					/>
				</div>
				<div class="team-versus__item">
					<img
						class="team-versus__team-image"
						:src="matchDay.visitor.image"
						:alt="matchDay.visitor.name"
					/>
					<p class="team-versus__team-name">{{ matchDay.visitor.name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.team-versus {
	display: flex;
	justify-content: center;
}
.team-versus__wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 60px;
}

.team-versus__container {
	display: flex;
	color: white;
	width: 100vw;
	max-width: 420px;
}

.team-versus__item {
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
	gap: 0.25rem;
}

.team-versus__item:first-of-type {
	flex: 2;
	border-right: 1px solid black;
}
.team-versus__item:nth-of-type(2) {
	padding: 0.5rem;
	border-right: 1px solid black;

	flex: 1;
}
.team-versus__item:nth-of-type(3) {
	flex: 2;
}

.team-versus__team-image {
	width: 30px;
}

.team-versus__team-name {
	font-size: 0.875rem;
}

.team-versus__league-image {
	width: 55px;
}

@media only screen and (min-width: 1024px) {
	.team-versus {
		margin-bottom: 1rem;
	}
	
	.team-versus__team-image {
		width: 45px;
	}

	.team-versus__team-name {
		font-size: 1rem;
	}

	.team-versus__league-image {
		width: 70px;
	}
}
</style>
