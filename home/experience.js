document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Contact Us" button
    const contactButton = document.querySelector('.btn-contact-us');
    
    if (contactButton) {
        contactButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            alert('Contact Us button clicked!');
            // You can replace this alert with actual functionality like opening a form or redirecting to a contact page
        });
    }
});
