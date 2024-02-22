<template>
	<div class="scroll-down">
		<div @click="onLinkClick" class="scroll-down__container">
			<img
				class="scroll-down__image"
				width="120"
				height="120"
				src="/images/scroll-down.gif"
				alt="Botón ir hacia abajo"
			/>
		</div>
		<br />
	</div>
</template>

<script setup>
const onLinkClick = () => {
	document.getElementById('next')?.scrollIntoView();
};
</script>

<style scoped>
.scroll-down {
	display: flex;
	justify-content: center;
	height: 5rem;
}

.scroll-down__container {
	width: 120px;
}
.scroll-down__image {
	cursor: pointer;
}
</style>
