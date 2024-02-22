<template>
	<div class="countdown">
		<div class="countdown__wrapper">
			<p id="next" class="countdown__title">
				<span class="countdown__title-title">PRÓXIMO</span> PARTIDO
			</p>
			<div class="countdown__container">
				<div class="countdown__item">
					<span class="countdown__item-value">{{ days || '00' }}</span>
					<span class="countdown__item-name">Días</span>
				</div>
				<span class="countdown__separator">:</span>
				<div class="countdown__item">
					<span class="countdown__item-value">{{ hours || '00' }}</span>
					<span class="countdown__item-name">Horas</span>
				</div>
				<span class="countdown__separator">:</span>
				<div class="countdown__item">
					<span class="countdown__item-value">{{ minutes || '00' }}</span>
					<span class="countdown__item-name">Minutos</span>
				</div>
				<span class="countdown__separator">:</span>
				<div class="countdown__item">
					<span class="countdown__item-value">{{ seconds || '00' }}</span>
					<span class="countdown__item-name">Segundos</span>
				</div>
			</div>
		</div>
		<TeamVersus
			:matchDay="{
				league: activeDate.league,
				local: {
					image: activeDate.teams[0].image,
					name: activeDate.teams[0].name,
				},
				visitor: {
					image: activeDate.teams[1].image,
					name: activeDate.teams[1].name,
				},
			}"
		/>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, onBeforeMount } from 'vue';
import TeamVersus from '@/components/TeamVersus.vue';

