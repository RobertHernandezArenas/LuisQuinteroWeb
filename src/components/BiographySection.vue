<template>
	<div class="biography-content">
		<div class="content-container">
			<div class="content-image">
				<img class="img" src="/images/animations/glitch-fx/LUIS-VILLARREAL.png" alt="" />
			</div>
		</div>
		<article class="content-article">
			<div class="content-article__header">
				<h2 class="content-article__header-title">BIOGRAFIA</h2>
				<p class="content-article__header-data">
					Nacimiento: 12 de Octubre 2004 <br />
					Nacionalidad:
					
					<img
						class="content-article__nacionality-flags"
						src="/images/flags/spain.png"
						alt="Bandera de España"
						loading="lazy"
					/>
					<img
						class="content-article__nacionality-flags"
						src="/images/flags/colombia.png"
						alt="Bandera de Colombia"
						loading="lazy"
					/>
					<br />
					Altura/Peso: 180cm / 75kg <br />
					Posiciones: MP - ED - EI <br />
					Pie: Izquierdo
				</p>
			</div>
			<div class="content-article__body">
				<p class="content-article__body-biography">
					Nacido en la provicia de Alicante en 2004 y criado en el seno de una familia humilde, 
					Luis Quintero comienza sus primeros pasos como futbolista en la peña barcelonista del pueblo alicantino de Santa Pola, al poco tiempo decide llamado promesas de Elche se incorporo a las categorias
					inferiores del Elche Club de Futbol Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Numquam laborum aliquid non? Odio
					dolore laborum facilis aliquid dicta minus sunt iure explicabo
					illum dolorem, numquam odit assumenda ab. Ab, animi.
				</p>
			</div>
		</article>
	</div>
</template>

<script setup></script>

<style scoped>
@import "../../public/styles/animations/glitch.css";

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
	z-index: 10;
	height: fit-content;
}

.biography-content {
}

.content-container {
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
	 color: black;
}

.content-article__header {
}

.content-article__header-title {
	margin: 1rem;
	font-size: 2.625rem;
	font-weight: 800;
	padding-left: 1rem;
	border-left: var(--mainColor) 8px solid;
}

.content-article__header-data {
	margin: 1rem;
}

.content-article__nacionality-flags {
	width: 26px;
	margin: 0 0.25rem;
}

.content-article__body {
}

.content-article__body-biography {
	margin: 1rem;
}

@media only screen and (min-width: 1200px) {

	.biography-content {
		gap: 4rem;
	}

	.content-image {
    width: 500px;
    height: 580px;
}

.content-container{
	height: fit-content;
}

.content-article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: black;
    width: 45%;
}

.content-article__header-title {
	font-size: 5rem;
}

.content-article__header-data, .content-article__body-biography {
	font-size: 1rem;
}

.content-article__nacionality-flags {
	width: 30px;
}

}
</style>
