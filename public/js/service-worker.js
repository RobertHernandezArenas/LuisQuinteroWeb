const nameCache = "lq10App";
const cacheFiles = [
	"/",
	"/#/",
	"/images/hero/luisito-villarreal-200.webp",
	"/images/hero/quintero.webp",
	"/images/web-logo/light-logo.png"
];

if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("/js/service-worker.js")
		.then(registered => {console.log("instalado", registered)})
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
