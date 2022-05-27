import { burger } from "../functions/burger";

const gurgerBtn = document?.querySelector(".burger__btn");
const nav = document?.querySelector(".nav");
const navItem = nav?.querySelectorAll(".nav__item");
const html = document.documentElement;

const openMenu = () => {
  if (!nav.classList.contains("nav--active")) {
    html.style.overflowY = "auto";
  }
};

gurgerBtn.addEventListener("click", () => {
  gurgerBtn.classList.toggle("active");
  nav.classList.toggle("nav--active");
  html.style.overflowY = "hidden";

  openMenu();
});

navItem.forEach((el) => {
  el.addEventListener("click", () => {
    nav.classList.remove("nav--active");
    html.style.overflowY = "auto";
    gurgerBtn.classList.remove("active");
  });
});

document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition;
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
