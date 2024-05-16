const indicatorsListItems = document.querySelectorAll(
  ".technosIndicator-listItem a.smoothToSection"
);
const theElements = document.querySelectorAll(".beingObserved");
const options = {
  root: null,
  rootMargin: `0px 0px -600px 0px`,
  threshold: 0,
};
const action = (elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      document
        .querySelector(".technosIndicator-listItem-activeItem")
        ?.classList.remove("technosIndicator-listItem-activeItem");
      document
        .querySelector(`a[href="#${element.target.id}"`)
        ?.parentElement.classList.add("technosIndicator-listItem-activeItem");
    }
  });
};
const sectionObserver = new IntersectionObserver(action, options);

window.addEventListener("DOMContentLoaded", () => {
  theElements.forEach((Element) => sectionObserver.observe(Element));
});
let myTimeout = null;

indicatorsListItems.forEach((item) => {
  item.addEventListener("click", () => {
    sectionObserver.disconnect();
    clearTimeout(myTimeout);
    document
      .querySelector(".technosIndicator-listItem-activeItem")
      .classList.remove("technosIndicator-listItem-activeItem");
    item.parentElement.classList.add("technosIndicator-listItem-activeItem");
    myTimeout = setTimeout(() => {
      theElements.forEach((Element) => sectionObserver.observe(Element));
    }, 1000);
  });
});
// Animating elements on scroll
