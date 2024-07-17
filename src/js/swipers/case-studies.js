const caseSudiesSwiper = new Swiper(".caseStudies__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// the containers of navigation buttons
const swipersNavigation = Array.from(
  document.querySelectorAll(".caseStudies__swiper--navigation")
);

swipersNavigation.forEach((nav, swiperIndex) => {
  const navButtons = Array.from(
    nav.querySelectorAll(".caseStudies__swiper--navigation-button")
  );

  const currentSwipter =
    swipersNavigation.length === 1
      ? caseSudiesSwiper
      : caseSudiesSwiper[swiperIndex];

  // change active button on active index change
  currentSwipter.eventsListeners.activeIndexChange[0] = (i) => {
    navButtons.forEach((currentItem) => currentItem.classList.remove("active"));
    navButtons[i.realIndex].classList.add("active");
  };

  // change active button and active slide on click
  navButtons.forEach((item, itemIndex) => {
    item.addEventListener("click", () => {
      currentSwipter.slideTo(itemIndex);
      navButtons.forEach((currentItem) =>
        currentItem.classList.remove("active")
      );
      item.classList.add("active");
    });
  });
});
