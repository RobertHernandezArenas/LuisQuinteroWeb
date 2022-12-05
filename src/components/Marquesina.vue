<template>
	<div class="wrapper">
		<div class="news">
			<h3>NEWS</h3>
		</div>

		<MARQUEE class="marquee" DIRECTION="right">
			<span><b>GOLES:</b>&nbsp;7</span>&nbsp;&nbsp;
			<span><b>ASISTENCIAS:</b>&nbsp;8</span>&nbsp;&nbsp;
			<span><b>MIN. JUGADOS:</b>&nbsp;895"</span>&nbsp;&nbsp;
			<img class="marquee__team" :src="props?.score?.team_a?.image" :alt="props?.score?.team_a?.name" />&nbsp;
			<span>{{ props?.score?.team_a?.name }}</span>&nbsp;
			<span><b> {{ props?.score?.team_a?.result }}</b></span>&nbsp;
			VS
			<img class="marquee__team" :src="props?.score?.team_b?.image" :alt="props?.score?.team_b?.name" />
			<span>{{ props?.score?.team_b?.name }}</span>&nbsp;
			<span><b> {{ props?.score?.team_b?.result }}</b></span>
		</MARQUEE>
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
}
.news {
	display: none;
	align-items: center;
	background: yellow;
	height: 50px;
}

.news h3 {
	color: black;
	padding: 4rem;
}

.marquee {
	background: rgba(126, 126, 126, 0.4);
	width: 85%;
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
