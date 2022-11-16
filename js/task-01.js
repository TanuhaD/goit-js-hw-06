const categoriesEl = document.querySelector('#categories');
const itemEl = document.querySelectorAll('.item');

const totalItems = itemEl.length;
console.log(`Number of categories:${totalItems}`);

for (const item of itemEl) {
  console.log(`Number of categories:${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
}
