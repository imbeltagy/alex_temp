const primaryButtons = Array.from(
  document.querySelectorAll(".services__primaryButton")
);

function setMousePosition(e) {
  e.target.style.cssText = `
    --bg-left: ${e.offsetX}px;
    --bg-top: ${e.offsetY}px;
    `;
}

primaryButtons.forEach((button) => {
  button.addEventListener("mouseover", setMousePosition);
  button.addEventListener("mouseleave", setMousePosition);
  button.addEventListener("touchstart", setMousePosition);
  button.addEventListener("touchend", setMousePosition);
});
