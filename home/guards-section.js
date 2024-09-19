document.addEventListener('DOMContentLoaded', function () {
    const profileCards = document.querySelectorAll('.profile-card');

    profileCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const img = card.querySelector('.profile-img');
            img.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', () => {
            const img = card.querySelector('.profile-img');
            img.style.transform = 'scale(1)';
        });

        card.addEventListener('mouseover', () => {
            const overlay = card.querySelector('.overlay');
            overlay.style.opacity = '1';
        });

        card.addEventListener('mouseout', () => {
            const overlay = card.querySelector('.overlay');
            overlay.style.opacity = '0';
        });
    });
});
