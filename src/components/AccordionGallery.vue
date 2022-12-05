<template>
	<main id="inicio" class="accordion">
		<article
			v-for="article in cards"
			:key="article.id"
			class="accordion__card"
			:style="bgCard(article.image)"
		>
			<div class="accordion__container">
				<h3 class="accordion__title">{{ article.title.toUpperCase() }}</h3>
				<p class="accordion__description">
					{{ article.description.slice(0, 150) }}
				</p>
			</div>
		</article>
	</main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import data from "@/assets/data/accordion-cards.json";

const cards = ref([]);

const bgCard = str => {
	return `background-image: url(${str})`;
};
onMounted(() => {
	data.accordion.map(element => cards.value.push(element));
	bgCard();
});
</script>

<style scoped>
.accordion {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	height: calc(100vh - 112px);
	margin: 6.6rem 0 .5rem 0;/* 6.625rem */
	gap: 0.5rem;
	overflow: scroll;
	-ms-scroll-snap-type: x mandatory;
	-webkit-scroll-snap-type: x mandatory;
	scroll-snap-type: x mandatory;
	z-index: 3;
}

.accordion__card {
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
	width: 100%;

	height: 100%;
	scroll-snap-align: center;
}

.accordion__card:first-child {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	align-items: center;
}

.accordion__container {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	width: 260px;
	padding-bottom: 2rem;
	/* Aqui determinamos las dimensiones de la imagen */
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 15%,
		rgba(9, 9, 121, 0) 45%,
		rgba(0, 0, 0, 0) 100%
	);
}

.accordion__link {
	padding: 0 0 4.5rem 0;
}

.accordion__title,
.accordion__description {
	color: #fff;
	cursor: pointer;
}

h3.accordion__title {
	font-weight: 700;
	font-size: 1.5rem;
	margin: 0 1rem 0.75rem 1rem;
}

.accordion__description {
	line-height: 1.3rem;
	font-size: 16px;
	margin: 0 1rem 0.75rem 1rem;
}

@media only screen and (min-width: 1200px) {
	.accordion {
		width: 100vw;
		overflow: hidden;
		-ms-scroll-snap-type: unset;
		-webkit-scroll-snap-type: unset;
		scroll-snap-type: unset;
		gap: 0;
		align-self: center;
		max-width: 1920px;
	}

	.accordion__card {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-filter: grayscale(70%);
		filter: grayscale(70%);
		-webkit-transition: width 0.85s ease-in-out;
		transition: width 0.85s ease-in-out;
		scroll-snap-align: unset;
		/* max-height: 750px; */
	}

	.accordion__card:nth-child(3) {
		width: 200%;
		-webkit-filter: grayscale(0%);
		filter: grayscale(0%);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.accordion:hover .accordion__card {
		width: 100%;
		-webkit-transition: width 0.65s ease-in-out;
		transition: width 0.65s ease-in-out;
	}

	.accordion .accordion__card:hover {
		width: 200%;
		-webkit-filter: grayscale(0%);
		filter: grayscale(0%);
	}

	.accordion .accordion__card *.accordion__container {
		background: none;
	}

	.accordion .accordion__card:hover .accordion__container:hover {
		background: linear-gradient(
			0deg,
			rgb(0, 0, 0) 0%,
			rgba(9, 9, 121, 0) 60%,
			rgba(0, 0, 0, 0) 100%
		);
	}
	.accordion .accordion__card:nth-child(3) .accordion__container {
		background: -webkit-gradient(
			linear,
			left bottom,
			left top,
			from(rgb(0, 0, 0)),
			color-stop(60%, rgba(9, 9, 121, 0)),
			to(rgba(0, 0, 0, 0))
		);
		background: -webkit-linear-gradient(
			bottom,
			rgb(0, 0, 0) 0%,
			rgba(9, 9, 121, 0) 60%,
			rgba(0, 0, 0, 0) 100%
		);
		background: linear-gradient(
			0deg,
			rgb(0, 0, 0) 0%,
			rgba(9, 9, 121, 0) 60%,
			rgba(0, 0, 0, 0) 100%
		);
	}

	.accordion
		.accordion__card:nth-child(3)
		.accordion__container
		.accordion__title,
	.accordion
		.accordion__card:nth-child(3)
		.accordion__container
		.accordion__description {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	/** desactivar titulo y desription todas las cards */

	.accordion
		.accordion__card:hover
		.accordion__container:hover
		.accordion__title,
	.accordion
		.accordion__card:hover
		.accordion__container:hover
		.accordion__description {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.accordion .accordion__title:not(.accordion__card:hover .accordion__title),
	.accordion
		.accordion__description:not(.accordion__card:hover
			.accordion__description) {
		visibility: visible;
		opacity: 1;
		-webkit-transition: opacity visibility 0.45s ease-in-out;
		transition: opacity visibility 0.45s ease-in-out;
	}

	.accordion:hover
		.accordion__title:not(.accordion__card:hover .accordion__title),
	.accordion:hover
		.accordion__card
		span:not(.accordion__card:hover .accordion__card span),
	.accordion:hover
		.accordion__description:not(.accordion__card:hover
			.accordion__description) {
		visibility: hidden;
		opacity: 0;
		-webkit-transition: opcity visibility 0.45s ease-in-out;
		transition: opcity visibility 0.45s ease-in-out;
	}

	.accordion__container {
		width: 100%;
		padding-bottom: 6rem;
	}

	.accordion__image {
		position: fixed;
		-o-object-fit: cover;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.accordion__link {
		text-decoration: none;
	}

	.accordion__title,
	.accordion__description {
		display: none;
		color: #fff;
	}

	h3.accordion__title {
		font-size: 2.625rem;
		text-align: left;
		margin: 0 1rem 1rem 1.5rem;
	}

	.accordion__description {
		font-size: 18px;
		max-width: -webkit-max-content;
		max-width: -moz-max-content;
		max-width: max-content;
		margin: 0 1.5rem 1.5rem 1.5rem;
		line-height: 1.5rem;
		text-align: left;
	}
}
</style>
