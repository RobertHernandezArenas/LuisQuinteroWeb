if ('serviceWorker' in navigator) {
	self.addEventListener('load', () => {
		navigator.serviceWorker.register('./service-worker.js');
	});
}

const nameCache = 'cache-v1.0';
const cacheFiles = [
	//pages
	'/index.html',
	//images
	'/images/quintero.jpeg',
	'/images/demo.jpg',
	'/images/hero/luisito-villarreal-300.webp',
	'/images/hero/luisito-villarreal-500.webp',
	'/images/hero/luisito-villarreal-300.png',
	'/images/hero/luisito-villarreal-500.png',
	'/images/hero/quintero.webp',
	'/images/web-logo/light-logo.png',
	'/images/luis-quintero-email.jpg',
	'/images/flags/spain.png',
	'/images/flags/colombia.png',
	'/images/animations/glitch-fx/LUIS-COLOMBIA.webp',
	'/images/animations/glitch-fx/LUIS-VILLARREAL.webp',
	'/images/animations/glitch-fx/glitch-1.webp',
	'/images/animations/glitch-fx/glitch-2.webp',
	'/images/animations/glitch-fx/glitch-4.webp',
	'/images/animations/glitch-fx/glitch-5.webp',
	/*// font
	'/assets/Poppins-Regular.woff',
	'/assets/Poppins-Bold.woff',
	'/assets/Poppins-Regular.woff2',
	'/assets/Poppins-Bold.woff2',
	//css
	'/assets/HomeView.css',
	'/assets/BiographyView.css',
	'/assets/ContactView.css',*/
	//javascript
	'/service-worker.js',
];

if (caches) {
	self.addEventListener('install', e => {
		e.waitUntil(
			caches.open(nameCache).then(cache => {
				return cache.addAll(cacheFiles).catch(error => {
					console.error('Error al agregar archivos a la caché:', error);
				});
			}),
		);
		console.log('Instalando el Service Worker');
	});

	
self.addEventListener('activate', e => {
	console.log("activado el service worker", e);
});

self.addEventListener('fetch', e => {
	console.log('fetch', e);

	e.respondWith(caches.match(e.request).then(res => res));
});
}

