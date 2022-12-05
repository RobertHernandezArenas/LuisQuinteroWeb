<template>
	<div class="wrapper">
		<header>
			<!-- <i class="bx bx-cookie"></i> -->
			<h2>POLÍTICA DE PRIVACIDAD</h2>
		</header>

		<div class="data">
			<p>
				Utilizamos cookies para asegurarnos de ofrecerte la mejor
				experiencia en nuestro sitio web. Haga clic
				<a href="/RGPD/privacy-policy.pdf"> aquí </a>para obtener más
				información.
			</p>
		</div>

		<div class="buttons">
			<button @click="isAcepted" class="button" id="acceptBtn">
				Aceptar
			</button>
			<button class="button" id="declineBtn">Rechazar</button>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from "vue";

const isAcepted = () => {
	let btn = document.querySelector(".button");
	let cookieBox = document.querySelector(".wrapper");
	cookieBox.classList.remove("show");
	document.cookie = "CookieConsent= Accepted-LuisQuintero10;";
};

onMounted(() => {
	const cookieBox = document.querySelector(".wrapper");

	const executeCodes = () => {
		//if cookie contains codinglab it will be returned and below of this code will not run
		if (!document.cookie.includes("LuisQuintero10")) {
			// return cookieBox.classList.add("is-hidden");
			return cookieBox.classList.add("show");
		}
	};

	//executeCodes function will be called on webpage load
	window.addEventListener("load", executeCodes);
});
</script>

<style scoped>
.wrapper.is-hidden {
	display: none;
}

.wrapper {
	display: none;
	margin: 0 auto;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	background: #fff;
	border-radius: 8px;
	padding: 15px 25px 22px;
	transition: right 0.3s ease;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	z-index: 3;
}
.wrapper.show {
	display: block;
	right: 20px;
}
.wrapper header {
	display: flex;
	align-items: center;
	column-gap: 15px;
}
header i {
	color: var(--mainColor);
	font-size: 32px;
}
header h2 {
	color: var(--mainColor);
	font-size: 1.2rem;
	font-weight: 500;
}
.wrapper .data {
	margin-top: 16px;
}
.wrapper .data p {
	color: #333;
	font-size: 14px;
	line-height: 1.1rem;
}
.data p a {
	color: #4070f4;
	font-size: 14px;
	text-decoration: none;
}
.data p a:hover {
	text-decoration: underline;
}
.wrapper .buttons {
	margin-top: 16px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.buttons .button {
	border: none;
	color: #fff;
	padding: 8px 0;
	border-radius: 4px;
	background: var(--mainColor);
	cursor: pointer;
	width: calc(100% / 2 - 10px);
	transition: all 0.2s ease;
}
.buttons #acceptBtn:hover {
	background-color: rgb(36, 163, 68);
}
#declineBtn {
	border: 2px solid var(--mainColor);
	background-color: #fff;
	color: var(--mainColor);
}
#declineBtn:hover {
	background-color: rgb(216, 64, 64);
	color: #fff;
	border: 2px solid rgb(216, 64, 64);
}
</style>
