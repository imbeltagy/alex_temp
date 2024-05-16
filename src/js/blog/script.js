const swiper = new Swiper(".latest_swiper_controller", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const rightArrow = document.querySelector(".types_right_arrow");
const leftArrow = document.querySelector(".types_left_arrow");
const typesList = document.querySelector(".posts_type_list");

rightArrow.addEventListener("click", () => {
  typesList.scrollBy(typesList.clientWidth, 0);
});
leftArrow.addEventListener("click", () => {
  typesList.scrollBy(-typesList.clientWidth, 0);
});

const allBtns = document.querySelectorAll(".posts_type_btn");

allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentActiveBtn = document.querySelector(
      ".posts_type_btn.activeType"
    );

    currentActiveBtn.classList.remove("activeType");
    btn.classList.add("activeType");
  });
});
