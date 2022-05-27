import Swiper, { Navigation, Scrollbar, Autoplay } from "swiper";
import _vars from "../_vars";

Swiper.use([Navigation, Scrollbar, Autoplay]);

const swiper = new Swiper(_vars.slider, {
  spaceBetween: 10,
  slidesPerView: "auto",
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 85,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      scrollbar: {
        dragSize: 140,
        draggable: true,
      },
      centeredSlides: false,
      spaceBetween: 20,
    },
    1600: {
      scrollbar: {
        dragSize: 230,
      },
      centeredSlides: false,
    },
  },
});
