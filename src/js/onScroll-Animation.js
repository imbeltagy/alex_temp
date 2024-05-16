const animatedElements = document.querySelectorAll("[data-mutation]");
const scrollMutationConfig = {
  root: null,
  rootMargin: `0px 0px 0px 0px`,
  threshold: 0.2,
};
const mutationMap = {
  "fadeIn-Mutation": "invisible",
};
const getInitialMutationType = (target) => {
  return mutationMap[target.dataset.mutationType];
};
animatedElements.forEach((element) => {
  element.classList.add(getInitialMutationType(element));
});
const mutationFunction = (animatedElements) => {
  animatedElements.forEach((element) => {
    const { target } = element;
    if (element.isIntersecting) {
      const mutationType = target.dataset.mutationType;
      target.classList.add(mutationType);
      setTimeout(() => {
        target.classList.remove(
          getInitialMutationType(target),
          "getScrollMutation",
          target.dataset.mutationType
        );
        target.removeAttribute("data-mutation-type");
        target.removeAttribute("data-mutation");
        scrollMutationObserver.unobserve(target);
      }, 500);
    }
  });
};

const scrollMutationObserver = new IntersectionObserver(
  mutationFunction,
  scrollMutationConfig
);

window.addEventListener("DOMContentLoaded", () => {
  animatedElements.forEach((Element) =>
    scrollMutationObserver.observe(Element)
  );
});
