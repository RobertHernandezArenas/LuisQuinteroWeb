<template>
	<div id="contacto" class="contact">
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

const title = "Luis Quintero Web | Contacto";
const description =
	"Pagina para contacto comercial de Luis Quintero, jugador del Villarreal Club de Fútbol.";
const keywords = "luis quintero web contacto, luis quintero contacto";
onMounted(async () => {
	// Metadata
	document.title = title;

	const metaDescription = document.createElement("META");
	metaDescription.setAttribute("name", "description");
	metaDescription.setAttribute("content", description);
	document.head.appendChild(metaDescription);

	const metaKeywords = document.createElement("META");
	metaKeywords.setAttribute("name", "keywords");
	metaKeywords.setAttribute("content", keywords);
	document.head.appendChild(metaKeywords);

	const metaOGtitle = document.createElement("META");
	metaOGtitle.setAttribute("property", "og:title");
	metaOGtitle.setAttribute("content", title);
	document.head.appendChild(metaOGtitle);

	const metaOGtype = document.createElement("META");
	metaOGtype.setAttribute("property", "og:type");
	metaOGtype.setAttribute("content", "website");
	document.head.appendChild(metaOGtype);

	const metaOGurl = document.createElement("META");
	metaOGurl.setAttribute("property", "og:url");
	metaOGurl.setAttribute("content", "https://luisquinterojr.com/#/contacto");
	document.head.appendChild(metaOGurl);

	const metaOGdescription = document.createElement("META");
	metaOGdescription.setAttribute("property", "og:description");
	metaOGdescription.setAttribute("content", description);
	document.head.appendChild(metaOGdescription);

	const metaOGimage = document.createElement("META");
	metaOGimage.setAttribute("property", "og:image");
	metaOGimage.setAttribute(
		"content",
		"https://luisquinterojr.com/favicon.ico",
	);
	document.head.appendChild(metaOGimage);

	const metaRobots = document.createElement("META");
	metaRobots.setAttribute("name", "robots");
	metaRobots.setAttribute("content", "index, follow");
	document.head.appendChild(metaRobots);

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

	/*
	let contact = document.querySelector(".contact");
	let nav = document.querySelector(".navigation");

	let prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			nav.style.top = "0";
		} else {
			nav.style.top = "-100px";
		}
		prevScrollpos = currentScrollPos;
	};*/
});
</script>

<style scoped>
.contact {
	background: white;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}
.contact__form h1 {
	margin: 0.5rem 0;
	font-size: 2.5rem;
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

	.contact__form h1 {
		margin: 0.5rem 0;
		font-size: 3.5rem;
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
