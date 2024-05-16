const process_swiper = new Swiper(".process__swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".process__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});
