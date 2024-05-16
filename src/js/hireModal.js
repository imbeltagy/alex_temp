const hireModal = document.getElementById("hireModal");
const closeHireModal = hireModal.querySelector("button");
const isSession = window.sessionStorage.getItem("hireModal");
const link = document.querySelector(".hireModal__togglers a");

const toggleHireModal = () => {
  hireModal.classList.remove("active");
  window.sessionStorage.setItem("hireModal", "true");
  setTimeout(() => {
    hireModal.remove();
  }, 300);
};
link.addEventListener("click", (e) => {
  e.preventDefault();
  toggleHireModal();
  setTimeout(() => {
    location.href = link.getAttribute("href");
  }, 300);
});
closeHireModal.addEventListener("click", toggleHireModal);
window.addEventListener("DOMContentLoaded", () => {
  if (document.referrer && !isSession) {
    hireModal.classList.add("active");
    return;
  }
  if (!isSession) {
    setTimeout(() => {
      hireModal.classList.add("active");
    }, 5000);
  } else {
    hireModal.remove();
  }
});
