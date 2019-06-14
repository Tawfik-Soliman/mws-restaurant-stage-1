//Name of the cache
const cacheName = 'v1';


// Calling install event
self.addEventListener('install', (e) => {
	console.log('SW installed');
	//caching files in cache
	e.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				console.log(cache);
				cache.addAll([
					// files to be cached
					'/',
					'/index.html',
					'/restaurant.html',
					'/js/main.js',
					'/js/restaurant_info.js',
					'/js/dbhelper.js',
					'/css/styles.css',
					'/data/restaurants.json',
					'/img/1.jpg',
					'/img/2.jpg',
					'/img/3.jpg',
					'/img/4.jpg',
					'/img/5.jpg',
					'/img/6.jpg',
					'/img/7.jpg',
					'/img/8.jpg',
					'/img/9.jpg',
					'/img/10.jpg'
					]);
			})
			//skip waiting after finishing
			.then(() => self.skipWaiting())

	);
});


// Calling activate event
self.addEventListener('activate', (e) => {
	console.log('SW Activated');
	//delete old cache
	e.waitUntil(
		caches
		.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== cacheName) {
						console.log('delete old cache');
						return caches.delete(cache);
					}
				})
			)
		})
	);
});

//caling fetch event
self.addEventListener('fetch', (e) => {
	console.log('Fetching requests');
	// fetch requests
	e.respondWith(fetch(e.request)
		//reply from network or service worker if offline
		.catch(() => caches.match(e.request))
	);
});