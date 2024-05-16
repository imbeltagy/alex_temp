const toTopArrow = document.querySelector(".toTopArrow");

toTopArrow.addEventListener("click", (e) => {
  e.preventDefault();
  if (!toTopArrow.getAttribute("href") === "#") return;

  target = document.querySelector(toTopArrow.getAttribute("href"));
  smoothScroll(target, 1000, 60);
});

// SHOWING TO TOP BUTTON IF SCROLLED FROM MAIN
const heroSection = document.querySelector("#heroSection");
const toTopChecker = new IntersectionObserver(
  (e) => {
    if (e[0].isIntersecting) {
      toTopArrow.classList.remove("toTopFadeIn");
    } else {
      toTopArrow.classList.add("toTopFadeIn");
    }
  },
  { rootMargin: `0px 0px 0px 0px` }
);

toTopChecker.observe(heroSection);

// SMOOTH SCROLL
function smoothScroll(target, duration, reqMargin = 0) {
  let start = window.scrollY,
    end = target.getBoundingClientRect().top - reqMargin,
    time = null,
    EaseInOut = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

  function animation(currentTime) {
    if (time === null) time = currentTime;
    let Elapse = currentTime - time,
      moveBy = EaseInOut(Elapse, start, end, duration);
    window.scrollTo(0, moveBy);
    if (Elapse < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

const smoothAnchors = document.querySelectorAll('.smoothToSection');
smoothAnchors?.forEach((Arrow) => {
  Arrow.addEventListener('click', (e) => {
    e.preventDefault()
    if (!Arrow.getAttribute('href') === '#') return
    const target = document.querySelector(Arrow.getAttribute('href'))
    smoothScroll(target, 1000, 230)
  })
})