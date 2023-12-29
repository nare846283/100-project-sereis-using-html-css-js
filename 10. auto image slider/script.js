const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const imageEl = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".pic-wrapper");
let currentImg = 1;
let timeout;

nextBtn.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevBtn.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imageEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imageEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
