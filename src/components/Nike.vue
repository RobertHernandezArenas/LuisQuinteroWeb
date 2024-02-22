<template>
	<section class="nike">
		<h2 class="nike__title">NIKE</h2>
		<div class="nike__banner">
			<a
				href="https://www.nike.com/es/"
				target="_blank"
				title="Ir a la web de Nike"
			>
				<picture>
					<source
						media="(min-width:768px)"
						srcset="/images/banners/banner-nike0.png"
						type="image/png"
					/>

					<source
						media="(min-width:300px)"
						srcset="/images/banners/banner-nike1.png"
						type="image/png"
					/>

					<img
						src="/images/banners/banner-nike0.png"
						width="300"
						height="120"
						alt="Luis Quintero"
					/> </picture
			></a>
		</div>
		<div class="nike__wrapper">
			<div class="nike__videos">
				<a
					href="https://youtu.be/0wt3cbbwj8o"
					target="_blank"
					title="Nike Spot Luis Quintero #1"
					><picture>
						<source srcset="/images/banners/banner-vid.jpg" type="image/jpg" />
						<img
							class="nike__image"
							src="/images/banners/banner-vid.jpg"
							width="300"
							height="300"
							alt="Nike Spot Luis Quintero #1"
						/> </picture
				></a>
			</div>
			<div class="nike__videos">
				<a
					href="https://youtu.be/gdsHj-aLxP4"
					target="_blank"
					title="Nike Spot Luis Quintero #2"
				>
					<picture>
						<source srcset="/images/banners/banner-vid2.jpg" type="image/jpg" />
						<img
							class="nike__image"
							src="/images/banners/banner-vid2.jpg"
							width="300"
							height="300"
							alt="Nike Spot Luis Quintero #2"
						/> </picture
				></a>
			</div>
			<div class="nike__videos">
				<a
					href="https://youtu.be/uw-qs_XYMqw"
					target="_blank"
					title="Nike Spot Luis Quintero #3"
				>
					<picture>
						<source srcset="/images/banners/banner-vid3.jpg" type="image/jpg" />
						<img
							class="nike__image"
							src="/images/banners/banner-vid3.jpg"
							width="300"
							height="300"
							alt="Nike Spot Luis Quintero #3"
						/> </picture
				></a>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped>
.nike {
	display: flex;
	flex-wrap: wrap;
	margin: var(--xxxl) 0;
	width: 80vw;
	
}

.nike__banner {
	margin-bottom: 3rem;
}

.nike__title {
	font-size: var(--xl);
	font-weight: 900;
	margin: var(--m) 0;
}

.nike__wrapper {
	display: flex;
	flex-wrap: wrap;
	gap: var(--xxxl);
}

.nike__videos {
	position: relative;
	cursor: pointer;
	overflow: hidden;
	width: 100%;
}

.nike__image:hover {
	opacity: 0.35;
	transform: scale(1.1);
	transition: all 0.45s ease-in-out;
}

@media only screen and (min-width: 1024px) {
	.nike__title {
	font-size: 4rem;
}
	.nike__videos {
		flex: 1;
	}
}
</style>
