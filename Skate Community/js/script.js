const botaomenu = document.querySelector('.cabeca-menu');
const menu = document.querySelector('.menu-lateral');

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-active')
});