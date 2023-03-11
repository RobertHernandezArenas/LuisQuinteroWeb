<template>
	<MenuBar />

	<RouterView /><!-- <Transition name="slide-fade"> </Transition> -->
	<FooterX />
</template>

<script setup>
import { RouterView } from "vue-router";
import MenuBar from "./components/MenuBar.vue";
import FooterX from "./components/FooterX.vue";
import { onBeforeMount } from "vue";


</script>

<style>
@import "./assets/styles/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "./assets/fonts/ProximaNova/index.css";
@import "../public/fonts/Sigana/index.css";

:root {
	--mainColor: black;
	--secondaryColor: #e0ae00;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
	color: var(--mainColor);
}

html,
textarea,
body {
	font-family: "Poppins", "Proxima Nova Bl", "Segoe UI", Tahoma, Verdana,
		sans-serif;
}

body {
	height: 100vh;
}

img {
	/* max-width: 100%; */
	display: block;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #ffffff;
	overflow: hidden;
}

.slide-fade-enter-active {
	transition: all 0.8s ease-in-out;
}

.slide-fade-leave-active {
	transition: all 1.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
</style>
