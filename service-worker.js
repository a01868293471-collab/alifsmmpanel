
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('a
ctivate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return new Response("Network error occurred");
    })
  );
});
