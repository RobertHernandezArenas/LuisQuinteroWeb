<template>
	<MenuBar />
	<AccordionGallery />
	<Countdown :date="dateDay" @onFinish="finish()" />
	<MatchDays />
	<Biography />
	<Slider />
	<Stats />
	<!-- <Mansory /> 
	<GridMansory /> -->
	<Newsletter />
	<Contact />
	<ButtonUp />
	<Cookies />
	<Updateo />
	<FooterX />
	<!-- <CardVideos :url="url" :title="title" :description="description" /> -->
</template>

<script setup>
import { onMounted, ref, onBeforeMount, onUpdated, computed, reactive } from "vue";
import SEASONMATCHES from "./assets/data/matches.json";
import AccordionGallery from "@/components/AccordionGallery.vue";
import ButtonUp from "@/components/ButtonUp.vue";
import Contact from "@/components/Contact.vue";
import Countdown from "@/components/Countdown.vue";
import GridMansory from "@/components/GridMansory.vue";
import MatchDays from "@/components/MatchDays.vue";
import MenuBar from "@/components/MenuBar.vue";
import Slider from "@/components/Slider.vue";
import Biography from "@/components/Biography.vue";
import Gallery from "./components/Gallery.vue";
import Cookies from "./components/Cookies.vue";
import Mansory from "@/components/Mansory.vue";
import FooterX from "@/components/FooterX.vue";
import Newsletter from "@/components/Newsletter.vue";
import Stats from "@/components/Stats.vue";
import Updateo from "@/components/Updateo.vue";

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
onMounted(() => {});

onUpdated(() => {});
</script>

<style>
@import "./assets/styles/reset.css";
@import "./assets/fonts/SFProDisplay/index.css";
@import "./assets/fonts/Montserrat/index.css";
@import "./assets/fonts/ProximaNova/index.css";

:root {
	--mainColor: black;
	--secondaryColor: #e0ae00;
}

body {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}

body::-webkit-scrollbar {
	display: none;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
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

p,
span,
a,
input,
textarea,
label,
fieldset {
	font-size: 19px;
	line-height: 32px;
}

h1,
h2,
h3,
h4,
h5,
h6,
span,
p,
a {
	color: black;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: "Proxima Nova Bl", "Segoe UI", Tahoma, Verdana, sans-serif;
}
span,
p,
a,
input,
textarea,
label,
fieldset {
	font-family: "Proxima Nova Rg", "Segoe UI", Tahoma, Verdana, sans-serif;
}
</style>
