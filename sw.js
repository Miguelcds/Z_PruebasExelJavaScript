self.addEventListener('install', (event) => {
    console.log('Service Worker instalado');
    event.waitUntil(
      caches.open('app-cache').then((cache) => {
        return cache.addAll([
          './index.html',
          './manifest.json',
          './bilbo.jpg',
          './icono192x192.png',
          './icono512x512.png',
          './styles.css', // Si tienes un archivo CSS
          './script.js'   // Si tienes un archivo JS
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });