<template>
	<form class="newsletter">
		<InputFields
			inputName="Nombre Completo"
			type="text"
			placeholder="your text here..."
			:required="true"
		/>
		<InputFields
			inputName="Nombre Completo"
			type="text"
			placeholder="your text here..."
			:required="true"
		/>
		<InputFields
			inputName="email"
			type="email"
			placeholder="your text here..."
			:required="true"
		/>
	</form>
</template>

<script setup>
import InputFields from './InputFields.vue';
</script>
<style scoped></style>
