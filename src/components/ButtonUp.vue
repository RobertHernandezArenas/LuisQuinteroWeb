<script setup>
import { onMounted } from 'vue';

const toGoUp = () => scrollTo(0, 0);

onMounted(() => {
	let btn = document.querySelector('.go-up');
	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop != 0) {
			btn.classList.add('mostrar');
		} else {
			btn.classList.remove('mostrar');
		}
	});
});
</script>

<template>
	<div @click="toGoUp" id="go-up" class="go-up">
		<img
			class="button-up"
			src="/images/up-arrow.svg"
			alt="Botón volver arriba"
			title="Volver arriba"
		/>
	</div>
</template>

<style scoped>
.go-up {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 3;
	right: 25px;
	bottom: 25px;
	background-color: #005aa6; /* #ffe200; */
	width: 30px;
	height: 30px;
	color: var(--lightColor);
	text-align: center;
	border-radius: 50%;
	transition: all 0.25s ease-out;
	opacity: 0;
}

#go-up:hover {
	cursor: pointer;
	transform: scale(1.1);
}

.button-up {
	width: 15px;
	-webkit-filter: drop-shadow(5px 5px 5px #666666);
	filter: drop-shadow(5px 5px 5px #666666);
}

.mostrar {
	transition: all 0.65s ease-in;
	opacity: 1;
}
@media only screen and (min-width: 1024px) {
	#go-up {
		width: 35px;
		height: 35px;
	}
	.button-up {
		width: 15px;
	}
}
</style>
