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
