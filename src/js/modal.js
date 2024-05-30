const toggelers = document.querySelectorAll("[data-modal-toggler]");
const targets = new Set();

toggelers.forEach((toggler) => {
  const target = document.querySelector(toggler.dataset.target);
  targets.add(target);

  // Open Modal
  toggler.addEventListener("click", () => {
    target.classList.toggle("display");
    setTimeout(
      () => target.querySelector(".modal-innerBox").classList.toggle("display"),
      0
    );
  });
});

// Close Modal if clicked outside
targets.forEach((target) => {
  target.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      target.classList.remove("display");
      target.querySelector(".modal-innerBox").classList.remove("display");
    }
  });
});
