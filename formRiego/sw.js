
self.addEventListener( 'install', e => {

    caches.open('cache-1')
    .then( cache => {

     cache.addAll([
        '/index.html',
        '/estilos/formularios.css'

   
     ]);

    });
});