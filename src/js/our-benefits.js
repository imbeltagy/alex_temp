const animateOurBenefitsItems = document.querySelectorAll(
  ".ourBenefits__grid--item"
);
const ourBenefitsItemsConfig = {
  root: null,
  rootMargin: `0px 0px 0px 0px`,
  threshold: 0.2,
};

const MutateOurBenefitsItems = (animateOurBenefitsItems) => {
  animateOurBenefitsItems.forEach((element) => {
    const { target } = element;
    if (element.isIntersecting) {
      target.classList.add("visible");
    }
  });
};

const ourBenefitsMutaionObserver = new IntersectionObserver(
  MutateOurBenefitsItems,
  ourBenefitsItemsConfig
);

window.addEventListener("DOMContentLoaded", () => {
  animateOurBenefitsItems.forEach((Element) =>
    ourBenefitsMutaionObserver.observe(Element)
  );
});
