//Name of the cache
const cacheName = 'v1';


// Calling install event
self.addEventListener('install', (e) => {
	console.log('SW installed');
	//caching files in cache
});


// Calling activate event
self.addEventListener('activate', (e) => {
	console.log('SW Activated');
});