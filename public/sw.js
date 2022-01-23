self.addEventListener('install', function(event) {
    console.log('SW installed');
    event.waitUntil(
        caches.open('static')
        .then(function(cache){
            //cache.add('/');
            //cache.add('/index.html');
            //cache.add('/src/js/app.js');
            cache.addAll([
                '/',
                '/index.html',
                '/src/js/app.js',
                '/src/js/camera.js',
                '/src/css/app.css',
                '/src/images/icons/logo512.png',
                'https://fonts.googleapis.com/css?family=Raleway:400,700'
            ]);
        })
    )
    
});

self.addEventListener('active', function() {
    console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res) {
            if (res) {
                return res;
            } else {
                return fetch(event.request);
            }
        })
    );
});

self.addEventListener('sync', function(event) {
    if (event.tag == 'myFirstSync') {
      event.waitUntil(
          console.log('background sync done')
      );
    }
  });

self.addEventListener('push', function(event){
    event.waitUntil(self.registration.showNotification("test"));
})