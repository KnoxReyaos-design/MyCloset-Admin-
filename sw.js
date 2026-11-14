// MyCloset local-runtime Admin service worker.
// Keeps the app installable without serving stale data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