const props = defineProps({
	matchDates: {
		type: Array,
		default: [
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-08-05T19:00:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 1',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/santander.png',
						name: 'Santander',
						result: '-',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '-',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-08-11T19:00:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 1',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '1',
					},
					{
						image: '/images/leagues/levante.png',
						name: 'Levante',
						result: '1',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-08-20T22:00:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 2',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/albacete.png',
						name: 'Albacete',
						result: '2',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '2',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-08-27T19:30:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 3',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '3',
					},
					{
						image: '/images/leagues/andorra.png',
						name: 'Andorra',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-09-03T19:00:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 4',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/espanyol.png',
						name: 'Espanyol',
						result: '3',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '2',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-09-10T14:15:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 5',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/santander.png',
						name: 'Racing Santander',
						result: '1',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-09-17T16:14:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 6',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '2',
					},
					{
						image: '/images/leagues/mirandes.png',
						name: 'Mirandés',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-09-24T14:00:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 7',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/villarreal.png',
						name: 'Villarreal B',
						result: '3',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '1',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-09-24T14:00:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 8',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '0',
					},
					{
						image: '/images/leagues/cartagena.png',
						name: 'Cartagena',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-10-05T19:30:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 9',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/ferrol.png',
						name: 'Ferrol',
						result: '1',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-10-08T13:00:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 10',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '1',
					},
					{
						image: '/images/leagues/eibar.png',
						name: 'Eibar',
						result: '2',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-10-15T17:30:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 11',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/leganes.png',
						name: 'Leganés',
						result: '6',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-10-21T15:00:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 12',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '0',
					},
					{
						image: '/images/leagues/oviedo.png',
						name: 'Oviedo',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-10-28T13:00:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 13',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/eldense.png',
						name: 'Eldense',
						result: '2',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-11-05T15:15:00.00Z',
				league: {
					name: 'LaLiga Hypermotion',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 14',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '0',
					},
					{
						image: '/images/leagues/huesca.png',
						name: 'Huesca',
						result: '1',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-11-12T20:00:00.00Z',
				league: {
					name: 'LaLiga HypermotionV',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 15',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/gijon.png',
						name: 'Sporting Gijón',
						result: '1',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '1',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-11-18T18:00:00.00Z',
				league: {
					name: 'LaLiga HypermotionV',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 16',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '2',
					},
					{
						image: '/images/leagues/tenerife.png',
						name: 'Tenerife',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-11-26T14:15:00.00Z',
				league: {
					name: 'LaLiga HypermotionV',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 17',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/elche.png',
						name: 'Elche',
						result: '2',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '0',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-11-18T18:00:00.00Z',
				league: {
					name: 'LaLiga HypermotionV',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 18',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '0',
					},
					{
						image: '/images/leagues/elche.png',
						name: 'Elche',
						result: '1',
					},
				],
			},
			{
				categoryLeague: 'Copa del Rey',
				date: '2023-12-06T18:00:00.00Z',
				league: {
					name: 'LaLiga HypermotionV',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: '1ª Ronda',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/levante.png',
						name: 'Levante',
						result: '0',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '1',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-12-09T15:15:00.00Z',
				league: {
					name: 'LaLiga HypermotionV',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 19',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/valladolid.png',
						name: 'Valladolid',
						result: '2',
					},
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '1',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-12-17T17:30:00.00Z',
				league: {
					name: 'LaLiga HypermotionV',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 20',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '-',
					},
					{
						image: '/images/leagues/zaragoza.png',
						name: 'Zaragoza',
						result: '-',
					},
				],
			},
			{
				categoryLeague: 'LaLiga Hypermotion',
				date: '2023-12-21T20:30:00.00Z',
				league: {
					name: 'LaLiga HypermotionV',
					image: '/images/leagues/laliga-hypermotion.svg',
				},
				match: 'Jornada 20',
				season: '2023-2024',
				teams: [
					{
						image: '/images/leagues/amorebieta.png',
						name: 'Amorebieta',
						result: '-',
					},
					{
						image: '/images/leagues/alcorcon.png',
						name: 'Alcorcon',
						result: '-',
					},
				],
			},
		],
	},
});

const now = ref(new Date());

const getNextActiveDate = () => {
	const currentDate = now.value.getTime();
	return [...props.matchDates]
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
		.find(match => new Date(match.date).getTime() > currentDate);
};

let activeDate = ref(getNextActiveDate());

const days = computed(() => {
	if (!activeDate.value) return null;
	const diffTime =
		new Date(activeDate.value.date).getTime() - now.value.getTime();
	return Math.floor(diffTime / (1000 * 60 * 60 * 24));
});

const hours = computed(() => {
	if (!activeDate.value) return null;
	const diffTime =
		new Date(activeDate.value.date).getTime() - now.value.getTime();
	return Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
});

const minutes = computed(() => {
	if (!activeDate.value) return null;
	const diffTime =
		new Date(activeDate.value.date).getTime() - now.value.getTime();
	return Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
});

const seconds = computed(() => {
	if (!activeDate.value) return null;
	const diffTime =
		new Date(activeDate.value.date).getTime() - now.value.getTime();
	return Math.floor((diffTime % (1000 * 60)) / 1000);
});

const updateActiveDate = () => {
	activeDate.value = getNextActiveDate();
};

const updateNextActiveDate = () => {
	activeDate.value = getNextActiveDate();
	if (activeDate.value) {
		// If there's a next active date, update the countdown
		now.value = new Date();
	}
};

onBeforeMount(() => {});

onMounted(() => {
	requestAnimationFrame(function updateCountdown() {
		now.value = new Date();
		if (
			!activeDate.value ||
			now.value.getTime() >= new Date(activeDate.value.date).getTime()
		) {
			updateNextActiveDate();
		}
		requestAnimationFrame(updateCountdown);
	});
});

// Clear interval when component unmounts
onBeforeUnmount(() => {
	// Clear the animation frame callback
	activeDate.value = null;
});
</script>

<style scoped>
.countdown {
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	background: #f7f7f7;
	color: black;
}

.countdown__wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	padding: 1rem 0;
	border-bottom: 1px solid black;
}

.countdown__container {
	display: flex;
	justify-content: center;
	width: 340px;
}

.countdown__item {
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
}
.countdown__separator {
	font-size: 40px;
	font-weight: 900;
}
.countdown__item-value {
	font-size: 40px;
	font-weight: 900;
}
.countdown__item-name {
	font-size: 14px;
}
.countdown__title {
	font-size: 1.8rem;
	margin-bottom: 0.25rem;
}
.countdown__title-title {
	font-weight: 900;
	color: #005aa6;
}

@media only screen and (min-width: 768px) {
	.countdown__wrapper {
		flex-direction: row;
	}

	.countdown__teams-versus {
		justify-content: center;
	}

	.countdown__league {
		background: var(--neutral-100);
		border-radius: 0.25rem;
	}
	.countdown__league-image {
		width: 420px;
	}

	.countdown__team-image {
		width: 40px;
	}

	.countdown__team-name {
		font-size: 1.2rem;
		font-weight: 300;
	}
}
</style>
