/**
 * Serani Export - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
});

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Optional: Animate hamburger to X
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                // Simple transform for now, can be enhanced with CSS classes
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}
