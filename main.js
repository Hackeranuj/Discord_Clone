const navBtnEl = document.querySelector("#nav-btn");
const openNavEl = document.querySelector("#open-nav");
const headerEl = document.querySelector("#hero-container");
const navMobileEL = document.querySelector("#nav-mobile-menu");
const closenavEl = document.querySelector("#nav-menu-btn");

navBtnEl.addEventListener("click", function () {
  navMobileEL.classList.remove("hidden");
  navMobileEL.classList.remove(`-right-[100%]`);
  navMobileEL.classList.add(`right-0`);
  document.body.style.overflowY = "hidden";
});

closenavEl.addEventListener("click", function () {
  navMobileEL.classList.remove(`right-0`);
  navMobileEL.classList.add(`-right-[100%]`);
  document.body.style.overflowY = "visible";
});
