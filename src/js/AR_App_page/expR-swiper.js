const myExpRSwiper = new Swiper(".exp-r__swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  loop: window.innerWidth < 991,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 575px
    575: {
      slidesPerView: 3,
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 4,
    },
    // when window width is >= 991px
    991: {
      slidesPerView: 6,
    },
  },
});
const AR_App_Config = { attributes: true };
const expRSwiper = document.querySelector(".exp-r__swiper .swiper-wrapper");
const expRQuotesContainer = document.querySelector(".exp-r__quotes");
const expRQuotes = document.querySelectorAll(".exp-r__quote");
const expRSlide = document.querySelectorAll(".exp-r__slide");
const paginationBullets = document.querySelectorAll(
  ".exp-r__swiperPagination .swiper-pagination-bullet"
);
const mutationFn = () => {
  const currentSlideIndex = expRSwiper.querySelector(".swiper-slide-active")
    .dataset.swiperSlideIndex;
  expRQuotesContainer
    .querySelector(".exp-r__quote-active")
    .classList.remove("exp-r__quote-active");
  expRQuotes[+currentSlideIndex]?.classList.add("exp-r__quote-active");
};

const expRMutation = new MutationObserver(mutationFn);
expRMutation.observe(expRSwiper, AR_App_Config);

expRSlide.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    paginationBullets[index]?.click();
    expRQuotesContainer
      .querySelector(".exp-r__quote-active")
      .classList.remove("exp-r__quote-active");
    expRQuotes[+index]?.classList.add("exp-r__quote-active");
    if (window.innerWidth < 991) myExpRSwiper.slideNext();
  });
});
