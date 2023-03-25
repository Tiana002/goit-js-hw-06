function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnDestroy = document.querySelector("button[data-destroy]");
const btnCreate = document.querySelector("button[data-create]");
const boxEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");

btnDestroy.addEventListener("click", destroyBoxes);
btnCreate.addEventListener("click", onCreate);


function onCreate() {
createBoxes()

} 

function createBoxes (amount) {
 
  amount = Number(inputEl.value);
  const array = [];
 
  let divSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = getRandomHexColor();
    divSize += 10;
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.style.margin = "10px";
    array.push(div);
  }

  boxEl.innerHTML = array
    .map((obj) => {
      return `${obj.outerHTML}`;
    })
    .join("");
}

function destroyBoxes() {
boxEl.innerHTML = '';
inputEl.value = '';
}



