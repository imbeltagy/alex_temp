const values_swiper = new Swiper(".valuesSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".valuesPagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      loop: true,
    },
    767: {
      slidesPerView: 3,
      loop: true,
    },
    1200: {
      slidesPerView: 4,
      loop: false,
    },
  },
});
