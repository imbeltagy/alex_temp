const historyMade = new Swiper(".hist__made-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const historyTimeline = new Swiper(".hist__timeline-swiper", {
  slidesPerView: 4,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 5,
    },
  },
});
const histConfig = { attributes: true };
const timelineSlides = document.querySelectorAll(".hist__timelineSlide span");
const timelineSlidePag = document.querySelectorAll(
  ".hist__timeline .swiper-pagination span"
);
const histMadeSlides = document.querySelectorAll(".hist__slide");
const histMadeSlidePag = document.querySelectorAll(
  ".hist__made-swiper .swiper-pagination span"
);

const histMadeTargetNode = document.querySelector(
  ".hist__made-swiper .swiper-wrapper"
);
const timelineTargetNode = document.querySelector(
  ".hist__timeline-swiper .swiper-wrapper"
);

const histMadeObserver = new MutationObserver(() => {
  const currentSlideIndex = histMadeTargetNode.querySelector(
    ".swiper-slide-active"
  ).dataset.swiperSlideIndex;
  timelineSlidePag[currentSlideIndex].click();
});
histMadeObserver.observe(histMadeTargetNode, histConfig);

const timelineObserver = new MutationObserver(() => {
  const currentSlideIndex = timelineTargetNode.querySelector(
    ".swiper-slide-active"
  ).dataset.swiperSlideIndex;
  histMadeSlidePag[+currentSlideIndex].click();
});
timelineObserver.observe(timelineTargetNode, histConfig);

timelineSlides.forEach((slide) => {
  slide.addEventListener("click", (e) => {
    const slideIndex = slide.parentElement.dataset.swiperSlideIndex;
    timelineSlidePag[+slideIndex].click();
  });
});
