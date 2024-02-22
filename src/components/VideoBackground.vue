<script setup></script>
<template>
	<div class="bg-video-wrap">

		<video
			class="video-preview"
			src="/videos/VIDEO-01.MP4"
			playsinline
			loop
			muted
			autoplay
		></video>
		<video
			class="video"
			src="/videos/VIDEO-01.MP4"
			playsinline
			loop
			muted
			autoplay
		></video>
		<div class="overlay"></div>
		<h1>Fullscreen video background</h1>
	</div>
</template>

<style scoped>
.bg-video-wrap {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 80vh;
}

.video-preview {
	position: absolute;
	top: 35%;
	right: 10%;
	max-width: 720px;
	z-index: 3;
}
.video {
	filter: blur(15px);
	min-width: 100%;
	min-height: 100vh;
	z-index: 1;
}
.overlay {
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-image: linear-gradient(
		45deg,
		rgba(0, 0, 0, 0.3) 50%,
		rgba(0, 0, 0, 0.7) 50%
	);
	background-size: 3px 3px;
	z-index: 2;
}
h1 {
	text-align: center;
	color: #fff;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	z-index: 3;
	max-width: 400px;
	width: 100%;
	height: 50px;
}

@media (max-width: 768px) {
    .video {
	height: 50vh;
}
	.overlay {
		height: 50vh;
	}
}
</style>
