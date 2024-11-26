// JavaScript for interactivity can be added here
document.addEventListener('DOMContentLoaded', function () {
    // Example: Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for your message!');
            form.reset();
        });
    }
});