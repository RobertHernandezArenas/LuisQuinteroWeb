<template>
	<div class="hero">
		<div class="hero__box">
			
		</div>
	</div>
</template>

<style scoped>
.hero {
	display: flex;
	justify-content: center;
	background: url('/images/luis-amorebieta.png'),
		url('/images/hero/quintero.webp');
	background-size: contain, 260px 260px;
	background-position: center, center;
	background-repeat: no-repeat;
	height: 100vh;
	z-index: -1;
	overflow-x: hidden;
}

/*

@media only screen and (min-width: 360px) {
	.hero {
		background-size: contain, 300px 300px;
	}
}

@media only screen and (min-width: 768px) {
	.hero {
		background-size: contain, 640px 640px;
	}
}

@media only screen and (min-width: 1024px) {
	.hero {
		background-size: contain, 860px 860px;
	}
}
@media only screen and (min-width: 1440px) {
	.hero {
		background-size: contain, 960px 860px;
	}
}*/
</style>
