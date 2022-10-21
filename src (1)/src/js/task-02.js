const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ul = document.getElementById("ingredients");

for(let i = 0; i < ingredients.length; i++) {
  let newLi = document.createElement("li");
  newLi.innerHTML = ingredients[i];
  newLi.classList.add("item");
  newLi.id = ingredients[i];
  ul.prepend(newLi);
}

