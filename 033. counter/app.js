let countEl = document.getElementById("count");
let saveEl = document.getElementById("save");
let incrementBtn = document.querySelector(".increment-btn");
let saveBtn = document.querySelector(".save-btn");

let count = 0;


incrementBtn.addEventListener("click", () => {
    count += 1;
    countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
    let counterStr = count + " , ";
    saveEl.textContent += counterStr;
    countEl.textContent = 0;
    count = 0;
})