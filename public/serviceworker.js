// public/serviceworker.js
self.addEventListener('install', function(event) {
    console.log('Service worker installing...');
});

self.addEventListener('activate', function(event) {
    console.log('Service worker activating...');
});