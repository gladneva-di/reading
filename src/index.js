import "./styles/main.scss";
import "./swiper-bundle.min.js";
import "./swiper-bundle.min.css";
import {PageFlip} from 'page-flip';

const pageFlip = new PageFlip(document.getElementById('book'),
    {
        width: 150, // required parameter - base page width
        height: 157,  // required parameter - base page height
        size: "stretch",
        // showCover: true
        minWidth: 150,
        maxWidth: 730,
        minHeight: 157,
        maxHeight: 755,
        // size: "stretch",
        drawShadow: false,
        usePortrait: false,
    }
);

pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

// swiper

var Swipes = new Swiper(".cases__swiper", {
  loop: true,
  navigation: {
    nextEl: ".cases__swiper_wrap .cases__swiper-button-next",
    prevEl: ".cases__swiper_wrap .cases__swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

const pages = document.querySelectorAll(".pageNum");

pages.forEach((element) => element.addEventListener("click", () => {
  console.log(element.getAttribute("page"));
  console.log(Number(element.getAttribute("page")));
  pageFlip.turnToPage(Number(element.getAttribute("page")));
}));
document.addEventListener('click', () => {
  console.log(pageFlip.getCurrentPageIndex());
})
