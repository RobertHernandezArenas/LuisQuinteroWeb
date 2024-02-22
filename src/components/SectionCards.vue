<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';

const dataCards = ref([
	{ name: 'Goles', quantity: 0 },
	{ name: 'Asistencias', quantity: 1 },
	{ name: 'Minutos Jugados', quantity: 486 },
]);
</script>

<template>
	<section class="statistics">
		<Card v-for="dataCard of dataCards" :key="dataCard.id" :item="dataCard" />
	</section>
</template>

<style scoped>
.statistics {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
</style>
