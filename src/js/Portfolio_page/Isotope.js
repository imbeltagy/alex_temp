const iso = new Isotope(".grid", {
  itemSelector: ".element-section",
  layoutMode: "vertical",
});
const filtersElem = document.querySelector(".filters-button-group");
filtersElem.addEventListener("click", function (event) {
  // only work with buttons
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  const filterValue = event.target.getAttribute("data-filter");
  // use matching filter function
  iso.arrange({ filter: filterValue });
});

const options = document.querySelectorAll(".pp__option button");
options.forEach((option) => {
  option.addEventListener("click", () => {
    document
      .querySelector(".pp__option button.active")
      .classList.remove("active");
    option.classList.add("active");
  });
});
