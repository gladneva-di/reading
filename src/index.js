import "./styles/main.scss";
import "./swiper-bundle.min.js";
import "./swiper-bundle.min.css";

// swiper

var Swipes = new Swiper(".cases__swiper", {
  loop: true,
  navigation: {
    nextEl: ".cases__swiper_wrap .cases__swiper-button-next",
    prevEl: ".cases__swiper_wrap .cases__swiper-button-prev",
  },

  pagination: {
    // el: ".swiper-pagination",
    // clickable: true,
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1182: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  on: {
    slideChange: function (swiper) {
      const videos = document.querySelectorAll(".news_item .video");

      videos.forEach((el) => {
        el.pause();
      });
    },
  },
});