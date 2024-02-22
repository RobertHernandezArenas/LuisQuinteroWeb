import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';
import App from '../App.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/biografia',
			name: 'biography',
			component: () => import('../pages/BiographyView.vue'),
		},

		{
			path: '/galeria',
			name: 'gallery',
			component: () => import('../pages/GalleryView.vue'),
		},
		{
			path: '/contacto',
			name: 'contact',
			component: () => import('../pages/ContactView.vue'),
		},
	],
});

export default router;
