const procsHeight = 471.33 * 7;
const indicatorBar = document.querySelector(".indicator-bar");

const indicatorsListItems = document.querySelectorAll(
  ".procsIndicator .procsIndicator-listItem"
);
const activeIndicators = (dataCount) => {
  for (let i = 0; i < dataCount; i++) {
    indicatorsListItems[i].classList.add("active");
  }
  for (let i = dataCount; i < 7; i++) {
    indicatorsListItems[i].classList.remove("active");
  }
};
const theElements = document.querySelectorAll(".beingObserved");
const options = {
  root: null,
  rootMargin: `0px 0px -600px 0px`,
  threshold: 0,
};
const action = (elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      activeIndicators(+element.target.dataset.count);
      return;
    }
    if (document.querySelector(".procs").getBoundingClientRect().y > 0) {
      activeIndicators(0);
    }
  });
};
const sectionObserver = new IntersectionObserver(action, options);

window.addEventListener("DOMContentLoaded", () => {
  theElements.forEach((Element) => sectionObserver.observe(Element));
});

window.addEventListener("scroll", () => {
  let distance = 135;
  if (window.innerWidth > 1200) distance = 120;
  if (window.innerWidth > 1400) distance = 45;
  const cardY =
    document.querySelector(".procs__card").getBoundingClientRect().y - distance;
  indicatorBar.style.width = `${-(cardY / procsHeight) * 100}%`;
});
