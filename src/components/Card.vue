<script setup>
const props = defineProps({
	item: {
		type: Object,
		default: () => {
			return {
				name: 'Item Name',
				quantity: 0,
			};
		},
	},
});
</script>

<template>
	<div class="card">
		<h1 class="card__quantity">{{ item.quantity }}</h1>
		<h2 class="card__name">{{ item.name }}</h2>
	</div>
</template>

<script setup></script>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(233, 233, 233, 0.15);
	background: radial-gradient(100% 225% at 100% 0%, #ff0000 0%, #000000 100%),
		linear-gradient(236deg, #00c2ff 0%, #000000 100%),
		linear-gradient(
			135deg,
			#cdffeb 0%,
			#cdffeb 36%,
			#009f9d 36%,
			#009f9d 60%,
			#07456f 60%,
			#07456f 67%,
			#0f0a3c 67%,
			#0f0a3c 100%
		);
	background-blend-mode: overlay, hard-light, normal;
	border-radius: 0.25rem;
	padding: 2rem 1rem;
	width: 300px;
	height: 200px;
	margin: 2rem 0;
}
.card__quantity {
	font-weight: 700;
}

.card__name {
	font-weight: 500;
}
</style>
