function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector('.change-color');
const spunEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor (event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spunEl.textContent = document.body.style.backgroundColor;
}


