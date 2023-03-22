<template>
	<header class="header">
		<keep-alive>
			<MenuBar />
		</keep-alive>
	</header>
	<div class="content">
		<RouterView />
	</div>
	<footer class="footer">
		<keep-alive>
			<FooterX />
		</keep-alive>
	</footer>
</template>

<script setup>
import { RouterView } from "vue-router";
import MenuBar from "./components/MenuBar.vue";
import FooterX from "./components/FooterX.vue";
</script>

<style>
#app {
	display: grid;
	grid-template-rows: 80px 1fr 80px;
	height: 100vh;
	color: #ffffff;
}

.content {
	background: black;
}
</style>
