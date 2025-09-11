document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true, // Animations only happen once
    });
    feather.replace(); // Replace icons with Feather icons
});