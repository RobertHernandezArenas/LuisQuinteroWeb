<template>
	<swiper
		:rewind="true"
		:slidesPerView="1"
		:spaceBetween="5"
		:loop="true"
		:navigation="true"
		:modules="modules"
		@autoplayTimeLeft="onAutoplayTimeLeft"
		:autoplay="{
			delay: 2500,
			disableOnInteraction: false,
		}"
	>
		<swiper-slide
			v-for="(item, index) in items"
			:key="index"
			class="swiper-slide"
		>
			<article class="article">
				<div class="article__containerImage">
					<img class="article__image" :src="item.url" alt="" />
				</div>
				<div class="article__container">
					<p class="article__date">11 Mayo de 2023</p>
					<h2 class="article__title">FIN DE LA TEMPORADA 2022-2023</h2>

					<p class="article__text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
						quo tempora non saepe nesciunt. Tempora consectetur ipsum nobis,
						nisi, ut corrupti porro eveniet mollitia illo rem et beatae quo
						minus perspiciatis iste, aliquid harum? Laborum non adipisci ipsam
						odio. Iure?
					</p>
					<span class="article__tag">VILLARREAL</span>
				</div>
			</article>
		</swiper-slide>
	</swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { ref } from 'vue';

const progressCircle = ref(null);
      const progressContent = ref(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.value.style.setProperty('--progress', 1 - progress);
        progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
      };

const fx = () => {
	let article = document.querySelector('.article');
	article.classList.add('article--show');
};

const items = [
	{ url: '/images/quintero.jpeg' },
	{ url: '/images/demo.jpg' },
	{ url: '/images/demo.jpg' },
];

const props = defineProps({
	items: {
		type: Array,
		required: true,
		default: [
			{ url: '/images/quintero.jpeg' },
			{ url: '/images/demo.jpg' },
			{ url: '/images/demo.jpg' },
		],
	},
});

const modules = [Pagination, Navigation];
</script>

<style scoped>
.mySwiper {
}

.swiper-slide {
	display: inline-flex;
	justify-content: center;
}

.article {
	background: var(--neutral-100);
	color: var(--neutral-0);
	display: flex;
	flex-wrap: wrap;
	min-width: 300px;
	max-width: 80%;
	opacity: 1;
}

.article--show {
	opacity: 0;
	transition: all 0.45s ease-in-out;
}

.article__containerImage {
	width: 100%;
}

.article__image {
	display: block;
	max-width: 100%;
}

.article__container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: calc(var(--xl) - var(--m)) var(--xl) var(--xl) var(--xl);
}
.article__tag {
	align-self: flex-start;
	background: var(--theme);
	border-left: solid var(--s) var(--neutral-0);
	padding: var(--xs) var(--s);
	font-size: calc(var(--m) - var(--xs));
}

.article__date {
	align-self: flex-end;
	margin: var(--m) var(--s) 0;
	color: var(--neutral-40);
	font-size: calc(var(--m) - var(--xs));
	font-style: italic;
}

.article__title {
	line-height: var(--xl);
	font-weight: 900;
}

.article__text {
	text-align: justify;
	text-justify: inter-word;
	font-size: var(--m);
	line-height: var(--l);
}

@media only screen and (min-width: 1024px) {
	.article {
		/* width: 80vw; */
		height: 60vh;
	}

	.article__container {
		flex: 1;
	}
	.article__containerImage {
		height: 100%;
		flex: 2;
	}
	.article__image {
		object-fit: cover;
		height: 100%;
	}

	.article__title {
		font-size: 4rem;
		line-height: 3.5rem;
	}

	.article__text {
		font-size: 18px;
	}
}
</style>
