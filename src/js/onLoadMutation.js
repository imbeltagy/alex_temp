const elements = [...document.querySelectorAll("[data-mutation-onload]")];

const initialMutationClasses = {
  moveUp: ["invisible"],
  moveDown: ["invisible"],
  scaleUp: ["scale-0"],
  slideUp: ["pushed-down"],
};

elements.forEach((element) => {
  const mutation = element.getAttribute("data-mutation-onload");
  const delay = parseInt(element.getAttribute("data-mutation-delay"));
  const duration = parseInt(
    element.getAttribute("data-mutation-duration") || "500"
  );
  const timing = element.getAttribute("data-mutation-timing") || "ease-in-out";

  element.classList.add(...initialMutationClasses[mutation], "mutation");
  if (delay) element.style.animationDelay = delay + "ms";
  if (duration) element.style.animationDuration = duration + "ms";
  if (timing) element.style.animationTimingFunction = timing;
});

window.addEventListener("DOMContentLoaded", () => {
  elements.forEach((element) => {
    const mutation = element.getAttribute("data-mutation-onload");
    element.classList.add(mutation);
  });
});
