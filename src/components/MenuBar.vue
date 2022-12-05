<template>
	<header>
		<nav class="navigation">
			<div class="nav-content">
				<div class="logo">
					<a class="logo__router-link" href="#">
						<img :src="logo" alt="Logo" class="logo__image" />
						<h1 class="title">LUIS QUINTERO</h1>
					</a>
				</div>
				<ul class="nav-links">
					<li><a href="#">Inicio</a></li>
					<li><a href="#biografia">Biografia</a></li>
					<li><a href="#nike">Nike</a></li>
					<li><a href="#galeria">Galeria</a></li>
					<li><a href="#contacto">Contacto</a></li>
				</ul>
				<ButtonMenu
					@click="menuFX"
					:width="width"
					:height="height"
					:color="color"
				/>
			</div>

			<div class="nav-mobile">
				<img
					@click="menuFX"
					src="/images/icons/close-btn.png"
					alt=""
					class="nav-mobile__close-button"
				/>
				<a @click="menuFX" href="#" class="nav-mobile__links">Inicio</a>
				<a @click="menuFX" href="#biografia" class="nav-mobile__links"
					>Biografia</a
				>
				<a @click="menuFX" href="#nike" class="nav-mobile__links">Nike</a>
				<a @click="menuFX" href="#galeria" class="nav-mobile__links"
					>Galeria</a
				>
				<a @click="menuFX" href="#contacto" class="nav-mobile__links"
					>Contacto</a
				>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { onMounted, computed, ref, watch, reactive } from "vue";
import ButtonMenu from "@/components/icons/ButtonMenu.vue";

const logo = ref("/images/web-logo/light-logo.png");
const color = ref("#FFFFFF");
const width = ref("25px");
const height = ref("25px");
const menuFX = e => {
	let mobileNav = document.querySelector(".nav-mobile");
	let closeFx = document.querySelector(".nav-mobile__close-button");
	mobileNav.classList.toggle("show-nav-mobile");
	closeFx.classList.toggle("fx");

	/** SCROLLTO CORRECT SECTION  */
};

onMounted(() => {
	let nav = document.querySelector(".navigation");
	let title = document.querySelector(".title");

	window.addEventListener("scroll", () => {
		if (document.documentElement.scrollTop >= 20) {
			nav.classList.add("sticky");
			title.classList.add("black");
			logo.value = "/images/web-logo/dark-logo.png";
			color.value = "#000000";
		} else {
			title.classList.remove("black");
			nav.classList.remove("sticky");
			logo.value = "/images/web-logo/light-logo.png";
			color.value = "#FFFFFF";
		}
	});
});
</script>

<style scoped>
.navigation .logo .logo__router-link h1.title.black {
	color: black;
}

.nav-mobile {
	padding: 2rem;
	background: black;
	background: url("/images/luis-desafiante.png"),
		url("/images/stadiums/STDM04.jpg");
	background-position: -50px, center;
	background-size: contain, cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* padding-bottom: 76px; */
	gap: 0.5rem;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	transform: translateX(-100%);
	/* transition: all 0.75s ease-in-out; */
	transition: all 500ms cubic-bezier(1, -0.1, 0, 0.78); /* custom */
	transition-timing-function: cubic-bezier(1, -0.1, 0, 0.78); /* custom */
	z-index: 0;
	overflow: hidden;
	inset: 0;
}

.nav-mobile.show-nav-mobile {
	transform: translateX(0%);
	transition: all 0.65s ease-in-out;
}

.nav-mobile__close-button {
	position: absolute;
	top: 0;
	right: 0;
	margin: 2rem 2rem 0 0;
	height: 30px;
	transform: rotate(0);
	transition: transform 0.45s ease-in-out;
}
.nav-mobile__close-button.fx {
	transform: rotate(270deg);
	transition: transform 0.45s ease-in-out;
}

.nav-mobile__links {
	font-weight: 700;
	color: #fff;
	text-decoration: none;
}

.navigation {
	background: var(--mainColor);
	/*height: 72px;*/
	/*max-height: 100px;*/
	padding: 20px;
	position: fixed;
	left: 0;
	top: 0;
	transition: padding 0.65s ease-in-out;
	width: 100vw;
	z-index: 10;
}

.navigation.sticky {
	padding: 10px 20px;
	background: white;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.navigation.sticky .nav-content .nav-links li a {
	color: black;
}
.navigation .nav-content {
	height: 100%;
	max-width: 1200px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.navigation .logo .logo__router-link {
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;
}

.navigation .logo .logo__router-link h1.title {
	font-weight: bold;
	color: white;
	font-size: 1rem;
	font-family: "Proxima Nova Rg", "Segoe UI", Tahoma, Geneva, Verdana,
		sans-serif;
}
.navigation .logo a {
	font-weight: 500;
	font-size: 35px;
	text-decoration: none;
}
.navigation.sticky .logo a {
	color: #fff;
}

.logo__image {
	width: 55px;
}
.nav-content .nav-links {
	display: none;
}
.nav-content .nav-links li {
	list-style: none;
	margin: 0 8px;
}
.nav-links li a {
	text-decoration: none;
	color: rgb(233, 233, 233);
	font-size: 16px;
	font-weight: 500;
	padding: 10px 4px;
	transition: all 0.3s ease;
}
.nav-links li a:hover {
	color: var(--secondaryColor);
}
.navigation.sticky .nav-links li a {
	color: #fff;
	transition: all 0.4s ease;
}
.navigation.sticky .nav-links li a:hover {
	color: #0e2431;
}

@media only screen and (min-width: 1024px) {
	.nav-content .nav-links {
		display: flex;
	}

	.menu__burger {
		display: none;
	}
}
</style>
