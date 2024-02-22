<template>
	<section class="banner-mask">
		<video :src="video" playsinline loop autoplay muted></video>
		<div class="banner-mask__container">
			<h1 class="banner-mask__title">QUINTERO</h1>
			<div class="menu__list-social--container">
				<span class="menu__list-social--title">FOLLOW ME</span>
				<ul class="menu__list-social">
					<li
						v-for="social in socialLogos"
						:key="social.id"
						class="menu__list-social--item"
					>
						<a href="#" class="menu__list-social--link">
							<img
								class="menu__list-social--icon"
								:src="social.logo"
								:alt="social.name"
						/></a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
const video = ref('./videos/nike-shot.mp4');
const socialLogos = ref([
	{
		name: 'facebook',
		logo: '/images/social-icons/facebook.svg',
		link: '#',
	},
	{
		name: 'instagram',
		logo: '/images/social-icons/instagram.svg',
		link: '#',
	},
	{
		name: 'youtube',
		logo: '/images/social-icons/youtube.svg',
		link: '#',
	},
]);

const fx = () => {
	console.log('hola');
};
</script>

<style scoped>
.banner-mask {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	position: relative;
	width: 300px;
	height: 400px;
}

.banner-mask video {
	width: 99%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
}

.banner-mask__container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-position: center 10px;
	background-image: url('/images/luisbn.jpg');
	mix-blend-mode: multiply;
	position: relative;
}

.banner-mask__title {
	position: absolute;
	top: 60%;
	color: var(--lightColor);
	font-weight: 900;
	font-size: 30px;
}

/* :::::::::: SOCIAL LINKS ICON :::::::::: */
.menu__list-social--container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.menu__list-social--title {
	display: none;
	color: darkgrey;
	font-size: 14px;
	letter-spacing: 0.25rem;
	cursor: default;
}
.menu__list-social {
	display: none;
	gap: 16px;
	list-style: none;
	margin: 16px;
}
.menu__list-social--item {
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu__list-social--icon {
	height: 24px;
	transform: scale(1, 1);
	transition: transform 0.25s ease-in;
}
.menu__list-social--icon[alt='youtube'] {
	height: 32px;
}
.menu__list-social--icon[alt='facebook']:hover,
.menu__list-social--icon[alt='instagram']:hover,
.menu__list-social--icon[alt='youtube']:hover {
	transform: scale(1.15, 1.15);
	transition: transform 0.25s ease-in;
}
.menu__list-social--icon[alt='facebook']:hover {
	filter: invert(49%) sepia(44%) saturate(7496%) hue-rotate(218deg)
		brightness(91%) contrast(92%);
}
.menu__list-social--icon[alt='instagram']:hover {
}
.menu__list-social--icon[alt='youtube']:hover {
	filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
		saturate(1600%) contrast(1);
}

@media only screen and (min-width: 768px) {
	h1.banner-mask__title {
		font-size: 60px;
	}
	.banner-mask p {
		color: var(--lightColor);
	}
}

@media only screen and (min-width: 1024px) {
	.banner-mask {
		width: 100%;
	}

	.menu__list-social {
		gap: 40px;
	}
	.menu__list-social--title {
		font-size: 18px;
		letter-spacing: 1rem;
	}
}
</style>
