function getTab(el) {
  const active = document.querySelector(".active");
  const visible = document.querySelector(".content-visiible");
  const tabContent = document.getElementById(el.href.split("#")[1]);

  active.classList.toggle("active");
  visible.classList.toggle("content-visiible");

  el.classList.add("active");
  tabContent.classList.add("content-visiible");
}

document.addEventListener("click", (e) => {
  if (e.target.matches(".tab-item a")) {
    getTab(e.target);
  }
})