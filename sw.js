const CACHE="ato-de-sagasu-v1";
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE)));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
