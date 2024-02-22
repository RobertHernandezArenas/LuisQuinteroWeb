<template>
	<article class="accordion">
		<header @click="expand" class="accordion__header">
			<h1 class="accordion__title">
				{{ question.title }}
			</h1>
			<div class="accordion__icon">
				<PlusIcon fill="#d18140" width="20px" height="20px" />
			</div>
		</header>
		<main class="accordion__body">
			<p class="accordion__text">
				{{ question.description }}
			</p>
		</main>
	</article>
</template>
<script setup>
import MinusIcon from "../components/icons/MinusIcon.vue";
import PlusIcon from "../components/icons/PlusIcon.vue";
import ArrowDownIcon from "../components/icons/ArrowDownIcon.vue";
import { ref, onMounted } from "vue";

const expand = () => {
	const button = document.querySelector(".accordion__header");
	const body = button.nextElementSibling//document.querySelector(".accordion__body");
	const icon = document.querySelector(".accordion__icon");
	icon.classList.toggle("accordion__icon--rotate");

	if(body.style.maxHeight) {
		body.style.maxHeight = null;
	}
	else {
		body.style.maxHeight = body.scrollHeight + "px";
	}
}

const question = {
	title: "¿Quien es Luis Quintero Hernández?",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
};
const questions = ref([
	{
		title: "¿Quien es Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: true,
	},
	{
		title: "¿Donde nació Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿Cuantos años tiene Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿En que equipo juega Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿En que posición o cual es la posición que juega Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿Cuantos goles ha marcado Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿Cuantas asistencias ha dado Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿Cual es el Twitter de Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿Cual es el Instagram de Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿Cual es el perfil Transfermarkt de Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿Cual es el perfil Besoccer de Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
	{
		title: "¿Cual es pagina web oficial de Luis Quintero Hernández?",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat sed quae nemo voluptate architecto rerum reiciendis voluptatibus. Optio, inventore error. Voluptatibus placeat velit, corrupti minima obcaecati ducimus nemo iure sunt porro quia voluptatum aspernatur dignissimos quisquam perspiciatis consectetur voluptas.",
		showText: false,
	},
]);
</script>
<style scoped>
.accordion{
	max-width: 720px;
}
.accordion__header{
	display: flex;
	cursor: pointer;
	justify-content: space-between;
	background: #cecece;
	padding: 1rem 2rem;
}
.accordion__title{

}
.accordion__icon{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	transition: transform .45s ease-in-out;
	transform: rotate(0deg);
}
.accordion__icon--rotate{
	transition: transform .45s ease-in-out;
	transform: rotate(-135deg);
}
.accordion__body{
	margin: 1rem 0;
	padding: 0 2rem;
	max-height: 0;
	overflow: hidden;
	transition: max-height .45s ease-out;
}
.accordion__text{
	
}
</style>
