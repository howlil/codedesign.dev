document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        navbar.classList.toggle('nav-active');
    });
});