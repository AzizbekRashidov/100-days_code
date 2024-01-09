let elbutton = document.querySelector(".btn");
let elButtonMenu = elbutton.querySelector(".btn__menu");
let elButtonExit = elbutton.querySelector(".btn__exit");
let elNav = document.querySelector(".nav");



elbutton.addEventListener("click", function(evt){
   evt.preventDefault();

   elButtonMenu.classList.toggle("menu__exit");
   elButtonExit.classList.toggle("exit__menu");
   elNav.classList.toggle("nav__blok");
})
