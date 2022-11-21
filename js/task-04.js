let value = document.getElementById('value');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');

let counterValue = 0;

function handleIncClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
function handleDecClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
value.textContent = counterValue;

increment.addEventListener('click', handleIncClick);
decrement.addEventListener('click', handleDecClick);
