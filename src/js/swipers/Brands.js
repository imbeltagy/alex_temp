const process_swiper = new Swiper(".brands__swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 7,
    },
  },
});
