<template>
		<svg
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			stroke-width="5.0"
			:stroke="fill"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="12" y1="5" x2="12" y2="19" />
			<line x1="5" y1="12" x2="19" y2="12" />
		</svg>
</template>

<script setup>
defineProps(["fill", "width", "height"]);
</script>

<style scoped>

</style>
