document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(i) {
        testimonials.forEach((testimonial, idx) => {
            testimonial.style.display = idx === i ? 'block' : 'none';
        });
    }

    showTestimonial(index);

    setInterval(function() {
        index = (index + 1) % totalTestimonials;
        showTestimonial(index);
    }, 5000); // Change testimonial every 5 seconds
});