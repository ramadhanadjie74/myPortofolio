const burgerNav = document.querySelector('.burger-nav');
const burgerLogo = document.querySelector('.burger-logo');
const burgerClose = document.querySelector('.open')
const burgerMenu = document.querySelector('.burger-menu')

let open = false;


burgerMenu.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('open');
});

burgerMenu.addEventListener('click', ()=>{
    burgerNav.classList.toggle('open');
});