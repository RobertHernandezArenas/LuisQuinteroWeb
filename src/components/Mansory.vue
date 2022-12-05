<template>
	<section class="mansory">
		<div class="mansory__wrapper">
			<div class="mansory__wrapper--img-container">
				<!-- <img src="/images/luis5.jpg" alt="" class="mansory__wrapper--img" /> -->
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";


</script>

<style scoped>
.mansory {
	margin: 1rem auto;
	width: 90vw;
}
.mansory__wrapper {
	columns: 5 320px;
	column-gap: 1rem;
}

.mansory__wrapper--img-container {
	overflow: hidden;
	margin-bottom: 1rem;
}

.mansory__wrapper--img {
	display: block;
	max-width: 100%;
}
</style>
