// JavaScript for Enhanced Result Section Interactions

// Function to handle hover effect on cards with additional animations
function addEnhancedHoverEffect() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px) scale(1.05) rotate(1deg)'; // Lift, scale, and slightly rotate card on hover
            card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)'; // Enhanced shadow with larger spread
            card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease'; // Smooth transition
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0) scale(1) rotate(0)'; // Reset transformation
            card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; // Default shadow
            card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease'; // Smooth transition
        });
    });
}

// Function to initialize animations or effects
function initializeResultSection() {
    addEnhancedHoverEffect(); // Add enhanced hover effect to cards
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeResultSection);
