const tosSwiper = new Swiper(".tos__swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
    1500: {
      slidesPerView: 7,
    },
  },
});
const tosSwiperWrapper = document.querySelector(".tos__swiper .swiper-wrapper");
const tosServicesContainer = document.querySelector(".tos__services");
const tosServices = tosServicesContainer.querySelectorAll(".tos__service");
const tosSlide = tosSwiperWrapper.querySelectorAll(".tos__slide");
const tosPaginationBullets = document.querySelectorAll(
  ".tos__swiperPagination .swiper-pagination-bullet"
);

const tosMutation = () => {
  const currentSlideIndex = tosSwiperWrapper.querySelector(
    ".swiper-slide-active"
  ).dataset.swiperSlideIndex;
  tosServicesContainer
    .querySelector(".tos__service-active")
    .classList.remove("tos__service-active");
  tosServices[+currentSlideIndex]?.classList.add("tos__service-active");
};
const tosMutationObserver = new MutationObserver(tosMutation);
tosMutationObserver.observe(tosSwiperWrapper, AR_App_Config);

tosSlide.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    tosPaginationBullets[index]?.click();
    tosServicesContainer
      .querySelector(".tos__service-active")
      .classList.remove("tos__service-active");
    tosServices[+index]?.classList.add("tos__service-active");
    tosSwiper.slideNext();
  });
});
