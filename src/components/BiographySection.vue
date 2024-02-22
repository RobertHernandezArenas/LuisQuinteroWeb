<template>
	<div class="biography-content">
		<div class="content-container">
			<div class="content-image">
				<img
					class="img"
					src="/images/animations/glitch-fx/LUIS-VILLARREAL.webp"
					alt=""
					loading="lazy"
				/>
			</div>
		</div>
		<article class="content-article">
			<div class="content-article__header">
				<h2 class="content-article__header-title">BIOGRAFÍA</h2>
				<TableX />
			</div>
			<div class="content-article__body">
				<p class="content-article__body-biography">
					Luis Quintero es un joven jugador de fútbol nacido el 12 de octubre de
					2004 en Alicante, Comenzó su carrera en el fútbol desde temprana edad
					en la Peña Barcelonista del pueblo alicantino de Santa Pola. Pasado un
					tiempo, su familia decide mudarse a la ciudad de Elche. Allí, tuvo la
					oportunidad de seguir enriqueciendo su fútbol en equipos como Promesas
					de Elche, Elche C.F y Kelme C.F. Gracias a su trabajo, esfuerzo y
					sacrificio le concedieron tener la oportunidad de ir convocado con la
					Selección Valenciana de Fútbol en los distintos años que estuvo en los
					equipos ya mencionados con anterioridad. Con 14 años, el Villarreal
					C.F se fija en su potencial y le brinda la oportunidad de continuar
					desarrollando su carrera en las divisiones inferiores del club en
					donde se ha convertido en una de las piezas clave de la plantilla del
					juvenil A que participa en la Liga División de Honor del grupo 7.
					<br />
					Luis Quintero destaca por sus habilidades de organizador y creador de
					oportunidades de gol, cuenta con una gran visión del juego que le
					permite anticiparse a sus rivales y encontrar espacios en el campo. Su
					desparpajo en el terreno de juego le ha permitido destacarse en la
					categoría juvenil del Villarreal C.F hasta la fecha.
				</p>
			</div>
		</article>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';

import TableX from './TableX.vue';

onMounted(() => {});
</script>

<style scoped>
p,
span,
b {
	font-size: 14px;
	line-height: 1.8;
}

.biography-content {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	/* z-index: -100; */
	height: auto;
}

.content-image {
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 200px;
	height: 280px;
	animation: glitchFx 8s infinite steps(1) alternate-reverse;
}

.content-image .img {
	visibility: hidden;
	width: 280px;
}

.content-article {
	color: var(--neutral-0);
}

.content-article__header-title {
	text-align: center;
	font-size: 2.5rem;
	font-weight: 800;
}

.content-article__header-data {
	margin: 1rem;
}

.content-article__nacionality-flags {
	width: 26px;
	margin: 0 0.25rem;
}

.content-article__body-biography {
	margin: 1rem;
}

@media only screen and (min-width: 1200px) {
	.biography-content {
		gap: 4rem;
		height: calc(100vh - 100px);
	}

	.content-image {
		width: 680px;
		height: 100vh;
	}

	.content-container {
		height: fit-content;
	}

	.content-article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		color: var(--neutral-0);
		width: 45%;
	}

	.content-article__header-title {
		font-size: 5rem;
	}

	.content-article__header-data,
	.content-article__body-biography {
		font-size: 1rem;
	}

	.content-article__nacionality-flags {
		width: 30px;
	}
}
</style>
