const accordion = document.querySelector(".FAQ__accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".FAQ__accordion-panel");
  if (!activePanel) return;
  activePanel.classList.toggle("active");
});
