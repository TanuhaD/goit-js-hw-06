const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsId = document.getElementById('ingredients');
let list = [];
for (const ing of ingredients) {
  const li = document.createElement('li');
  li.textContent = ing;
  li.classList.add('item');
  list.push(li);
}
console.log(list);
ingredientsId.append(...list);
