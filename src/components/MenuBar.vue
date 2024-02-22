<template>
	<nav class="nav">
		<div class="navigation">
			<div class="nav-content">
				<div class="logo">
					<router-link to="/" class="logo__router-link">
						<img
							:src="menuData.logo.image"
							:alt="menuData.logo.name"
							class="logo__image"
							:width="menuData.logo.size.width"
							:height="menuData.logo.size.height"
						/>
						<h1 class="title">LUIS QUINTERO</h1>
					</router-link>
				</div>
				<ul class="nav-links">
					<li>
						<router-link class="router-link" active-class="active" to="/">{{
							t('home.menu.home')
						}}</router-link>
					</li>
					<li>
						<router-link
							class="router-link"
							active-class="active"
							to="/biografia"
							>{{ t('about.title') }}</router-link
						>
					</li>

					<li>
						<router-link
							class="router-link"
							active-class="active"
							to="/galeria"
							>{{ t('gallery.title') }}</router-link
						>
					</li>
					<li>
						<router-link
							class="router-link"
							active-class="active"
							to="/contacto"
							>{{ t('contact.title') }}</router-link
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
		</div>

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
				>{{ t('home.menu.home') }}</router-link
			>
			<router-link
				class="router-link nav-mobile-links"
				active-class="active"
				@click="menuFX"
				to="/biografia"
				>{{ t('about.title') }}</router-link
			>
			<router-link
				class="router-link nav-mobile-links"
				active-class="active"
				@click="menuFX"
				to="/galeria"
				>{{ t('gallery.title') }}</router-link
			>
			<router-link
				class="router-link nav-mobile-links"
				active-class="active"
				@click="menuFX"
				to="/contacto"
				>{{ t('contact.title') }}</router-link
			>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue';
import ButtonMenu from './icons/ButtonMenu.vue';
import ButtonClose from './icons/ButtonClose.vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const menuData = {
	title: t('home.title').toLocaleUpperCase(),
	logo: {
		image: '/images/web-logo/light-logo.png',
		name: 'Logo Luis Quintero Web',
		size: { width: '40', height: '40' },
		url: '/',
	},
	links: [
		{ name: t('home.menu.home'), url: '/' },
		{ name: t('about.title'), url: '/biografia' },
		{ name: t('gallery.title'), url: '/galeria' },
		{ name: t('contact.title'), url: '/contacto' },
	],
};

const fill = ref('#FFFFFF');
const width = ref('35px');
const height = ref('35px');

const menuFX = e => {
	let mobileNav = document.querySelector('.nav-mobile');
	let closeFx = document.querySelector('.nav-mobile__close-button');

	mobileNav.classList.toggle('show-nav-mobile');
	closeFx.classList.toggle('fx');
};
</script>

<style scoped>
.nav {
	height: 80px;
}

.nav-mobile {
	background: var(--neutral-0);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	gap: var(--m);
	width: 100%;
	height: 100%;
	opacity: 0;
	transform: translateX(-100%);
	z-index: 100;
	transition: all 0.35s ease-in-out;
}

.nav-mobile-links {
	font-weight: 700;
	font-size: var(--l);
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
	color: var(--neutral-100);
	text-decoration: none;
}

.navigation {
	padding: 20px 40px;
	transition: padding 0.65s ease-in-out;
	width: 100%;
}

.navigation.sticky {
	position: fixed;
	left: var(--zero);
	top: var(--zero);
	padding: 25px 40px;
	color: var(--neutral-100);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.navigation.sticky .nav-content .nav-links li a {
	color: var(--neutral-0);
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
	display: none;
	color: var(--neutral-100);
	font-size: 1rem;
}
.navigation .logo a {
	font-weight: 500;
	font-size: 35px;
	text-decoration: none;
}
.navigation.sticky .logo a {
	color: var(--neutral-100);
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
	color: var(--neutral-100);
	font-size: 16px;
	font-weight: 500;
	padding: 10px 4px;
	transition: all 0.3s ease;
}
.nav-links .router-link:hover,
a.active.router-link-exact-active.router-link {
	color: #005aa6;
	/* color: var(--theme); */
}

.navigation.sticky .nav-links li a {
	color: var(--neutral-100);
	transition: all 0.4s ease;
}
.navigation.sticky .nav-links li a:hover {
	color: #0e2431;
}

@media only screen and (min-width: 1024px) {
	.menu__burger {
		display: none;
	}
	.navigation .logo .logo__router-link h1.title {
		display: block;
	}
}

@media only screen and (min-width: 1200px) {
	.nav-content .nav-links {
		display: flex;
	}
}
</style>
