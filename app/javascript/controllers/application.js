import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js')
        .then(function(registration) {
            console.log('Service worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.error('Service worker registration failed:', error);
        });
}