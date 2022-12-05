<template>
	<div @click="toGoUp" id="go-up" class="mostrar">
		<img class="button-up" src="/images/icons/up-arrow.png" alt="icono boton" />
	</div>
</template>

<script setup>
import { onMounted } from "vue";

let distanceToTop = () => {
	return document.documentElement.scrollTop || document.body.scrollTop;
};
const toGoUp = () => {


	//scrollTo(0, 1840);
	if (distanceToTop() > 0) {
		scrollTo(0, 0);
		return true;
	}
	return false;
};

onMounted(() => {
	let btn = document.querySelector("#go-up");

	window.onscroll = function () {
		if (document.documentElement.scrollTop > 20) {
			btn.classList.remove("ocultar");
			btn.classList.add("mostrar");
		} else {
			btn.classList.remove("mostrar");
			btn.classList.add("ocultar");
		}
	};
});
</script>

<style scoped>
#go-up {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 3;
	right: 25px;
	bottom: 25px;
	background-color: #006e8b;
	width: 40px;
	height: 40px;
	color: white;
	text-align: center;
	border-radius: 50%;
	transition: all 0.2s;
}

#go-up:hover {
	cursor: pointer;
	transform: scale(1.1);
}

.button-up {
	width: 23px;
	-webkit-filter: drop-shadow(5px 5px 5px #666666);
	filter: drop-shadow(5px 5px 5px #666666);
}

.ocultar {
	opacity: 0;
	visibility: hidden;
}

.mostrar {
	opacity: 1;
	visibility: visible;
}
@media only screen and (min-width: 1024px) {
	#go-up {
		width: 65px;
		height: 65px;
	}
	.button-up {
		width: 40px;
	}
}
</style>
