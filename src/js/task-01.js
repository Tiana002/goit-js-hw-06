const totalCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${totalCategories.length}`);
console.log(" ");

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log(" ");
});


