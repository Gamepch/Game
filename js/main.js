const tg = document.querySelector('.navbar__tg');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');

tg.addEventListener('click', () => {
    menu.classList.toggle('active')
    links.classList.toggle('active')
});