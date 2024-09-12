// Smooth scrolling for "Learn More" button

document.querySelector('.btn-custom').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Example: Scroll to a specific section (you can adjust the target selector)
    document.querySelector('#target-section').scrollIntoView({
        behavior: 'smooth'
    });
});

// Optional: Add image zoom effect on hover
document.querySelectorAll('.experience-image').forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', function() {
        img.style.transform = 'scale(1)';
    });
});