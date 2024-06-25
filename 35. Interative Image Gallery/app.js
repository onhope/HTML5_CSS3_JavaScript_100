const images = document.querySelectorAll("img");
const wrapper = document.querySelector("#wrapper");
const imgWrapper = document.querySelector("#fullImg");
const close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`images/img${index}.jpg`);
  })
})

close.addEventListener("click", () => {
  wrapper.style.display = 'none';
});

function openModal(pic) {
  wrapper.style.display = 'flex';
  imgWrapper.src = pic;
}