/* OFFERINGS SECTION */
const menuOptions = document.getElementById("offeringsOptionsMenu");
menuOptions.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const currentActiveOption = document.querySelector(
    ".offerings__options-activeButton"
  );
  currentActiveOption.classList.remove("offerings__options-activeButton");
  e.target.classList.add("offerings__options-activeButton");

  const currentActiveCard = document.querySelector(
    ".offerings__card-activeCard"
  );

  const refClickedCard = e.target.dataset.card;

  const requiredCard = document.getElementById(refClickedCard);

  currentActiveCard?.classList.remove("offerings__card-activeCard");
  requiredCard.classList.add("offerings__card-activeCard");
  setTimeout(() => {
    currentActiveCard?.classList.remove("show");
    requiredCard.classList.add("show");
  }, 0);
});

// TECHNOLOGIES SECTION
const techOptions = document.querySelector(".tech__options");

techOptions.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const currentActiveOption = techOptions.querySelector(".tech__option-active");
  currentActiveOption.classList.remove("tech__option-active");
  e.target.parentElement.classList.add("tech__option-active");

  const currentActiveList = document.querySelector(".tech__tools-active");

  const refClickedList = e.target.dataset.techlistid;

  const requiredList = document.getElementById(refClickedList);

  currentActiveList?.classList.remove("tech__tools-active");
  requiredList.classList.add("tech__tools-active");
  setTimeout(() => {
    currentActiveList?.classList.remove("show");
    requiredList.classList.add("show");
  }, 100);
});

const rightArrow = document.querySelector(".menu_right_arrow");
const leftArrow = document.querySelector(".menu_left_arrow");
const typesList = document.querySelector(".offerings__optionsMenu");

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
