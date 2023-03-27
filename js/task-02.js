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
//  #1
// const list = ingredients
// .map((ingredient) => `<li class = "item">${ingredient}</li>`)
// .join("");
// ulEl.innerHTML = list;


//  #2

const completList = [];
ingredients.map(element => {
const listItem = document.createElement("li");
listItem.classList.add("item");
listItem.textContent = element;
completList.push(listItem);
});
ulEl.append(...completList);
