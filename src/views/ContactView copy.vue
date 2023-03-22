<template>
	<div  id="contacto" class="contact">
		<LoadingIcon
			width="60px"
			height="60px"
			stroke="#FFFFFF"
			:isShow="isVisible"
		/>
		<div class="image-section"></div>

		<form @submit.prevent="sendEmail(message)" class="contact__form">
			<h1>{{ section.name }}</h1>
			<div class="contact__c-input">
				<input
					v-model="message.name"
					id="name"
					name="name"
					class="contact__form-input"
					type="text"
					placeholder="Nombre completo"
					required
				/>
			</div>

			<div class="contact__c-input">
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

			<div class="contact__c-input">
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

			<div class="contact__c-input">
				<textarea
					@keydown.enter.prevent="sendEmail(message)"
					v-model="message.message"
					class="contact__form-txt-area"
					id="message"
					name="message"
					placeholder="Escribe tu mensaje..."
				></textarea>
			</div>

			<div class="contact__c-input">
				<button class="contact__form-button">
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
		const a = await axios.post(`users/message`, message);
		message.name = "";
		message.email = "";
		message.subject = "";
		message.message = "";

		isVisible.value = false;
	} catch (error) {
		console.log(error);
		isVisible.value = false;
	}
};

const title = ref("Luis Quintero Web | Contact");
const description = ref("Pagina contacto comercial de Luis Quintero, jugador del Villarreal Club de Fútbol.")
const keywords = ref("luis quintero web contacto, luis quintero contacto")
onMounted(async () => {
	// Metadata
	document.title = title.value;
      document.querySelector('meta[name="description"]').setAttribute('content', description.value);
      document.querySelector('meta[name="keywords"]').setAttribute('content', keywords.value);
      document.querySelector('meta[property="og:title"]').setAttribute('content', title.value);
      document.querySelector('meta[property="og:url"]').setAttribute('content', "www.luisquinterojr.com/#/contacto");
      document.querySelector('meta[property="og:description"]').setAttribute('content', description.value);
      document.querySelector('meta[name="robots"]').setAttribute('content', 'index, follow');

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
.contact {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	transition: margin 0.35s ease-in-out;
}
.contact__form h1 {
	margin: 0.5rem 0;
	font-size: 2rem;
}
.image-section {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-image: url("/images/luis-quintero-email.jpg");
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: 390px;
}

.image-section img {
	display: block;
	max-width: 100%;
	max-height: 100%;
	opacity: 0;
}

.contact__form {
	padding: 0 1rem 1rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 768px;
}

.contact__form .contact__form-input {
	font-size: 14px;
	border: 2px solid black;
	border-radius: 0.15rem;
	padding: 0.65rem 1rem;
	margin: 0.5rem 0;
	width: 85vw;
}

.contact__form-txt-area {
	font-size: 14px;
	border: 2px solid black;
	border-radius: 0.15rem;
	padding: 0.65rem 1rem;
	margin: 0.5rem 0;
	width: 85vw;
	height: 150px;
}

.contact__c-input .contact__form-button {
	color: white;
	background: black;
	padding: 0.75rem 2rem;
	border-radius: 0.15rem;
	font-weight: 600;
	font-size: 16px;
	width: 85vw;
}

@media only screen and (min-width: 768px) {
	.image-section {
		width: 100vw;
		height: 400px;
	}

	.contact__c-input .contact__form-button {
		padding: 1rem 2rem;
	}

	.contact__c-input .contact__form-button,
	.contact .contact__form-input,
	.contact__form-txt-area,
	.contact__c-input .contact__form-button {
		max-width: 380px; /*320x480 resolucion iPhone 4*/
	}
}

@media only screen and (min-width: 1024px) {
	.image-section {
		width: 512px;
		height: calc(100vh - 95px);
	}

	.image-section img {
		height: 100vh;
	}

	.contact__form {
		max-width: 450px;
		margin: 0 auto;
	}

	@media only screen and (min-width: 1200px) {
		.image-section {
			width: 720px;
		}

		.contact__c-input .contact__form-button,
		.contact__form .contact__form-input,
		.contact__form-txt-area,
		.contact__c-input .contact__form-button {
			max-width: 480px; /*320x480 resolucion iPhone 4*/
		}
	}
}
</style>
