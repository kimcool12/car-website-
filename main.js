document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true, // Animations only happen once
    });
    feather.replace(); // Replace icons with Feather icons
});

window.addEventListener("load", () => {
  document.body.header .backgroundImage = "url('indexp1.png')";
});
