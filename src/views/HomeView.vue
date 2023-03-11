<template>
	<div class="home">
		<Hero />
		<Countdown :date="dates[0]" />
		<!-- <MatchDays /> -->
	</div>
</template>

<script setup>
import SEASONMATCHES from "../assets/data/matches.json";
import Hero from "../components/Hero.vue";
import MatchDays from "../components/MatchDays.vue";
import VideoSpots from "../components/VideoSpots.vue";
import Countdown from "../components/Countdown.vue";
import { ref, reactive, onBeforeMount, toRefs } from "vue";

const data = reactive({
	dates: [],
});

const dates = ref([]);

const title = "Luis Quintero Web | Inicio";
const description =
	"Web oficial de Luis Quintero, jugador del Villarreal Club de Fútbol.";
const keywords =
	"luis quintero, luis quintero web, luis quintero villarreal, luis quintero goles, luis quintero asistencias, villarreal juvenil, colombia sub 20, seleccion colombia sub 20, seleccion colombiana sub 20,  villarreal cf, villareal club de futbol, cantera grogueta, seleccion española sub 20";

onBeforeMount(() => {
	// Metadata
	document.title = title;

	const metaDescription = document.createElement("META");
	metaDescription.setAttribute("name", "description");
	metaDescription.setAttribute("content", description);
	document.head.appendChild(metaDescription);

	const metaKeywords = document.createElement("META");
	metaKeywords.setAttribute("name", "keywords");
	metaKeywords.setAttribute("content", keywords);
	document.head.appendChild(metaKeywords);

	const metaOGtitle = document.createElement("META");
	metaOGtitle.setAttribute("property", "og:title");
	metaOGtitle.setAttribute("content", title);
	document.head.appendChild(metaOGtitle);

	const metaOGtype = document.createElement("META");
	metaOGtype.setAttribute("property", "og:type");
	metaOGtype.setAttribute("content", "website");
	document.head.appendChild(metaOGtype);

	const metaOGurl = document.createElement("META");
	metaOGurl.setAttribute("property", "og:url");
	metaOGurl.setAttribute("content", "https://luisquinterojr.com/");
	document.head.appendChild(metaOGurl);

	const metaOGdescription = document.createElement("META");
	metaOGdescription.setAttribute("property", "og:description");
	metaOGdescription.setAttribute("content", description);
	document.head.appendChild(metaOGdescription);

	const metaOGimage = document.createElement("META");
	metaOGimage.setAttribute("property", "og:image");
	metaOGimage.setAttribute(
		"content",
		"https://luisquinterojr.com/favicon.ico",
	);
	document.head.appendChild(metaOGimage);

	const metaRobots = document.createElement("META");
	metaRobots.setAttribute("name", "robots");
	metaRobots.setAttribute("content", "index, follow");
	document.head.appendChild(metaRobots);

	SEASONMATCHES.matches.map((match, index) => {
		if (!(new Date(match.date).getTime() <= new Date().getTime())) {
			dates.value.push(new Date(match.date).getTime());
		}
	});
});
</script>

<style scoped>
*::-webkit-scrollbar {
	display: none;
}
.home {
	background: black;
	background-attachment: local;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
@media only screen and (min-width: 390px) {
	.home {
		height: calc(100vh - 160px);
		overflow-y: scroll;
		overflow-x: hidden;
	}
}
@media only screen and (min-width: 1024px) {
	.home {
		height: calc(100vh - 160px);
		background-position: center;
		overflow: auto;
	}
}
</style>
