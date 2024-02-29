const images = document.querySelectorAll(".gl img");
const modal = document.querySelector(".detail");
const modalImg = document.querySelector(".detailImg");
const modalTxt = document.querySelector(".detailTxt");
const close = document.querySelector(".detailclose");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.classList.add("detailappear");

    close.addEventListener("click", () => {
      modal.classList.remove("detailappear");
    });
  });
});