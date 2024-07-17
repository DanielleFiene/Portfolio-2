// JavaScript for responsive navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('myNavbar');
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fa fa-bars"></i>'; // You can use any icon library or custom icon here
    navbar.appendChild(menuToggle);

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
