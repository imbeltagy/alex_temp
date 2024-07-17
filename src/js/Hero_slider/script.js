// -----autoplay video on hover-----
const ScreenWidth = window.matchMedia("(max-width: 425px)");

let video = document.querySelectorAll(".silde-video");
for (let i = 0; i < video.length; i++) {
  video[i].onmouseover = () => {
    video[i].play();
  };
  video[i].onmouseleave = () => {
    video[i].pause();
  };
  if (ScreenWidth.matches) {
    video[i].ontouchstart = () => {
      video[i].play();
    };
    video[i].ontouchend = () => {
      video[i].pause();
    };
  }
}
//----------------------------
if (ScreenWidth.matches) {
  document.querySelector(".side-nav-ul").style.display = "none";
  let sideBtn = document.querySelector(".side-nav button");
  sideBtn.onclick = () => {
    document.querySelector(".side-nav-ul").style.display = "flex";
  };
}
