<template>
	<div id="inicio" class="accordion">
		<!-- <div class="description">
			<h2 class="title" v-for="article in cards" :key="article.id">
				{{ article.title }}
			</h2>
		</div> -->
		<img
			class="card"
			v-for="article in cards"
			:key="article.id"
			:src="article.image"
			alt="imagen de galeria"
		/>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import data from "../assets/data/accordion-cards.json";

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
	display: flex;
}
/* Se debe jugar con la ancho y altura de las imagenes para lograr el resultado esperado*/
.accordion img.card {
	flex: 1;
	object-fit: cover;
	width: 280px;
	transition: all 0.45s ease-in-out;
	height: 720px;
}

.accordion img.card:hover {
	/* flex: 3; */
	width: 640px;
	transition: all 0.45s ease-in-out;
}

.accordion div.description h2.title {
	/* position: absolute;
	z-index: 33;
	color: aqua; */
}
</style>
