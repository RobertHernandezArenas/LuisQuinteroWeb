<template>
	<svg id="buttonMenu" :width="width" :height="height" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.1H19V6.9H6V8.1ZM6 18.1H19V16.9H6V18.1ZM6 13.1H19V11.9H6V13.1Z" :fill="fill"/>
</svg>
</template>

<script setup>
defineProps(["fill", "width", "height"]);
</script>

<style scoped>
@media only screen and (min-width: 1200px) {
	#buttonMenu {
		display: none;
	}
}
</style>
