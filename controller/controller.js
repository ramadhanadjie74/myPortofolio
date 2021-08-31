const burgerNav = document.querySelector('.burger-nav');
const burgerLogo = document.querySelector('.burger-logo');
const burgerClose = document.querySelector('.open')
const burgerMenu = document.querySelector('.burger-menu')

const sections = document.querySelectorAll("section");
const navLi = document.querySelector(".page-pointer");
const bar = navLi.querySelectorAll(".line");


let open = false;


burgerMenu.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('open');
});

burgerMenu.addEventListener('click', ()=>{
    burgerNav.classList.toggle('open');
});
 
//sec
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
      console.log(current)
    }
  });

  bar.forEach((li) => {
    li.classList.remove("active-bar");
    if (li.classList.contains(current)) {
      li.classList.add("active-bar");
    }
  }

  
  );
});
