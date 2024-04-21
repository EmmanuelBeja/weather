const CACHE_NAME = "V1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install SW
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  )
});

// Listen for requests
// make requests and if fails which could mean no internet display offline file
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(() => {
        return fetch(e.request)
          .catch(() => caches.match('offline.html'));
      })
  )
});

// Activate SW
self.addEventListener('activate', (e) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  e.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhiteList.includes(cacheName)) {
                return caches.delete(cacheName);
            }
          })
      ))
  )
});
