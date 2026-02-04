const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const body = document.body;
const navLinks = document.querySelectorAll('.navbar a');

// Open menu
openMenu.addEventListener('click', () => {
    body.classList.add('showMenu');
});

// Close menu
closeMenu.addEventListener('click', () => {
    body.classList.remove('showMenu');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('showMenu');
    });
});