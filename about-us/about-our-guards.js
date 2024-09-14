// JavaScript for Guards Section Interactions

// Function to handle hover effect on profile cards
function addProfileCardHoverEffect() {
    const cards = document.querySelectorAll('.profile-card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)'; // Scale up on hover
            card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)'; // Enhanced shadow
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)'; // Reset scale
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Default shadow
        });
    });
}

// Function to initialize animations or effects
function initializeGuardsSection() {
    addProfileCardHoverEffect(); // Add hover effect to profile cards
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeGuardsSection);
