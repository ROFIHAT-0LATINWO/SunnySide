let navBurger = document.querySelector('.hamburger');
let popUpNav = document.querySelector('.nav-links');
let popUpAccent = document.querySelector('.popup');
let burger = document.querySelector('.hamburger');
let closeIcon = document.querySelector('.close-icon');

navBurger.addEventListener('click', () => {
    popUpNav.classList.toggle('show-navbar');
    popUpAccent.classList.toggle('show-navbar');
    navBurger.classList.toggle('hide-navbar');
    closeIcon.classList.toggle('hide-navbar');
    closeIcon.classList.toggle('show-navbar');
})

closeIcon.addEventListener('click', () => {
    popUpNav.classList.toggle('show-navbar');
    popUpAccent.classList.toggle('show-navbar');
    navBurger.classList.toggle('hide-navbar');
    closeIcon.classList.toggle('show-navbar');
    closeIcon.classList.toggle('hide-navbar');
})
