function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeToggle = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference on page load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        // Ensure the button text is correct when loading dark mode
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = '🌙';
        }
    }
    // Feather icons are handled by dashboard.js, but not AOS, so moving AOS init for dashboard.html here.
    AOS.init({
        duration: 1000,
        once: true,
    });
    feather.replace(); // Replace icons with Feather icons
});