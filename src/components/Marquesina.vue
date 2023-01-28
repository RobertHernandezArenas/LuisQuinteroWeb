<template>
	<div class="wrapper">
		<!-- <div class="news">
			<h3>NOTICIAS</h3>
		</div> -->

		<marquee class="marquee"  scrollamount="5">
			<span> ⚠️🛠️ Web en construcción, subscribete al newsletter para estar pendiente a nuevas actualizaciones 🛠️⚠️ </span>
			<span> ⚠️🛠️ Web en construcción, subscribete al newsletter para estar pendiente a nuevas actualizaciones 🛠️⚠️ </span>

			<!-- <span><b>GOLES:</b>&nbsp;7</span>&nbsp;&nbsp;
			<span><b>ASISTENCIAS:</b>&nbsp;8</span>&nbsp;&nbsp;
			<span><b>MIN. JUGADOS:</b>&nbsp;895"</span>&nbsp;&nbsp;
			<img class="marquee__team" :src="props?.score?.team_a?.image" :alt="props?.score?.team_a?.name" />&nbsp;
			<span>{{ props?.score?.team_a?.name }}</span>&nbsp;
			<span><b> {{ props?.score?.team_a?.result }}</b></span>&nbsp;
			VS
			<img class="marquee__team" :src="props?.score?.team_b?.image" :alt="props?.score?.team_b?.name" />
			<span>{{ props?.score?.team_b?.name }}</span>&nbsp;
			<span><b> {{ props?.score?.team_b?.result }}</b></span> -->
		</marquee>
	</div>
</template>

<script setup>
const props = defineProps({
	score: {
		team_a: {
			name: String,
			image: String,
		},
		team_b: {
			name: String,
			image: String,
		},
	},
});
</script>

<style scoped>
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 6.5rem 0 0 0;
}
.news {
	display: none;
	align-items: center;
	background: black;
	height: 50px;
}

.news h3 {
	color: white;
	padding: 4rem;
}

.marquee {
	background: #ffdd00;
}
.marquee span {
	font-size: 16px;
	margin: 0  10rem;
}

.marquee__team {
	width: 25px;
}

@media only screen and (min-width: 1024px) {
	.news {
		display: inline-flex;
	}
}
</style>
