const copyBtn = document.querySelector(".copyBtn");
const moverBtn = document.querySelector(".moverBtn");
const copyText = document.querySelector("textarea[name=copyTxt");
const finalText = document.querySelector("textarea[name=finalTxt");
const output = document.querySelector(".output");

moverBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
})

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp);
})

finalText.addEventListener("click", () => {
  this.select();
})

copyText.addEventListener("click", () => {
  this.select();
})

function copyToClipBoard(str) {
  const outputContainer = document.querySelector(".output-container");
  const textarea = document.createElement("textarea");
  textarea.value = str;
  outputContainer.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  outputContainer.removeChild(textarea);
  output.innerHTML = `<h3>Context Copied!</h3>`
  output.classList.add("added");
  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000)
}