let value = document.getElementById("value");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

let counterValue = 0;

const render = () => {
    value.textContent = counterValue;
}
function callbackIncrement() {
    counterValue++;
    render();
}
increment.addEventListener('click', callbackIncrement);

decrement.addEventListener('click', () => {
    counterValue--;
    render();
});

render();

