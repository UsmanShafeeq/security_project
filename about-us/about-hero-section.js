document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById('heroSection');
    const heading = document.querySelector(".section-heading");
    const description = document.querySelector(".section-description");
    // Initial state: Hide elements with scale and color change
    heading.style.opacity = "0";
    description.style.opacity = "0";
    heading.style.transform = "translateY(-50px) scale(0.9)";
    description.style.transform = "translateY(-50px) scale(0.9)";
    heading.style.color = "#555";

    // Animate elements after a short delay
    setTimeout(() => {
        heading.style.color = "#333";
        heading.style.transform = "translateY(0) scale(1)";
        description.style.transform = "translateY(0) scale(1)";

        heading.style.transition = "opacity 1s ease-out, transform 1s ease-out, color 1s ease-out";
        description.style.transition = "opacity 1s ease-out, transform 1s ease-out";

        heading.style.opacity = "1";
        description.style.opacity = "1";
        heading.style.transform = "translateY(0) scale(1)";
        description.style.transform = "translateY(0) scale(1)";
        heading.style.color = "#333";
    }, 300); // Wait 1 second before animating elements

    // Add hover effect for heading and description
    heading.addEventListener('mouseover', () => {
        heading.style.transform = "scale(1.05)";
        heading.style.color = "#ffcc00";

    });
    heading.addEventListener('mouseout', () => {
        heading.style.transform = "scale(1)";
        heading.style.color = "#000";
    });
    description.addEventListener('mouseover', () => {
        description.style.transform = "scale(1.05)";
        description.style.color = "#555";
    });
    description.addEventListener('mouseout', () => {
        description.style.transform = "scale(1)";
        description.style.color = "#666";
    });



});