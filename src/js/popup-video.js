const vidWrapper = document.getElementById("popupVid");
const vid = document.getElementById("popupVid__vid");
const vidToggle = document.getElementById("popupVid__toggle");
const vidClose = document.getElementById("popupVid__close");
const vidAction = document.getElementById("popupVid__action");

function toggleVid() {
  vidToggle?.classList.contains("popupVid__toggle--playing")
    ? vid?.pause()
    : vid?.play();
  vidToggle?.classList.toggle("popupVid__toggle--playing");
}

function closeVid() {
  vid?.pause();
  vidWrapper?.remove();
}

vidToggle?.addEventListener("click", toggleVid);
vidAction?.addEventListener("click", toggleVid);
vidClose?.addEventListener("click", closeVid);
vid?.addEventListener("ended", () =>
  vidToggle?.classList.remove("popupVid__toggle--playing")
);
