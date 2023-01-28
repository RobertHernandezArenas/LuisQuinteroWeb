<template>
	<div class="container-contact">
		<LoadingIcon
			width="60px"
			height="60px"
			stroke="#FFFFFF"
			:isShow="isVisible"
		/>

		<div class="image-section">
			<img :src="section.image" alt="" class="" />
		</div>

		<form @submit.prevent="sendEmail(message)" id="contacto" class="contact">
			<h1>{{ section.name }}</h1>
			<div class="contact__form">
				<input
					v-model="message.name"
					id="name"
					name="name"
					class="contact__form-input"
					type="text"
					placeholder="Nombre completo"
					autocomplete="off"
					required
				/>
			</div>

			<div class="contact__form">
				<input
					v-model="message.email"
					id="email"
					name="email"
					class="contact__form-input"
					type="email"
					placeholder="Email"
					autocomplete="off"
					required
				/>
			</div>

			<div class="contact__form">
				<input
					v-model="message.subject"
					id="subject"
					name="subject"
					class="contact__form-input"
					type="text"
					placeholder="Asunto"
					autocomplete="off"
					required
				/>
			</div>

			<div class="contact__form">
				<textarea
					v-model="message.message"
					class="contact__form-txt-area"
					id="message"
					name="message"
					placeholder="Escribe tu mensaje..."
				></textarea>
			</div>

			<div class="contact__form">
				<button
					@submit.prevent="sendEmail(message)"
					class="contact__form-button"
				>
					{{ section.btn_name }}
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import LoadingIcon from "../components/icons/LoadingIcon.vue";

const isVisible = ref(false);

const message = ref({
	name: "",
	email: "",
	subject: "",
	message: "",
});

const section = ref({
	name: "CONTACTO",
	image: "/images/luis-quintero-email.jpg",
	btn_name: "ENVIAR",
});
const sendEmail = async message => {
	try {
		isVisible.value = true;
		await axios.post(`users/message`, message);

		message.name = "";
		message.email = "";
		message.subject = "";
		message.message = "";

		isVisible.value = false;
	} catch (error) {
		console.log(error.message);
		isVisible.value = false;
	}
};

onMounted(async () => {
	const input = document.querySelector("input");

	input.addEventListener("invalid", function (event) {
		if (event.target.validity.valueMissing) {
			event.target.setCustomValidity(
				"Campo requerido: no puede estar vacio",
			);
		}
	});

	input.addEventListener("change", function (event) {
		event.target.setCustomValidity("");
	});
});
</script>

<style scoped>
.container-contact {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}
.contact h1 {
	margin: 0.5rem 0;
	font-size: 3.5rem;
}
.image-section {
	background-image: url("/images/luis-quintero-email.jpg");
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: 380px;
}

.image-section img {
	display: block;
	max-width: 100%;
	max-height: 100%;
	opacity: 0;
}

.contact {
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 768px;
}

.contact .contact__form-input {
	font-family: "Rajdhani", "Proxima Nova Bl", "Segoe UI", Tahoma, Verdana,
		sans-serif;
	font-size: 1rem;
	border: 2px solid black;
	border-radius: 0.15rem;
	padding: 0.65rem 1rem;
	margin: 0.5rem 0;
	width: 85vw;
}

.contact__form-txt-area {
	font-size: 1rem;
	border: 2px solid black;
	border-radius: 0.15rem;
	padding: 0.65rem 1rem;
	margin: 0.5rem 0;
	width: 85vw;
	height: 150px;
}

.contact__form .contact__form-button {
	color: white;
	background: black;
	padding: 0.75rem 2rem;
	border-radius: 0.15rem;
	font-weight: 600;
	width: 85vw;
}

@media only screen and (min-width: 768px) {

	
	.image-section {
		width: 100vw;
		height: 400px;
	}
	
	.contact__form .contact__form-button {
		padding: 1rem 2rem;
	}

	.contact__form .contact__form-button,
	.contact .contact__form-input,
	.contact__form-txt-area,
	.contact__form .contact__form-button {
		max-width: 380px; /*320x480 resolucion iPhone 4*/
	}
}

@media only screen and (min-width: 1024px) {
	.image-section {
		width: 512px;
		height: 100vh;
	}

	.image-section img {
		height: 100vh;
	}

	.contact {
		max-width: 450px;
		margin: 0 auto;
	}

	@media only screen and (min-width: 1200px) {
		.image-section {
			width: 720px;
		}

		.contact__form .contact__form-button,
		.contact .contact__form-input,
		.contact__form-txt-area,
		.contact__form .contact__form-button {
			max-width: 480px; /*320x480 resolucion iPhone 4*/
		}
	}
}
</style>
