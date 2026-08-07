const CACHE_NAME = "qlogpro-v1";

const CACHE_NAME = "qlogpro-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",

  "./icons/icon-192.png",
  "./icons/icon-512.png",

  "./libs/xlsx.full.min.js",
  "./libs/jsQR.js",
  "./libs/qrcode.min.js",
  "./libs/html2pdf.bundle.min.js"
];

self.addEventListener("install", event=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event=>{
    event.respondWith(
        caches.match(event.request)
        .then(response=>response || fetch(event.request))
    );
});