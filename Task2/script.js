// Select the navigation element
const nav = document.querySelector('.nav');

// Add scroll event listener
window.addEventListener('scroll', () => {
    // Add scrolled class when scroll position is greater than 50px
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        // Remove scrolled class when scroll position is less than 50px
        nav.classList.remove('scrolled');
    }
});