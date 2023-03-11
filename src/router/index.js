import {
	createRouter,
	createWebHistory,
	createWebHashHistory,
} from "vue-router";


const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/biografia",
			name: "biography",
			component: () => import("../views/BiographyView.vue"),
		},
		
		{
			path: "/galeria",
			name: "gallery",
			component: () => import("../views/GalleryView.vue"),
		},
		{
			path: "/contacto",
			name: "contact",
			component: () => import("../views/ContactView.vue"),
		},
	],
});

export default router;
