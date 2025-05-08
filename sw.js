self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('app-cache-v5.3').then((cache) => { // Cambiar nombre siempre que actualice la app para que la funcion del script se ejecute
            return cache.addAll([
                './index.html',
                './styles.css',
                './script.js',
                './manifest.json',
                './icono192x192.png',
                './icono512x512.png'
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== 'app-cache-v2') {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

