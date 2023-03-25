function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl =document.querySelector('.change-color');
const spunEl = document.querySelector('.color');

btnEl.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor (event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spunEl.textContent = getRandomHexColor();
}


