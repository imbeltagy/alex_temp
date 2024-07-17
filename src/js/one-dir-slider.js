const sliderComponents = [...document.querySelectorAll(".one-dir-slider")];
const sliderComponentsChildren = sliderComponents.map((element) => {
  return element.querySelectorAll(".slide");
});

const textSliderComponents = [...document.querySelectorAll(".text-slider")];
const textSliderComponentsChildren = textSliderComponents.map((element) => {
  return element.querySelectorAll(".text-slide");
});

const videoBullets = [...document.querySelectorAll(".bullet")];

// Get Animation Duration
const availableSlider = sliderComponents[0] || textSliderComponents[0];
const animationDuration = Number(
  getComputedStyle(availableSlider).getPropertyValue("--animation-duration")
);

let index = 0;
let slidesCount = 100;

//Get Slides Count
(sliderComponentsChildren || textSliderComponentsChildren).forEach(
  (elementslides) => {
    if (slidesCount > elementslides.length) {
      slidesCount = elementslides.length;
    }
  }
);

function handleChangeText() {
  textSliderComponentsChildren.forEach((elementslides) => {
    // Remove Old Active
    elementslides.forEach((element) => {
      element.classList.remove("active");
    });
    // Set New Active
    elementslides[index].classList.add("active");
  });
}

function handleChangeImage() {
  sliderComponentsChildren.forEach((elementslides) => {
    // Send to Top & Set Active
    elementslides[index].style.zIndex = elementslides.length;
    setTimeout(() => {
      elementslides[index].classList.add("active");
    });
    // Old Active
    elementslides.forEach((element, i) => {
      if (i !== index) {
        // Send Old To bottom
        element.style.zIndex = 0;
        // Remove Active after animation ends
        setTimeout(() => {
          element.classList.remove("active");
        }, animationDuration);
      }
    });
  });
}
// Handle the video bullet change---------------
const activeBullet = document.querySelector(".bullet.active");
const moveDistanse = Number(
  getComputedStyle(activeBullet).getPropertyValue("--move-distance")
);
function moveDown() {
  activeBullet.classList.add("expand");
  setTimeout(() => {
    activeBullet.classList.remove("expand");
    activeBullet.style.top = `${index * moveDistanse}px`;
  }, animationDuration / 2);
}
function moveToEnd() {
  activeBullet.classList.add("expand");
  activeBullet.style.top = `${(index - 1) * moveDistanse}px`;
  setTimeout(() => {
    activeBullet.classList.remove("expand");
    activeBullet.style.top = `${index * moveDistanse}px`;
  }, animationDuration / 2);
}
function moveUP() {
  activeBullet.classList.add("expand");
  activeBullet.style.top = `${index * moveDistanse}px`;
  setTimeout(() => {
    activeBullet.classList.remove("expand");
  }, animationDuration / 2);
}

// ---------Action of the buttons ----------
const nextBtn = document.getElementById("one-dir-slider-next");
const prevBtn = document.getElementById("one-dir-slider-prev");
const btns = [prevBtn, nextBtn];

function setBtnDisabled() {
  btns.forEach((element) => {
    element.disabled = true;
  });
  setTimeout(() => {
    btns.forEach((element) => {
      element.disabled = false;
    });
  }, animationDuration);
}

function handleNext() {
  setBtnDisabled();
  index = (index + 1) % slidesCount;
  if (index == 0) {
    moveUP();
  } else {
    moveDown();
  }
  handleChangeImage();
  handleChangeText();
}
function handlePrev() {
  setBtnDisabled();
  index = (index - 1) % slidesCount;
  if (index < 0) {
    index = slidesCount - 1;
    moveToEnd();
  } else {
    moveUP();
  }
  handleChangeImage();
  handleChangeText();
}

nextBtn.onclick = handleNext;
prevBtn.onclick = handlePrev;
