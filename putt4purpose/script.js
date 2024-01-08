let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".navv");
console.log(menu);
let menuItem = document.querySelectorAll(".nav__link");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
});
