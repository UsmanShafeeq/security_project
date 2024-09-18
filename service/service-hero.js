// JavaScript for Enhanced Hero Section Interactions

// Function to handle parallax effect
function handleParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroSection.style.backgroundPositionY = `${scrollY * 0.5}px`; // Parallax effect
    });
}

// Function to handle smooth text animations
function handleTextAnimation() {
    const heroTitle = document.querySelector('.hero-section .display-4');
    const heroSubtitle = document.querySelector('.hero-section .lead');
    
    // Check if elements are in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animate text
    function animateText() {
        if (isInViewport(heroTitle)) {
            heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
        }
        if (isInViewport(heroSubtitle)) {
            heroSubtitle.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', animateText);

    // Initial check
    animateText();
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    handleParallaxEffect(); // Initialize parallax effect
    handleTextAnimation();  // Initialize text animation
});
