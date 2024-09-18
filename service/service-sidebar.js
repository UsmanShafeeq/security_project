document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('service-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');

    image.addEventListener('click', function() {
        lightboxImage.src = this.src; // Set lightbox image source to clicked image source
        lightbox.classList.add('active');
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});