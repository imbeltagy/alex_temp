const testimonials = new Swiper(".testi__swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".testi__swiper-pagination",
    clickable: true,
  },
});

const imgsButtons = document.querySelectorAll(".testi__img");
const testiPagination = document.querySelectorAll(
  ".testi__swiper-pagination .swiper-pagination-bullet"
);
imgsButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const clickedImgIndex = btn.dataset.quoteindex - 1;
    testiPagination[clickedImgIndex].click();
  });
});

const targetNode = document.querySelector(".testi__swiper .swiper-wrapper");
const mainImgPreview = document.querySelector(".testi__mainPreview img");
const config = { attributes: true };
const imgsTable = {
  "Tref Griffiths": "../../../assets/Testimonials/tref-griffiths.webp",
  "Nick Konechny": "../../../assets/Testimonials/nick-konechny.webp",
  "Zia Mahmood": "../../../assets/Testimonials/zia-mahmood.webp",
  "Tony Nealon": "../../../assets/Testimonials/tony-nealon.webp",
  "Scott Etherington": "../../../assets/Testimonials/scott-etherington.webp",
  "Mukul Verma": "../../../assets/Testimonials/mukul-verma.webp",
  "Jack Parkin": "../../../assets/Testimonials/jack-parkin.webp",
  "Imogen Venn": "../../../assets/Testimonials/imogen-venn.svg",
};
const swiperObserver = new MutationObserver(() => {
  setTimeout(() => {
    const empName = targetNode.querySelector(".swiper-slide-active").dataset
      .employeename;
    mainImgPreview.src = imgsTable[empName];
  }, 100);
});

swiperObserver.observe(targetNode, config);
