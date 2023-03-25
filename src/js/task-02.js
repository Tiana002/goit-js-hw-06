const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
console.log(ulEl)
const list = ingredients
.map((ingredient) => `<li class = "item">${ingredient}</li>`)
.join("");
ulEl.innerHTML = list;
