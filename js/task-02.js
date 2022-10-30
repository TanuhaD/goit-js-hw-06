const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

for(const ingredient of ingredients) {
  const item =  document.createElement("li");
  item.textContent = ingredient;
  ingredientsList.append(item);
}

