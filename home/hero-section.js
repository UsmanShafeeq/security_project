document.addEventListener('DOMContentLoaded', () => {
    // Select the hero section info div
    const heroInfo = document.querySelector('.hero-section .info');

    // Add a delay to stimulate a smooth fate-in effect after page load
    setTimeout(() => {
        heroInfo.classList.add('active');

    }, 300);

    // Add hover effect to the button with  JS
    const btnAppointment = document.querySelector('.btn-appointment');

    btnAppointment.addEventListener('mouseenter', () => {
        btnAppointment.style.transform = 'scale(1.1)';
        btnAppointment.style.transition = 'transform 0.2s ease';
    });
    btnAppointment.addEventListener('mouseleave', () => {
        btnAppointment.style.transform = 'scale(1)';
        btnAppointment.style.transition = 'transform 0.2s ease';

    });
});