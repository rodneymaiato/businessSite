const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu when clicking anywhere else on the document
document.addEventListener('click', (event) => {
    if (menu.classList.contains('active') && event.target !== menu && event.target !== menuToggle) {
        menu.classList.remove('active');
    }
});

// Prevent clicks inside the menu from closing it
menu.addEventListener('click', (event) => {
    event.stopPropagation();
});

