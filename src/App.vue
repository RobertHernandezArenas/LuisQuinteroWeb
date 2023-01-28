<template>
	<Contact />
	<!-- <button @click.prevent="add">Hola</button> -->
	<!-- <GalleryIA :images="cards" /> -->
	<!-- <MenuBar /> -->
	<!-- <Marquesina />
	<AccordionCards />
	<AccordionGallery /> 
	<Countdown :date="dateDay" @onFinish="finish()" />
	<MatchDays />
	<Biography />-->
	<!-- <Slider /> 
	<Contact />-->
	<!--<Stats />-->

	<!--<GridMansory /> 
	 <Newsletter />
<Mansory /> 
	<ButtonUp />
	<Cookies />
	<Updateo /> 
	<FooterX />-->
	<!-- <CardVideos :url="url" :title="title" :description="description" /> -->
</template>

<script setup>
import {
	onMounted,
	ref,
	onBeforeMount,
	onUpdated,
	computed,
	reactive,
} from "vue";
import SEASONMATCHES from "./assets/data/matches.json";
import AccordionGallery from "./components/AccordionGallery.vue";
import LoadingIcon from "./components/icons/LoadingIcon.vue";
import AccordionCards from "./components/AccordionCards.vue";
import ButtonUp from "./components/ButtonUp.vue";
import Contact from "./components/Contact.vue";
import Countdown from "./components/Countdown.vue";
import Demo from "./components/Demo.vue";
import GridMansory from "./components/GridMansory.vue";
import MatchDays from "./components/MatchDays.vue";
import Marquesina from "./components/Marquesina.vue";
import MenuBar from "./components/MenuBar.vue";
import Slider from "./components/Slider.vue";
import Biography from "./components/Biography.vue";
import Gallery from "./components/Gallery.vue";
import GalleryIA from "./components/GalleryIA.vue";
import Cookies from "./components/Cookies.vue";
import Mansory from "./components/Mansory.vue";
import FooterX from "./components/FooterX.vue";
import Newsletter from "./components/Newsletter.vue";
import Stats from "./components/Stats.vue";
import Updateo from "./components/Updateo.vue";
import data from "./assets/data/accordion-cards.json";

const cards = ref([]);

const dates = ref([
	//new Date("2022-12-12T20:08:00").getTime(),
	// new Date("2022-12-04T14:35:00").getTime(),
	// new Date("2022-12-04T14:30:00").getTime(),
	// new Date("2022-12-04T14:35:00").getTime(),
	// new Date("2022-12-04T14:30:00").getTime(),
]);

let end = ref();
let dateDay = computed(() => {
	return (end = dates.value[0]);
});
const finish = () => {};
onBeforeMount(() => {
	SEASONMATCHES.matches.map((match, index) => {
		if (!(new Date(match.date).getTime() <= new Date().getTime())) {
			dates.value.push(new Date(match.date).getTime());
			end.value = dates.value[0];
		}
	});

	// async function getIpClient() {
	// 	try {
	// 		const response = await fetch("https://api.ipify.org?format=json");
	// 		let hola = await response.json();
	// 		console.log(hola)
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	// getIpClient();

	/* --------------- SCROLL FX ---------------- */
	const fxs = document.querySelectorAll(".fx");
	window.addEventListener("scroll", checkfxs);
	checkfxs();

	function checkfxs() {
		const triggerBottom = (window.innerHeight / 5) * 4;

		fxs.forEach(box => {
			const boxTop = box.getBoundingClientRect().top;
			console.log(boxTop);

			if (boxTop < triggerBottom) {
				box.classList.add("show");
			} else {
				box.classList.remove("show");
			}
		});
	}
	/* ------------------------------------------ */
});
onMounted(() => {
	data.accordion.map(element => cards.value.push(element));
});

onUpdated(() => {});
</script>

<style>
@import "./assets/styles/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");
@import "./assets/fonts/ProximaNova/index.css";

:root {
	--mainColor: black;
	--secondaryColor: #e0ae00;
}
html {
	font-family: "Rajdhani", "Proxima Nova Bl", "Segoe UI", Tahoma, Verdana,
		sans-serif;
}
textarea,
body {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	font-family: "Rajdhani", "Proxima Nova Bl", "Segoe UI", Tahoma, Verdana,
		sans-serif;
}

body::-webkit-scrollbar {
	display: none;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
	color: var(--mainColor);
}

#app {
	display: flex;
	justify-content: center;
	flex-direction: column;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #ffffff;
	background-color: var(--tertiaryColor);
	overflow: hidden;
}
</style>
