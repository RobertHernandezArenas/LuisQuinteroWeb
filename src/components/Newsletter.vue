
<template>
	<section class="newsletter">
		<form class="newsletter-form">
			<h2 class="newsletter-form__title">SUBSCRIPCIÓN</h2>
			<p class="newsletter-form__description">
				Se el primero en tener en primicia todas las actualizaciones de mi
				sitio web.
			</p>
			<input
				class="newsletter-form__input"
				type="email"
				name="newsletter"
				id="newsletter"
				placeholder="myemail@email.com"
			/>
			<button @click.prevent="" class="newsletter-form__button">
				SUBSCRIBIRME
			</button>
		</form>
	</section>
</template>

<script setup></script>

<style scoped>
.newsletter {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 75vh;
}

.newsletter-form {
	background: black;
	display: inline-flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	height: auto;
	padding: 2rem;
}
.newsletter-form__title {
	color: white;
	font-size: 2.2rem;
	font-weight: 800;
	width: fit-content;
	/* padding-left: 1rem;
    border-left: white 8px solid; */
}

.newsletter-form__description {
	color: white;
	font-size: 14px;
	line-height: 25px;
}

.newsletter-form__input {
	border: white 2px solid;
	padding: 0.5rem 1rem;
	width: 100%;
	margin: 1rem 0;
}
.newsletter-form__button {
	font-weight: bolder;
	padding: 1rem 2rem;
	border-radius: 1rem;
}
</style>
