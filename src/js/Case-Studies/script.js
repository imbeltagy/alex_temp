const cards = Array.from(
  document.querySelectorAll(".caseStudies__cards--card")
).forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = card.querySelector(
      ".caseStudies__cards--cardLink"
    ).href;
  });
});

const featuredCards = Array.from(
  document.querySelectorAll(".featuredInsights__card")
).forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = card.querySelector(
      ".featuredInsights__cardLink"
    ).href;
  });
});

onChangePanel = (panel) => {
  document.querySelector(".points__lgCoverImage img").src = panel.querySelector(
    ".points__coverImage img"
  ).src;
};
