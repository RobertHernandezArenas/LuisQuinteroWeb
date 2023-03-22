const nameCache = "LQ10CacheApp";
const cacheFiles = [
	//pages
	"/",
	"/#/",
	//images
	"/images/hero/luisito-villarreal-300.webp",
	"/images/hero/luisito-villarreal-500.webp",
	"/images/hero/luisito-villarreal-300.png",
	"/images/hero/luisito-villarreal-500.png",
	"/images/hero/quintero.webp",
	"/images/web-logo/light-logo.png",
	"/images/luis-quintero-email.jpg",
	"/images/flags/spain.png",
	"/images/flags/colombia.png",
	"/images/animations/glitch-fx/LUIS-COLOMBIA.webp",
	"/images/animations/glitch-fx/LUIS-VILLARREAL.webp",
	"/images/animations/glitch-fx/glitch-1.webp",
	"/images/animations/glitch-fx/glitch-2.webp",
	"/images/animations/glitch-fx/glitch-4.webp",
	"/images/animations/glitch-fx/glitch-5.webp",
	// font
	"/assets/Poppins-Regular.woff",
	"/assets/Poppins-Bold.woff",
	"/assets/Poppins-Regular.woff2",
	"/assets/Poppins-Bold.woff2",
	//css
	"/assets/HomeView.css",
	"/assets/BiographyView.css",
	"/assets/ContactView.css",
	//javascript
	"/assets/index.js",
	"/assets/HomeView.js",
	"/assets/BiographyView.js",
	"/assets/ContactView.js",
	"/js/service-worker.js",
];

if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("/js/service-worker.js")
		.then(registered => {
			console.log("Service Worker instalado", registered);
		})
		.catch(er => {
			console.log("fallo", er);
		});
} else {
	console.log("no soportado");
}

//
self.addEventListener("install", e => {
	e.waitUntil(
		caches.open(nameCache).then(cache => {
			//console.log("cacheando files");
			cache.addAll(cacheFiles);
		}),
	);

	//console.log("instalando el service worker");
});

self.addEventListener("activate", e => {
	//console.log("activado el service worker", e);
});

self.addEventListener("fetch", e => {
	console.log("fetch", e);

	e.respondWith(
		caches.match(e.request).then(res => {
			return res;
		}),
	);
});
