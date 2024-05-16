const accordion = document.querySelector(".FAQ__accordion");
const panels = Array.from(document.querySelectorAll(".FAQ__accordion-panel"));
let activeIndex = 0;
let duration =
  parseInt(
    getComputedStyle(accordion).getPropertyValue("--animation-duration")
  ) || 5000;

let autoChange;

const setAutoChange = () =>
  (autoChange = setTimeout(() => {
    changePanel((activeIndex + 1) % panels.length);
  }, duration));
setAutoChange();

// Assign the function on your page to work
let onChangePanel = (panel) => {};

function changePanel(index) {
  panels[activeIndex].classList.remove("active");
  setTimeout(() => panels[index].classList.add("active"));
  activeIndex = index;

  onChangePanel(panels[index]);

  clearTimeout(autoChange);
  setAutoChange();
}
window.addEventListener("load", () => changePanel(0));

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    changePanel(index);
  });
});
