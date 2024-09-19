// Function to handle fade-in and fade-out on scroll
function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkPosition() {
        const windowHeight = window.innerHeight;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // Distance from bottom to start fading
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('fade-in-visible');
            } else {
                element.classList.remove('fade-in-visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Initial check
}

// Function for smooth scrolling to anchor links
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    fadeInOnScroll();
    smoothScroll();
});