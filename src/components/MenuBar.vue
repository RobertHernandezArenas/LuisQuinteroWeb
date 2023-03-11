<template>
	<header class="header">
		<nav class="navigation">
			<div class="nav-content">
				<div class="logo">
					<router-link to="/" class="logo__router-link">
						<img :src="logo" alt="Logo" class="logo__image" width="40" height="40" />
						<h1 class="title">LUIS QUINTERO</h1>
					</router-link>
				</div>
				<ul class="nav-links">
					<li>
						<router-link class="router-link" active-class="active" to="/"
							>Inicio</router-link
						>
					</li>
					<li>
						<router-link
							class="router-link"
							active-class="active"
							to="/biografia"
							>Biografia</router-link
						>
					</li>

					<li>
						<router-link
							class="router-link"
							active-class="active"
							to="/galeria"
							>Galeria</router-link
						>
					</li>
					<li>
						<router-link
							class="router-link"
							active-class="active"
							to="/contacto"
							>Contacto</router-link
						>
					</li>
				</ul>
				<ButtonMenu
					@click="menuFX"
					:width="width"
					:height="height"
					:fill="fill"
				/>
			</div>
		</nav>

		<div class="nav-mobile">
			<ButtonClose
				@click="menuFX"
				width="40"
				height="40"
				fill="#FFFFFF"
				class="nav-mobile__close-button"
			/>
			<router-link
				class="router-link nav-mobile-links"
				active-class="active"
				@click="menuFX"
				to="/"
				>Inicio</router-link
			>
			<router-link
				class="router-link nav-mobile-links"
				active-class="active"
				@click="menuFX"
				to="/biografia"
				>Biografia</router-link
			>
			<router-link
				class="router-link nav-mobile-links"
				active-class="active"
				@click="menuFX"
				to="/galeria"
				>Galeria</router-link
			>
			<router-link
				class="router-link nav-mobile-links"
				active-class="active"
				@click="menuFX"
				to="/contacto"
				>Contacto</router-link
			>
		</div>
	</header>
</template>

<script setup>
import { onMounted, computed, ref, watch, reactive } from "vue";
import ButtonMenu from "./icons/ButtonMenu.vue";
import ButtonClose from "./icons/ButtonClose.vue";

const logo = ref("/images/web-logo/light-logo.png");
const fill = ref("#FFFFFF");
const width = ref("35px");
const height = ref("35px");

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
			fill.value = "#000000";
			nav.fill = "#FFFFFF";
		} else {
			title.classList.remove("black");
			nav.classList.remove("sticky");
			logo.value = "/images/web-logo/light-logo.png";
			fill.value = "#FFFFFF";
		}
	});
});
</script>

<style scoped>
.header {
	height: 80px;

}
.navigation .logo .logo__router-link h1.title.black {
	color: black;
}

.nav-mobile {
	background: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 20;
	gap: 1.5rem;
	width: 100%;
	height: 100%;
	opacity: 0;
	transform: translateX(-100%);
	transition: all 0.35s ease-in-out;
}

.nav-mobile-links {
	font-weight: 700;
	font-size: 1.5rem;
}

.nav-mobile.show-nav-mobile {
	opacity: 1;
	position: fixed;

	transform: translateX(0%);
	transition: all 0.35s ease-in-out;
}

.nav-mobile__close-button {
	position: absolute;
	top: 0;
	right: 0;
	margin: 2rem 2rem 0 0;
	transform: rotate(0);
	transition: transform 0.35s ease-in-out;
}
.nav-mobile__close-button.fx {
	transform: rotate(270deg);
	transition: transform 0.35s ease-in-out;
}

.router-link {
	color: #fff;
	text-decoration: none;
}

.navigation {
	background: var(--mainColor);
	padding: 20px 40px;
	transition: padding 0.65s ease-in-out;
	width: 100%;
	z-index: 10;
}

.navigation.sticky {
	position: fixed;
	left: 0;
	top: 0;
	padding: 25px 40px;
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
	color: white;
	font-size: 1rem;
	font-family: "Poppins", "Proxima Nova Rg", "Segoe UI", Tahoma, Geneva,
		Verdana, sans-serif;
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
	width: 40px;
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
.nav-links .router-link:hover {
	background-image: linear-gradient(to top, #50cc7f 0%, #f5d100 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

a.active.router-link-exact-active.router-link {
	background-image: linear-gradient(
		-225deg,
		#d4ffec 0%,
		#57f2cc 48%,
		#4596fb 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
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
